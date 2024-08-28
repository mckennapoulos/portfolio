import Landing from "./sections/landing";
import { Projects } from "./sections/projects";

export default function Home() {
  return (
    <main className="flex w-full max-w-screen-2xl min-h-screen flex-col mx-auto p-5">
      <Landing />
      <Projects />
    </main>
  );
}
