import ProjectCard from "./card";
import { Heading, Paragraph } from "@/_components/text";

function Projects({ data, heading }) {
  return (
    <div
      id="projects"
      className="mb-32 flex scroll-mt-20 flex-col lg:flex-row lg:justify-between"
    >
      <div className="mb-5 w-full flex-col lg:mb-auto lg:w-3/12">
        <Heading type="h3" classnames="mb-5 lg:mb-10">
          {heading.h3}
        </Heading>
        <Paragraph>{heading.description}</Paragraph>
      </div>
      <div className="grid w-full gap-4 lg:w-8/12 lg:grid-cols-2">
        {data.map((project, i) => {
          return <ProjectCard key={i} {...project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
