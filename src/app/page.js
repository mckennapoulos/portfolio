import Contact from "./sections/contact";
import Landing from "./sections/landing";
import Projects from "./sections/projects";
import Resume from "./sections/resume";

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
