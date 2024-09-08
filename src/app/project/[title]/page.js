import CaseStudy from "@/_sections/case-study";
import ProjectLayout from "./layout";
import { client } from "@/sanity/lib/client";

export async function generateStaticParams() {
  const projects = await client.fetch(
    `*[_type == "project"]| order(_createdAt asc)`,
  );

  return projects.map((project) => ({
    title: project.title,
  }));
}

export default async function Project({ params }) {
  const { title } = params;
  const data = await client.fetch(
    `*[_type == "project"&&lower(@.title)==lower("${title}")][0]`,
  );
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col p-5">
      <CaseStudy data={data} />
    </main>
  );
}

Project.getLayout = function getLayout(page) {
  return <ProjectLayout>{page}</ProjectLayout>;
};
