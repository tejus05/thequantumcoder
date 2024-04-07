import * as React from "react";
import Image from "next/image";
import Link from "next/link";

const frontend_tools = [
  {
    imageSrc: "frontend/next.svg",
    toolName: "Next",
    link: "https://nextjs.org/",
  },
  {
    imageSrc: "frontend/react.svg",
    toolName: "React",
    link: "https://reactjs.org/",
  },
  {
    imageSrc: "frontend/redux.svg",
    toolName: "Redux",
    link: "https://redux.js.org/",
  },
  {
    imageSrc: "frontend/zustand.svg",
    toolName: "Zustand",
    link: "https://zustand-demo.pmnd.rs/",
  },
  {
    imageSrc: "frontend/tailwind.svg",
    toolName: "Tailwind",
    link: "https://tailwindcss.com/",
  },
  {
    imageSrc: "frontend/shadcn.svg",
    toolName: "Shadcn",
    link: "https://ui.shadcn.com/",
  },
  {
    imageSrc: "frontend/figma.svg",
    toolName: "Figma",
    link: "https://www.figma.com/",
  },
  {
    imageSrc: "frontend/builder.io.svg",
    toolName: "Builder.io",
    link: "https://www.builder.io/",
  },
];

const backend_tools = [
  {
    imageSrc: "backend/express.svg",
    toolName: "Express",
    link: "https://expressjs.com/",
  },
  { imageSrc: "backend/trpc.svg", toolName: "tRPC", link: "https://trpc.io/" },
  {
    imageSrc: "backend/prisma.svg",
    toolName: "Prisma",
    link: "https://www.prisma.io/",
  },
  {
    imageSrc: "backend/pusher.svg",
    toolName: "Pusher",
    link: "https://pusher.com/",
  },
  {
    imageSrc: "backend/cockroachlabs.svg",
    toolName: <span className="text-center inline-block">Cockroach<br/>Labs</span>,
    link: "https://www.cockroachlabs.com/",
  },
  {
    imageSrc: "backend/postgresql.svg",
    toolName: "PostgreSQL",
    link: "https://www.postgresql.org/",
  },
  {
    imageSrc: "backend/mongodb.svg",
    toolName: "MongoDB",
    link: "https://www.mongodb.com/",
  },
  {
    imageSrc: "backend/redis.svg",
    toolName: "Redis",
    link: "https://redis.io/",
  },
];

const other_tools = [
  {
    imageSrc: "others/github.svg",
    toolName: "Github",
    link: "https://github.com/",
  },
  {
    imageSrc: "others/vs-code.svg",
    toolName: "VS Code",
    link: "https://code.visualstudio.com/",
  },
  {
    imageSrc: "others/openai.svg",
    toolName: "OpenAI",
    link: "https://openai.com/",
  },
  {
    imageSrc: "others/stripe.svg",
    toolName: "Stripe",
    link: "https://stripe.com/",
  },
];

