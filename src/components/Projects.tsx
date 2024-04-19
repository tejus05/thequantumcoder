"use client";

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
import { Code, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import DialogImage from './DialogImage';

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
    images: [
      "/discord_clone1.jpg",
      "/discord_clone2.jpg",
      "/discord_clone3.jpg",
    ],
    live: "https://discord-clone-chat-app.vercel.app",
    code: "https://github.com/tejus05/discord-clone",
  },
  {
    title: "Issue Tracker",
    description: "A Web App To Track Issues",
    content:
      "Issue Tracker is a web app built with Next.js for managing tasks. Users can add, edit, delete, and assign issues, keeping everything organized. Powerful filtering and sorting help find the information you need fast. Login unlocks full features, while guests can still browse existing issues.",
    images: [
      "/issue_tracker1.jpg",
      "/issue_tracker2.jpg",
      "/issue_tracker3.jpg",
    ],
    live: "https://issue-tracker-puce.vercel.app",
    code: "https://github.com/tejus05/issue-tracker",
  },
];


const Projects = () => {
  return (
    <section
      className="flex flex-col justify-center items-center md:px-16 px-7 lg:pb-10 md:pb-20 pb-16 bg-[#E6B1E1] w-full min-h-screen h-full"
      id="projects"
    >
      <h1
        className="lg:text-5xl md:text-4xl text-3xl font-semibold max-md:max-w-full my-20 text-center"
      >
        Projects
      </h1>
      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <Card className="bg-[#EACFEA] text-center" key={project.title}>
            <CardHeader>
              <CardTitle
                className="lg:text-3xl md:text-2xl sm:text-xl text-lg"
              >
                {project.title}
              </CardTitle>
              <CardDescription
                className="lg:text-2xl md:text-xl sm:text-lg text-[15px]"
              >
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-5 items-center justify-center">
              <Carousel className="w-full max-w-[80%]">
                <CarouselContent>
                  <CarouselItem>
                    <div className="relative">
                      <Image
                        src={project.images[0]}
                        alt="Quill 1"
                        width={1365}
                        height={625}
                      />
                      <DialogImage
                        imageSrc={project.images[0]}
                        title={project.title}
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative">
                      <Image
                        src={project.images[1]}
                        alt="Quill 1"
                        width={1365}
                        height={625}
                      />
                      <DialogImage
                        imageSrc={project.images[1]}
                        title={project.title}
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative">
                      <Image
                        src={project.images[2]}
                        alt="Quill 1"
                        width={1365}
                        height={625}
                      />
                      <DialogImage
                        imageSrc={project.images[2]}
                        title={project.title}
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="flex justify-center items-center flex-col">
                <p
                  className="lg:text-xl md:text-lg sm:text-[15px] text-sm my-5 w-full text-center md:max-w-[80%]"
                >
                  {project.content}
                </p>
                <div className="flex flex-col justify-evenly lg:text-xl md:text-lg sm:text-[15px] text-sm gap-5">
                  <Link
                    target="_blank"
                    className="flex gap-5 group items-center"
                    href={project.live}
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span className="text-indigo-600 group-hover:underline transition font-medium">
                      Live
                    </span>
                  </Link>
                  <Link
                    target="_blank"
                    className="flex gap-5 group items-center"
                    href={project.code}
                  >
                    <Code className="h-5 w-5" />
                    <span className="text-indigo-600 group-hover:underline transition font-medium">
                      Code
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