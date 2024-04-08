"use client";

import { useActive } from '@/hooks/useActiveStore';
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";



const Projects = () => {
  const { setIsActiveFalse, setIsActiveTrue } = useActive();
  return (
    <section
      className="flex flex-col justify-center items-center md:px-16 px-7 lg:pb-10 md:pb-20 pb-16 bg-[#FFF9E5] w-full min-h-screen h-full"
      id="about"
    >
      <h1
        className="text-5xl font-semibold max-md:max-w-full max-md:text-3xl mb-10"
        onMouseOver={() => {
          setIsActiveTrue();
        }}
        onMouseLeave={() => {
          setIsActiveFalse();
        }}
      >
        Projects
      </h1>
      <div className='grid grid-cols-2 gap-10'>
        <Card className='w-full max-w-[500px]'>
          <CardHeader>
            <CardTitle>Quill</CardTitle>
            <CardDescription>The SaaS App</CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel>
              <CarouselContent>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <p>
              Quill is a powerful SaaS application that allows users to upload
              PDF documents, engage in real-time chat with PDFs and ask
              questions right away, and upgrade to our Pro plan for exclusive
              benefits.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quill</CardTitle>
            <CardDescription>The SaaS App</CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel>
              <CarouselContent>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <p>
              Quill is a powerful SaaS application that allows users to upload
              PDF documents, engage in real-time chat with PDFs and ask
              questions right away, and upgrade to our Pro plan for exclusive
              benefits.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Projects