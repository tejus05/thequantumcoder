"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`md:text-[15px] hover:text-white hover:bg-indigo-600 px-3 py-2 hover:rounded-full transition-all duration-0 text-[#222222] text-xs font-medium`}
    >
      {children}
    </Link>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 flex flex-col items-center pt-4 bg-white w-full">
      <div className="flex gap-5 px-5 w-full text-black whitespace-nowrap max-w-7xl">
        <Link href="/" className="flex-auto sm:text-2xl font-bold text-xl hover:opacity-90 transition text-black/85">
          thequantumcoder
        </Link>
        <nav className="hidden justify-between items-center md:flex space-x-10">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              className="flex items-center md:hidden"
              aria-label="Toggle Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="top" className="flex flex-col gap-4 p-4">
            <Link href="/" className="text-xl  font-bold">
              thequantumcoder
            </Link>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </SheetContent>
        </Sheet>
      </div>
      <div className="self-stretch mt-4 w-full border-t border-solid bg-neutral-400 border-neutral-400 h-[1px] shadow-md shadow-neutral-400" />
    </header>
  );
};

export default Header;
