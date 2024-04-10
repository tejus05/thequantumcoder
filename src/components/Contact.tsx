"use client";

import { useActive } from "@/hooks/useActiveStore";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "./ui/input";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Check, Copy, Rocket } from "lucide-react";
import { Badge } from "./ui/badge";
import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const { setIsActiveFalse, setIsActiveTrue } = useActive();

  const [copied, setCopied] = useState(false);
  const onCopy = () => {
    navigator.clipboard.writeText("thequantumcoder@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const formSchema = z.object({
    name: z.string().min(1, "Please Input Your Name ").max(50, "Name is too long"),
    email: z.string().email({ message: "Please Input Your Email" }),
    message: z.string().min(1, "Please Input Your Message ").max(250, "Message is too long"),
  });

  type TFormSchema = z.infer<typeof formSchema>;

  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    }
  });

  const onSubmit = async (values: TFormSchema) => {
    try {
      const validatedValues = formSchema.safeParse(values);
      if (!validatedValues.success) {
        return toast.error("Please enter valid data. ");
      }
      const response = await axios.post("/api/contact", validatedValues.data);
      form.reset();
      toast.success("Thank you for reaching out! We'll get back to you shortly. ");
    } catch (error) {
      toast.error("Something went wrong. Please try again. ");
    }
  }

  return (
    <section
      className="flex lg:flex-row flex-col justify-around items-center md:px-16 px-7 lg:pb-10 md:pb-20 pb-16 bg-[#C1EDB9] w-full min-h-screen h-full"
      id="contact"
    >
      <div className="flex flex-col gap-5 py-20 lg:text-left text-center lg:pr-10">
        <h1
          className="lg:text-5xl md:text-4xl text-3xl font-semibold lg:text-left text-center"
          onMouseOver={() => {
            setIsActiveTrue();
          }}
          onMouseLeave={() => {
            setIsActiveFalse();
          }}
        >
          Get In Touch
        </h1>
        <p
          className="lg:text-2xl md:text-xl text-lg text-muted-foreground font-normal mt-0 xl:mt-4 lg:text-left text-center"
          onMouseOver={() => {
            setIsActiveTrue();
          }}
          onMouseLeave={() => {
            setIsActiveFalse();
          }}
        >
          Leave your message here and we&apos;ll get back to you shortly
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full xl:max-w-[40%] lg:max-w-[50%] md:max-w-[70%] max-w-[90%]"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Label className="text-lg text-black/80">Name</Label>
                <FormControl>
                  <Input
                    {...field}
                    disabled={form.formState.isSubmitting}
                    placeholder="Enter your name"
                    className="h-12 text-lg rounded-xl bg-[#E2FFD8]"
                  />
                </FormControl>
                {form.formState.errors.name ? (
                  <span className="text-sm text-rose-500">
                    {form.formState.errors.name.message}
                  </span>
                ) : null}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Label className="text-lg text-black/80">Email</Label>
                <FormControl>
                  <Input
                    {...field}
                    disabled={form.formState.isSubmitting}
                    placeholder="Enter your email"
                    className="h-12 text-lg rounded-xl bg-[#E2FFD8]"
                  />
                </FormControl>
                {form.formState.errors.email ? (
                  <span className="text-sm text-rose-500">
                    {form.formState.errors.email.message}
                  </span>
                ) : null}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Label className="text-lg  text-black/80">Message</Label>
                <FormControl>
                  <Textarea
                    {...field}
                    disabled={form.formState.isSubmitting}
                    placeholder="Enter your message"
                    rows={4}
                    className="text-lg rounded-xl bg-[#E2FFD8]"
                  />
                </FormControl>
                {form.formState.errors.message ? (
                  <span className="text-sm text-rose-500">
                    {form.formState.errors.message.message}
                  </span>
                ) : null}
              </FormItem>
            )}
          />
          <div className="flex justify-between items-center md:flex-row flex-col-reverse gap-7 md:gap-0">
            <Button
              className="bg-[#38DB00] rounded-lg text-[17px] px-5 py-6 hover:bg-[#33C700]"
              type="submit"
              variant="default"
              disabled={form.formState.isSubmitting}
            >
              Hit Me Up
              <Rocket className="ml-2" />
            </Button>
            <Badge className="px-5 py-2 font-normal text-[14px] flex items-center">
              <span
                className="font-medium flex items-center gap-x-2 cursor-pointer hover:underline transition"
                onClick={onCopy}
              >
                thequantumcoder&#64;gmail.com
                <span>
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </span>
              </span>
            </Badge>
          </div>
        </form>
      </Form>
    </section>
  );
}

export default Contact