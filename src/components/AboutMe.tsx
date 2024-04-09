"use client";

import { useActive } from "@/hooks/useActiveStore";
import Image from "next/image";
import * as React from "react";

const AboutMe: React.FC = () => {
  const { setIsActiveFalse, setIsActiveTrue } = useActive();
  return (
    <section
      className="flex flex-col justify-center items-center md:px-16 px-7 lg:pb-10 md:pb-20 pb-16 bg-violet-300 w-full min-h-screen h-full"
      id="about"
    >
      <div className="mt-24 w-full max-w-[1319px] max-md:mt-10 max-md:max-w-full flex flex-col items-center md:block">
        <div
          className="lg:text-5xl md:text-4xl text-3xl font-semibold inline"
          onMouseOver={() => {
            setIsActiveTrue();
          }}
          onMouseLeave={() => {
            setIsActiveFalse();
          }}
        >
          About Me{" "}
        </div>
        <div className="flex flex-row-reverse gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col items-center justify-center mx-auto max-w-[40%] sm:max-w-[20%] lg:max-w-[30%] md:max-w-[25%] w-full lg:-mt-14 md:-mt-16 mt-5">
            <Image src="me.svg" alt="Tejus S" width={250} height={446} />
          </div>
          <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-4 text-black max-md:mt-10 max-md:max-w-full">
              <div
                className="md:text-xl lg:text-2xl text-lg text-center md:text-left leading-[35px] md:leading-[40px] lg:leading-[60px] lg:mt-5 sm:px-6 px-1 md:px-0"
                onMouseOver={() => {
                  setIsActiveTrue();
                }}
                onMouseLeave={() => {
                  setIsActiveFalse();
                }}
              >
                I&apos;m <span className="font-medium">Tejus S</span>, a
                20-year-old computer science student and full-stack developer
                from India. I&apos;m passionate about crafting user-friendly web
                apps, from concept all the way to deployment. I&apos;m
                constantly learning and experimenting with new technologies to
                stay ahead of the curve.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 mt-24 justify-center items-center">
        <Image
          src="frontend_tools.svg"
          alt="Frontend Tools"
          height={414}
          width={418}
        />
        <Image
          src="backend_tools.svg"
          alt="Frontend Tools"
          height={414}
          width={418}
        />
        <Image
          src="other_tools.svg"
          alt="Frontend Tools"
          height={414}
          width={418}
        />
      </div>
    </section>
  );
};

export default AboutMe;
