import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/providers/ToastProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tejus S",
  description: "Portfolio website of Tejus S (a full-stack developer) built using Next.js. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
