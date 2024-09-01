import Contact from "@/_sections/contact";
import Header from "@/_sections/header";
import Landing from "@/_sections/landing";
import Projects from "@/_sections/projects";
import Resume from "@/_sections/resume";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col px-5 pb-5 pt-14">
      <Landing />
      <Projects />
      <Resume />
      <Contact />
    </main>
  );
}
