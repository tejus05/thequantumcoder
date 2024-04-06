"use client";

import { useActive } from "@/hooks/useActiveStore";
import Image from "next/image";
import * as React from "react";

const AboutMe: React.FC = () => {
  const { isActive, setIsActiveFalse, setIsActiveTrue } = useActive();
  return (
    <section
      className="flex justify-center items-center md:px-16 px-7 lg:pb-10 md:pb-20 pb-16 bg-violet-300 w-full min-h-screen h-full"
      id="about"
    >
      {/* for large devices */}
      <div className="mt-24 w-full max-w-[1319px] max-md:mt-10 max-md:max-w-full hidden md:block">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-4 text-black max-md:mt-10 max-md:max-w-full">
              <h1
                className="text-5xl font-semibold max-md:max-w-full max-md:text-3xl"
                onMouseOver={() => {
                  setIsActiveTrue();
                }}
                onMouseLeave={() => {
                  setIsActiveFalse();
                }}
              >
                About Me
              </h1>
              <p
                className="mt-10 text-3xl md:text-xl lg:text-3xl leading-[65px] md:leading-[35px] lg:leading-[65px] max-md:mt-7 max-md:max-w-full"
                onMouseOver={() => {
                  setIsActiveTrue();
                }}
                onMouseLeave={() => {
                  setIsActiveFalse();
                }}
              >
                I'm <span className="font-medium">Tejus S</span>, a 20-year-old
                computer science student and full-stack developer from India.
                I'm passionate about crafting user-friendly web apps, from
                concept all the way to deployment. I'm constantly learning and
                experimenting with new technologies to stay ahead of the curve.
              </p>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
            <Image src="me.svg" alt="Tejus S" width={316} height={562} />
          </div>
        </div>
      </div>

      {/* for small devices */}
      <div className="w-full max-w-[1319px] max-md:mt-10 max-md:max-w-full md:hidden block text-center">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-4 text-black max-md:mt-10 max-md:max-w-full">
              <h1 className="text-5xl font-semibold max-md:max-w-full max-md:text-3xl">
                About Me
              </h1>
              <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full items-center pt-5">
                <Image src="me.svg" alt="Tejus S" width={150} height={267} />
              </div>
              <p className="mt-10 text-xl max-md:text-xl leading-[65px] max-md:mt-7 max-md:max-w-full text-balance">
                I'm <span className="font-medium">Tejus S</span>, a 20-year-old
                computer science student and full-stack developer from India.
                I'm passionate about crafting user-friendly web apps, from
                concept all the way to deployment. I'm constantly learning and
                experimenting with new technologies to stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
