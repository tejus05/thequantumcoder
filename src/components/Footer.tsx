import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white p-8 relative bottom-0 flex justify-center items-center flex-col gap-10 text-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "link" }),
          "text-white text-2xl italic"
        )}
      >
        thequantumcoder
      </Link>
      <div className="flex justify-center sm:gap-10 gap-3 text-center items-center w-full max-w-[30%] sm:flex-row flex-col">
        <Link
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-white text-lg"
          )}
          href="/"
        >
          Home
        </Link>
        <Link
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-white text-lg"
          )}
          href="#about"
        >
          About
        </Link>
        <Link
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-white text-lg"
          )}
          href="#projects"
        >
          Projects
        </Link>
        <Link
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-white text-lg"
          )}
          href="#contact"
        >
          Contact
        </Link>
      </div>
      <div className="flex justify-center md:gap-10 items-center w-full max-w-[30%] gap-3">
        <Link
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-white text-2xl"
          )}
          target="_blank"
          href="https://twitter.com/thequantumcoder"
        >
          <Twitter className="sm:h-8 sm:w-8 h-6 w-6" />
        </Link>
        <Link
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-white text-2xl"
          )}
          target="_blank"
          href="https://www.linkedin.com/in/thequantumcoder/"
        >
          <Linkedin className="sm:h-8 sm:w-8 h-6 w-6" />
        </Link>
        <Link
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-white text-2xl"
          )}
          target="_blank"
          href="https://github.com/tejus05"
        >
          <Github className="sm:h-8 sm:w-8 h-6 w-6" />
        </Link>
        <Link
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-white text-2xl"
          )}
          target="_blank"
          href="mailto:thequantumcoder@gmail.com"
        >
          <Mail className="sm:h-8 sm:w-8 h-6 w-6" />
        </Link>
        <Link
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-white text-2xl"
          )}
          target="_blank"
          href="https://www.instagram.com/thenightsky"
        >
          <Instagram className="sm:h-8 sm:w-8 h-6 w-6" />
        </Link>
      </div>
      <div className="text-center text-balance">
        &copy; 2024 Tejus S. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
