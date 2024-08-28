import ProjectCard from "./card";
import { Heading, Paragraph } from "@/app/common/text";

const projects = [
  {
    title: "Beach Break Surf Cafe",
    href: "https://www.beachbreakcr.com",
    description:
      "Custom site development, branding revamp, and physical assets for local Costa Rican cafe.",
    categories: ["Web design", "Web development", "Branding"],
  },
  {
    title: "Future List",
    href: "https://futurelist.co/",
    description:
      "Custom site development and concept features for FutureList.io, a job board dedicated to finding opportunities in climate tech industries. ",
    categories: ["Web design", "Web development"],
  },
  {
    title: "BATL",
    href: null,
    description:
      "Brand identity development and custom site for a global research lab that offers experiential learning and credentialing programs to train the pharmaceutical industry's workforce.",
    categories: [
      "Web design",
      "Web development",
      "Brand Identity Development",
      "UI/UX Design",
    ],
  },
  {
    title: "Beach Break Surf Cafe",
    href: null,
    description:
      "Custom site development, branding revamp, and physical assets for local Costa Rican cafe.",
    categories: ["Web design", "Web development", "Branding"],
  },
  {
    title: "Beach Break Surf Cafe",
    href: "null",
    description:
      "Custom site development, branding revamp, and physical assets for local Costa Rican cafe.",
    categories: ["Web design", "Web development", "Branding"],
  },
  {
    title: "Beach Break Surf Cafe",
    href: "https://www.beachbreakcr.com",
    description:
      "Custom site development, branding revamp, and physical assets for local Costa Rican cafe.",
    categories: ["Web design", "Web development", "Branding"],
  },
];

function Projects() {
  return (
    <div className="flex flex-col mb-32 lg:flex-row lg:justify-between">
      <div className="flex-col w-full lg:w-3/12 mb-5 lg:mb-auto">
        <Heading type="h3" classnames="mb-5 lg:mb-10">
          Projects
        </Heading>
        <Paragraph>
          A collection of web and mobile projects that showcase the fundamentals
          of my work. Given the requirements of the client, I lead the design
          process and iterate through colors and typography, logo variations,
          wireframes, asset treatments, user flows and more, all to ensure the
          final product satisfies each project goal.
          <br />
          <br />
          Visit the live links or click into a case study to learn more.
        </Paragraph>
      </div>
      <div className="grid lg:grid-cols-2 w-full lg:w-8/12 gap-4">
        {projects.map((project, i) => {
          return <ProjectCard key={i} {...project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
