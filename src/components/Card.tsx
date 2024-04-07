import * as React from "react";
import Image from "next/image";

const frontend_tools = [
  { imageSrc: "frontend/next.svg", toolName: "Next" },
  { imageSrc: "frontend/react.svg", toolName: "React" },
  { imageSrc: "frontend/redux.svg", toolName: "Redux" },
  { imageSrc: "frontend/zustand.svg", toolName: "Zustand" },
  { imageSrc: "frontend/tailwind.svg", toolName: "Tailwind" },
  { imageSrc: "frontend/shadcn.svg", toolName: "Shadcn" },
  { imageSrc: "frontend/figma.svg", toolName: "Figma" },
  { imageSrc: "frontend/builder.io.svg", toolName: "Builder.io" },
];

const other_tools = [
  { imageSrc: "others/github.svg", toolName: "Github" },
  { imageSrc: "others/vs-code.svg", toolName: "VS Code" },
  { imageSrc: "others/openai.svg", toolName: "OpenAI" },
  { imageSrc: "others/stripe.svg", toolName: "Stripe" },
];

const languages = [
  { imageSrc: "others/ts.svg", toolName: "TypeScript" },
  { imageSrc: "others/js.svg", toolName: "JavaScript" },
];

const backend_tools = [
  { imageSrc: "backend/express.svg", toolName: "Express" },
  { imageSrc: "backend/trpc.svg", toolName: "tRPC" },
  { imageSrc: "backend/prisma.svg", toolName: "Prisma" },
  { imageSrc: "backend/pusher.svg", toolName: "Pusher" },
  {
    imageSrc: "backend/cockroachlabs.svg",
    toolName: (
      <div className="text-center inline-block">
        Cockroach
        <br />
        Labs
      </div>
    ),
  },
  {
    imageSrc: "backend/postgresql.svg",
    toolName: (
      <div className="text-center inline-block">
        Postgre
        <br />
        SQL
      </div>
    ),
  },
  { imageSrc: "backend/mongodb.svg", toolName: "MongoDB" },
  { imageSrc: "backend/redis.svg", toolName: "Redis" },
];

const MyComponent: React.FC = () => {
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
                    <Image
                      src={tool.imageSrc}
                      alt={`${tool.toolName} logo`}
                      width={139}
                      height={80}
                    />
                    <div className="mt-10">{tool.toolName}</div>
                  </div>
                );
              }
              if (tool.toolName === "Tailwind") {
                return (
                  <div className="flex flex-col items-center h-[170px] w-[170px]">
                    <Image
                      src={tool.imageSrc}
                      alt={`${tool.toolName} logo`}
                      width={82}
                      height={50}
                      className="h-[80px]"
                    />
                    <div className="mt-10">{tool.toolName}</div>
                  </div>
                );
              }
              if (tool.toolName === "Figma") {
                return (
                  <div className="flex flex-col items-center h-[170px] w-[170px]">
                    <Image
                      src={tool.imageSrc}
                      alt={`${tool.toolName} logo`}
                      width={52.6}
                      height={80}
                    />
                    <div className="mt-10">{tool.toolName}</div>
                  </div>
                );
              }
              if (tool.toolName === "Builder.io") {
                return (
                  <div className="flex flex-col items-center h-[170px] w-[170px]">
                    <Image
                      src={tool.imageSrc}
                      alt={`${tool.toolName} logo`}
                      width={108.22}
                      height={80}
                    />
                    <div className="mt-10">{tool.toolName}</div>
                  </div>
                );
              }
              if (tool.toolName === "Shadcn") {
                return (
                  <div className="flex flex-col items-center h-[170px] w-[170px]">
                    <Image
                      src={tool.imageSrc}
                      alt={`${tool.toolName} logo`}
                      width={60}
                      height={60}
                      className="h-[80px]"
                    />
                    <div className="mt-10">{tool.toolName}</div>
                  </div>
                );
              }

              return (
                <div className="flex flex-col items-center h-[170px] w-[170px]">
                  <Image
                    src={tool.imageSrc}
                    alt={`${tool.toolName} logo`}
                    width={80}
                    height={80}
                  />
                  <div className="mt-10">{tool.toolName}</div>
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
                    <Image
                      src={tool.imageSrc}
                      alt={`${tool.toolName} logo`}
                      width={67.16}
                      height={80}
                    />
                    <div className="mt-10">{tool.toolName}</div>
                  </div>
                );
              }
              if (tool.toolName === "Shadcn") {
                return (
                  <div className="flex flex-col items-center h-[170px] w-[170px]">
                    <Image
                      src={tool.imageSrc}
                      alt={`${tool.toolName} logo`}
                      width={60}
                      height={60}
                      className="h-[80px]"
                    />
                    <div className="mt-10">{tool.toolName}</div>
                  </div>
                );
              }

              return (
                <div className="flex flex-col items-center h-[170px] w-[170px]">
                  <Image
                    src={tool.imageSrc}
                    alt={`${tool.toolName} logo`}
                    width={80}
                    height={80}
                  />
                  <div className="mt-10">{tool.toolName}</div>
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
                  <Image
                    src={tool.imageSrc}
                    alt={`${tool.toolName} logo`}
                    width={80}
                    height={80}
                  />
                  <div className="mt-10">{tool.toolName}</div>
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
                  <Image
                    src={tool.imageSrc}
                    alt={`${tool.toolName} logo`}
                    width={80}
                    height={80}
                  />
                  <div className="mt-10">{tool.toolName}</div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
};

export default MyComponent;
