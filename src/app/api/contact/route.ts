import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const formSchema = z.object({
  name: z.string().min(1, "Please Input Your Name ").max(50, "Name is too long"),
  email: z.string().email({ message: "Please Input Your Email" }),
  message: z.string().min(1, "Please Input Your Message ").max(250, "Message is too long"),
});

export async function POST(request: NextRequest) {
  try {
    const values = await request.json();
    const validatedValues = formSchema.safeParse(values);
    if (!validatedValues.success) {
      return new NextResponse("Invalid data. ",{status: 400});
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, 
      },
    });

    const mailData = {
      from: process.env.EMAIL_USER, 
      to: "thequantumcoder@gmail.com",
      subject: `Portfolio Contact Form Submission from ${validatedValues.data.name}`,
      text: `Name: ${validatedValues.data.name}\nEmail: ${validatedValues.data.email}\nMessage: ${validatedValues.data.message}`,
    };

    const info = await transporter.sendMail(mailData);
    console.log('Email sent successfully:', info.response);

    return NextResponse.json({ success: "true" });
  } catch (error) {
    return new NextResponse("Internal Server Error. ", { status: 500 });
  }
}