const languages = [
  {
    imageSrc: "others/ts.svg",
    toolName: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  {
    imageSrc: "others/js.svg",
    toolName: "JavaScript",
    link: "https://www.javascript.com/",
  },
];

const Card: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between flex-wrap gap-y-32 mt-32">
        {/* frontend tools */}
        <section className="flex flex-col pt-2.5 pb-16 text-xl text-black rounded-3xl border-2 border-solid bg-neutral-200 border-neutral-700 max-w-[596px]">
          <header className="flex flex-col items-start px-5 w-full text-3xl font-semibold max-md:max-w-full">
            <Image src="circles.svg" alt="Logo" width={64} height={24} />
            <div className="self-stretch w-full bg-neutral-700 min-h-[2px] max-md:max-w-full" />
            <h1 className="mt-8 max-md:ml-1">Frontend Tools</h1>
          </header>
          <div className="grid grid-cols-4 gap-5 justify-items-center mt-7 px-9 max-md:px-5">
            {frontend_tools.map((tool) => {
              if (tool.toolName === "Zustand") {
                return (
                  <div className="flex flex-col items-center h-[170px] w-[170px]">
                    <Link href={tool.link} target="_blank">
                      <Image
                        src={tool.imageSrc}
                        alt={`${tool.toolName} logo`}
                        width={139}
                        height={80}
                      />
                    </Link>
                    <Link href={tool.link} target="_blank">
                      <div className="mt-10">{tool.toolName}</div>
                    </Link>
                  </div>
                );
              }
              if (tool.toolName === "Tailwind") {
                return (
                  <div className="flex flex-col items-center h-[170px] w-[170px]">
                    <Link href={tool.link} target="_blank">
                      <Image
                        src={tool.imageSrc}
                        alt={`${tool.toolName} logo`}
                        width={82}
                        height={50}
                        className="h-[80px]"
                      />
                    </Link>
                    <Link href={tool.link} target="_blank">
                      <div className="mt-10">{tool.toolName}</div>
                    </Link>
                  </div>
                );
              }
              if (tool.toolName === "Figma") {
                return (
                  <div className="flex flex-col items-center h-[170px] w-[170px]">
                    <Link href={tool.link} target="_blank">
                      <Image
                        src={tool.imageSrc}
                        alt={`${tool.toolName} logo`}
                        width={52.6}
                        height={80}
                      />
                    </Link>
                    <Link href={tool.link} target="_blank">
                      <div className="mt-10">{tool.toolName}</div>
                    </Link>
                  </div>
                );
              }
              if (tool.toolName === "Builder.io") {
                return (
                  <div className="flex flex-col items-center h-[170px] w-[170px]">
                    <Link href={tool.link} target="_blank">
                      <Image
                        src={tool.imageSrc}
                        alt={`${tool.toolName} logo`}
                        width={108.22}
                        height={80}
                      />
                    </Link>
                    <Link href={tool.link} target="_blank">
                      <div className="mt-10">{tool.toolName}</div>
                    </Link>
                  </div>
                );
              }
              if (tool.toolName === "Shadcn") {
                return (
                  <div className="flex flex-col items-center h-[170px] w-[170px]">
                    <Link href={tool.link} target="_blank">
                      <Image
                        src={tool.imageSrc}
                        alt={`${tool.toolName} logo`}
                        width={60}
                        height={60}
                        className="h-[80px]"
                      />
                    </Link>
                    <Link href={tool.link} target="_blank">
                      <div className="mt-10">{tool.toolName}</div>
                    </Link>
                  </div>
                );
              }

              return (
                <div className="flex flex-col items-center h-[170px] w-[170px]">
                  <Link href={tool.link} target="_blank">
                    <Image
                      src={tool.imageSrc}
                      alt={`${tool.toolName} logo`}
                      width={80}
                      height={80}
                    />
                  </Link>
                  <Link href={tool.link} target="_blank">
                    <div className="mt-10">{tool.toolName}</div>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* backend tools */}
        <section className="flex flex-col pt-2.5 pb-16 text-xl text-black rounded-3xl border-2 border-solid bg-neutral-200 border-neutral-700 max-w-[596px]">
          <header className="flex flex-col items-start px-5 w-full text-3xl font-semibold max-md:max-w-full">
            <Image src="circles.svg" alt="Logo" width={64} height={24} />
            <div className="self-stretch w-full bg-neutral-700 min-h-[2px] max-md:max-w-full" />
            <h1 className="mt-8 max-md:ml-1">Backend Tools</h1>
          </header>
          <div className="grid grid-cols-4 gap-5 justify-items-center mt-7 px-9 max-md:px-5">
            {backend_tools.map((tool) => {
              if (tool.toolName === "tRPC") {
                return (
                  <div className="flex flex-col items-center h-[170px] w-[170px]">
                    <Link href={tool.link} target="_blank">
                      <Image
                        src={tool.imageSrc}
                        alt={`${tool.toolName} logo`}
                        width={67.16}
                        height={80}
                      />
                    </Link>
                    <Link href={tool.link} target="_blank">
                      <div className="mt-10">{tool.toolName}</div>
                    </Link>
                  </div>
                );
              }

              return (
                <div className="flex flex-col items-center h-[170px] w-[170px]">
                  <Link href={tool.link} target="_blank">
                    <Image
                      src={tool.imageSrc}
                      alt={`${tool.toolName} logo`}
                      width={80}
                      height={80}
                    />
                  </Link>
                  <Link href={tool.link} target="_blank">
                    <div className="mt-10">{tool.toolName}</div>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <div className="flex mt-32 justify-center">
        {/* other tools */}
        <section className="flex flex-col pt-2.5 pb-16 text-xl text-black rounded-3xl border-2 border-solid bg-neutral-200 border-neutral-700 max-w-[596px]">
          <header className="flex flex-col items-start px-5 w-full text-3xl font-semibold max-md:max-w-full">
            <Image src="circles.svg" alt="Logo" width={64} height={24} />
            <div className="self-stretch w-full bg-neutral-700 min-h-[2px] max-md:max-w-full" />
            <h1 className="mt-8 max-md:ml-1">Other Tools</h1>
          </header>
          <div className="grid grid-cols-4 gap-5 justify-items-center mt-7 px-9 max-md:px-5">
            {other_tools.map((tool) => {
              return (
                <div className="flex flex-col items-center h-[170px] w-[170px]">
                  <Link href={tool.link} target="_blank">
                    <Image
                      src={tool.imageSrc}
                      alt={`${tool.toolName} logo`}
                      width={80}
                      height={80}
                    />
                  </Link>
                  <Link href={tool.link} target="_blank">
                    <div className="mt-10">{tool.toolName}</div>
                  </Link>
                </div>
              );
            })}
          </div>
          <header className="flex flex-col items-start px-5 w-full text-3xl font-semibold max-md:max-w-full">
            <h1 className="mt-8 max-md:ml-1">Languages</h1>
          </header>
          <div className="grid grid-cols-4 gap-5 justify-items-center mt-7 px-9 max-md:px-5">
            {languages.map((tool) => {
              return (
                <div className="flex flex-col items-center h-[170px] w-[170px]">
                  <Link href={tool.link} target="_blank">
                    <Image
                      src={tool.imageSrc}
                      alt={`${tool.toolName} logo`}
                      width={80}
                      height={80}
                    />
                  </Link>
                  <Link href={tool.link} target="_blank">
                    <div className="mt-10">{tool.toolName}</div>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
