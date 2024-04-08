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
import Image from 'next/image';
import { Code, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: "Quill",
    description: "The SaaS App",
    content:
      "Quill is a powerful SaaS application that allows users to upload PDF documents, engage in real-time chat with PDFs and ask questions right away, and upgrade to a Pro plan for exclusive benefits.",
    images: ["/quill1.jpg", "/quill2.jpg", "/quill3.jpg"],
    live: "https://quill-six-mocha.vercel.app",
    code: "https://github.com/tejus05/quill",
  },
  {
    title: "Discord Clone",
    description: "The Community App",
    content:
      "A Discord clone built using Next.js and various libraries. Users can join servers, chat in text and voice channels, and participate in video calls. Admins can manage servers, channels, and user roles. Similar to Discord, it offers real-time communication features for online communities.",
    images: ["/quill1.jpg", "/quill2.jpg", "/quill3.jpg"],
    live: "https://discord-clone-chat-app.vercel.app",
    code: "https://github.com/tejus05/discord-clone",
  },
  {
    title: "Issue Tracker",
    description: "Chat With Friends In Real-Time",
    content:
      "Issue Tracker is a web app built with Next.js for managing tasks. Users can add, edit, delete, and assign issues, keeping everything organized. Powerful filtering and sorting help find the information you need fast. Login unlocks full features, while guests can still browse existing issues.",
    images: ["/issue_tracker1.jpg", "/issue_tracker2.jpg", "/issue_tracker3.jpg"],
    live: "https://issue-tracker-puce.vercel.app",
    code: "https://github.com/tejus05/issue-tracker",
  },
];


const Projects = () => {
  const { setIsActiveFalse, setIsActiveTrue } = useActive();
  return (
    <section
      className="flex flex-col justify-center items-center md:px-16 px-7 lg:pb-10 md:pb-20 pb-16 bg-[#E6B1E1] w-full min-h-screen h-full"
      id="about"
    >
      <h1
        className="text-5xl font-semibold max-md:max-w-full max-md:text-3xl my-20"
        onMouseOver={() => {
          setIsActiveTrue();
        }}
        onMouseLeave={() => {
          setIsActiveFalse();
        }}
      >
        Projects
      </h1>
      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <Card className="bg-[#EACFEA] text-center" key={project.title}>
            <CardHeader>
              <CardTitle
                className="text-3xl"
                onMouseOver={() => {
                  setIsActiveTrue();
                }}
                onMouseLeave={() => {
                  setIsActiveFalse();
                }}
              >
                {project.title}
              </CardTitle>
              <CardDescription
                className="text-2xl"
                onMouseOver={() => {
                  setIsActiveTrue();
                }}
                onMouseLeave={() => {
                  setIsActiveFalse();
                }}
              >
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-5 items-center justify-center">
              <Carousel className="w-full max-w-[80%]">
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src={project.images[0]}
                      alt="Quill 1"
                      width={1365}
                      height={625}
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src={project.images[1]}
                      alt="Quill 2"
                      width={1365}
                      height={625}
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src={project.images[2]}
                      alt="Quill 3"
                      width={1365}
                      height={625}
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="flex justify-around">
                <p
                  className="text-xl my-5 w-full max-w-[60%] text-left"
                  onMouseOver={() => {
                    setIsActiveTrue();
                  }}
                  onMouseLeave={() => {
                    setIsActiveFalse();
                  }}
                >
                  {project.content}
                </p>
                <div className="h-50 border-r border-black/20" />
                <div className="flex flex-col justify-evenly text-xl">
                  <Link
                    className="flex gap-5 group items-center"
                    href={project.live}
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span className="text-indigo-600 group-hover:underline transition">
                      {project.live}
                    </span>
                  </Link>
                  <Link
                    className="flex gap-5 group items-center"
                    href={project.code}
                  >
                    <Code className="h-5 w-5" />
                    <span className="text-indigo-600 group-hover:underline transition">
                      {project.code}
                    </span>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects