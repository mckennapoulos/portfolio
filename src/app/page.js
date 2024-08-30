import Contact from "@/_sections/contact";
import Landing from "@/_sections/landing";
import Projects from "@/_sections/projects";
import Resume from "@/_sections/resume";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col p-5">
      <Landing />
      <Projects />
      <Resume />
      <Contact />
    </main>
  );
}
