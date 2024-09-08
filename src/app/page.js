import Contact from "@/_sections/contact";
import Header from "@/_sections/header";
import Landing from "@/_sections/landing";
import Projects from "@/_sections/projects";
import Resume from "@/_sections/resume";
import { client } from "@/sanity/lib/client";
import { generateStaticParams } from "./project/[title]/page";

export default async function Home() {
  generateStaticParams();
  const projects = await client.fetch(
    `*[_type == "project"]| order(_createdAt asc)`,
  );

  console.log("this is projects", projects);
  const resume = await client.fetch(
    `*[_type == "resume"]| order(_createdAt desc)`,
  );
  const heading = await client.fetch(`*[_type == "heading"][0]`);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col px-5 pb-5 pt-14">
      <Landing heading={heading.landing} />
      <Projects data={projects} heading={heading.project} />
      <Resume data={resume} heading={heading.resume} />
      <Contact heading={heading.contact} />
    </main>
  );
}
