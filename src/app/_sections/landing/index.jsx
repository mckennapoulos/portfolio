import { Heading, Paragraph } from "@/app/_components/text";
import Hero from "./hero";
import Checkerboard from "./checkerboard";

function Landing() {
  const skills = [
    "HTML",
    "CSS/SASS",
    "Typescript",
    "React",
    "Tailwind CSS",
    "Javascript",
    "Content Management Systems",
    "GraphQL",
    "Java",
    "Adobe Create Suite",
    "Jest + Automation Testing",
    "Git/Github",
    "Figma",
    "RESTful APIs",
    "WCAG Best Practices",
  ];
  return (
    <div className="mb-32">
      <Hero />
      <div className="">
        <Heading type="h3">Let's work together</Heading>
        <Heading type="h2" serif={true} classnames="w-full md:w-9/12">
          I craft custom digital spaces using
          <br className="hidden 2xl:block" />{" "}
          <span className="italic">thoughtful</span> design,{" "}
          <span className="italic">responsive</span> layout, and
          <br className="hidden 2xl:block" />{" "}
          <span className="italic">clean</span> code with accessibility best
          practices
          <br className="hidden 2xl:block" /> top of mind.
        </Heading>
        <Paragraph classnames="w-full md:w-8/12 mt-4 mb-8">
          My goal is to bring your ideas to life in a digital space. From brand
          identity development to outlining intuitive user experiences and
          complete web development, I am passionate about building personalized
          products for clients. Given my degree in Computer Science and Design{" "}
          <span className="italic">
            (concentration in Interaction Design and Web Development)
          </span>{" "}
          and over 6 years of design and development experience, I have fluency
          in the tools and skills needed to architect and deliver high-quality
          features.
        </Paragraph>
      </div>
      <Checkerboard skills={skills} />
    </div>
  );
}

export default Landing;
