import Contact from "@/_sections/contact";
import Header from "@/_sections/header";
import Landing from "@/_sections/landing";
import Projects from "@/_sections/projects";
import Resume from "@/_sections/resume";
import { client } from "@/sanity/lib/client";
import { generateStaticParams } from "../project/[slug]/page";

export default async function Home() {
  generateStaticParams();
  const projects = await client.fetch(
    `*[_type == "project"]| order(_createdAt asc)`,
  );

  const resume = await client.fetch(
    `*[_type == "resume"]| order(_createdAt desc)`,
  );

  const resumePdf = await client.fetch(
    `*[_type == "files" && lower(@.name)==lower("Resume")][0]`,
  );
  const heading = await client.fetch(`*[_type == "heading"][0]`);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col px-3 pb-5 pt-14 md:px-5">
      <Landing heading={heading.landing} />
      <Projects data={projects} heading={heading.project} />
      <Resume data={resume} heading={heading.resume} pdf={resumePdf} />
      <Contact heading={heading.contact} />
    </div>
  );
}
