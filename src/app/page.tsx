"use client";

import * as React from "react";
import Image from "next/image";
import Header from "@/components/Header";


const HeroSection: React.FC = () => (
  <section className="flex flex-col items-center px-4 md:flex-row md:justify-between md:px-8 lg:px-16 mt-4 md:mt-12 sm:mt-8">
    <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/2">
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
      />
    </div>
  </section>
);

const HomePage: React.FC = () => (
  <div className="flex flex-col items-center pb-20 bg-white">
    <Header />
    <HeroSection />
  </div>
);

export default HomePage;
