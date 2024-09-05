import CaseStudy from "@/_sections/case-study";
import ProjectLayout from "./layout";

export default function Project() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-screen-2xl flex-col p-5">
      <CaseStudy />
    </main>
  );
}

Project.getLayout = function getLayout(page) {
  return <ProjectLayout>{page}</ProjectLayout>;
};
