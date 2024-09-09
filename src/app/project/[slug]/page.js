import CaseStudy from "@/_sections/case-study";
import ProjectLayout from "./layout";
import { client } from "@/sanity/lib/client";

export async function generateStaticParams() {
  const projects = await client.fetch(
    `*[_type == "project"]| order(_createdAt asc)`,
  );

  return projects.map((project) => {
    if (project.slug) {
      return { slug: project.slug };
    }
  });
}

function CreateNav(projectList, current) {
  let projectIndex = {
    current: { key: 0, slug: current },
    prev: { key: 0, slug: null },
    next: { key: 0, slug: null },
  };

  for (let i = 0; i < projectList.length; i++) {
    if (projectList[i].title === current) {
      projectIndex.current.key = i;
      if (i === 0) {
        projectIndex.prev.key = projectList.length - 1;
        projectIndex.next.key = i + 1;
        projectIndex.prev.slug = projectList[projectIndex.prev.key].slug;
        projectIndex.next.slug = projectList[projectIndex.next.key].slug;
        break;
      } else if (i === projectList.length - 1) {
        projectIndex.next.key = 0;
        projectIndex.prev.key = i - 1;
        projectIndex.prev.slug = projectList[projectIndex.prev.key].slug;
        projectIndex.next.slug = projectList[projectIndex.next.key].slug;
        break;
      } else {
        projectIndex.next.key = i + 1;
        projectIndex.prev.key = i - 1;
        projectIndex.prev.slug = projectList[projectIndex.prev.key].slug;
        projectIndex.next.slug = projectList[projectIndex.next.key].slug;
        break;
      }
    }
  }

  return projectIndex;
}

export default async function Project({ params }) {
  const { slug } = params;
  const data = await client.fetch(
    `*[_type == "project"&&lower(@.slug)==lower("${slug}")][0]`,
  );
  const projectList = await client.fetch(
    `*[_type == "project" && slug != null] | order(_createdAt asc)`,
  );
  const index = CreateNav(projectList, data.title);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col p-5 pt-14">
      <CaseStudy data={data} internalNav={index} />
    </div>
  );
}

Project.getLayout = function getLayout(page) {
  return <ProjectLayout>{page}</ProjectLayout>;
};
