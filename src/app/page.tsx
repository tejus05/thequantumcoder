"use client";

import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Cursor from '@/components/Cursor';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import { useActive } from "@/hooks/useActiveStore";
import Image from "next/image";
import * as React from "react";


const HeroSection: React.FC = () => {
  const { isActive, setIsActiveFalse, setIsActiveTrue } = useActive();



  return (
    <section className="flex flex-col items-center justify-center px-4 md:flex-row md:justify-between md:px-8 lg:px-16 md:-mt-12 -mt-16 w-full h-screen">
      <div
        className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/2"
        onMouseOver={() => {
          setIsActiveTrue();
        }}
        onMouseLeave={() => {
          setIsActiveFalse();
        }}
      >
        <h2 className="text-4xl text-center uppercase font-bold leading-tight text-gray-800 md:text-5xl lg:text-6xl">
          I Code the Magic Behind Your{" "}
          <span className="text-indigo-600">Next Big Idea</span>
        </h2>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2">
        <Image
          src="hero.svg"
          alt="A Programmer"
          width={500}
          height={500}
          className="w-full max-w-lg mx-auto md:max-w-none"
          priority
        />
      </div>
      <Cursor isActive={isActive} />
    </section>
  );
};

const HomePage: React.FC = () => (
  <div className="flex flex-col items-center bg-white">
    <Header />
    <HeroSection />
    <AboutMe/>
    <Projects/>
    <Contact />
    <Footer/>
  </div>
);

export default HomePage;