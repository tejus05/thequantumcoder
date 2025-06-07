import { Link as ScrollLink } from "react-scroll";
import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white p-8 relative bottom-0 flex justify-center items-center flex-col gap-10 text-center">
      <ScrollLink
        to="home"
        smooth
        duration={500}
        className={cn(
          buttonVariants({ variant: "link" }),
          "text-white cursor-pointer text-2xl italic"
        )}
      >
        Tejus S
      </ScrollLink>
      <div className="flex justify-center sm:gap-10 gap-3 text-center items-center w-full max-w-[30%] sm:flex-row flex-col">
        <ScrollLink
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-white cursor-pointer text-lg"
          )}
          to="home"
          smooth
          duration={500}
        >
          Home
        </ScrollLink>
        <ScrollLink
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-white cursor-pointer text-lg"
          )}
          to="about"
          smooth
          duration={500}
        >
          About
        </ScrollLink>
        <ScrollLink
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-white cursor-pointer text-lg"
          )}
          to="projects"
          smooth
          duration={500}
        >
          Projects
        </ScrollLink>
        <ScrollLink
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-white cursor-pointer text-lg"
          )}
          to="contact"
          smooth
          duration={500}
        >
          Contact
        </ScrollLink>
      </div>
      <div className="flex justify-center md:gap-10 items-center w-full max-w-[30%] gap-3">
        <Link
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-white text-2xl"
          )}
          target="_blank"
          href="https://x.com/heytejus"
        >
          <Twitter className="sm:h-8 sm:w-8 h-6 w-6" />
        </Link>
        <Link
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-white text-2xl"
          )}
          target="_blank"
          href="https://www.linkedin.com/in/tejus05"
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
          href="mailto:tejus05.work@gmail.com"
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
