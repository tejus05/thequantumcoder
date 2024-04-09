"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-scroll";
import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?(): void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {

  return (
    <Link
      to={href}
      smooth
      duration={500}
      className={`md:text-[15px] hover:text-white hover:bg-indigo-600 px-3 py-2 hover:rounded-full transition-all duration-0 text-[#222222] text-xs font-medium cursor-pointer`}
      onClick={onClick}
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
        <Link
          to="home"
          className="sm:text-2xl font-bold text-xl hover:opacity-90 transition text-black/85 cursor-pointer"
          smooth
          duration={500}
        >
          thequantumcoder
        </Link>
        <div className="flex-1" />
        <nav className="hidden justify-between items-center md:flex space-x-10">
          <NavLink href="home">Home</NavLink>
          <NavLink href="about">About</NavLink>
          <NavLink href="projects">Projects</NavLink>
          <NavLink href="contact">Contact</NavLink>
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
            <Link to="/" className="text-xl  font-bold">
              thequantumcoder
            </Link>
            <NavLink onClick={()=>setIsOpen(false)} href="home">Home</NavLink>
            <NavLink onClick={()=>setIsOpen(false)} href="about">About</NavLink>
            <NavLink onClick={()=>setIsOpen(false)} href="projects">Projects</NavLink>
            <NavLink onClick={()=>setIsOpen(false)} href="contact">Contact</NavLink>
          </SheetContent>
        </Sheet>
      </div>
      <div className="self-stretch mt-4 w-full border-t border-solid bg-neutral-400 border-neutral-400 h-[1px] shadow-md shadow-neutral-400" />
    </header>
  );
};

export default Header;
