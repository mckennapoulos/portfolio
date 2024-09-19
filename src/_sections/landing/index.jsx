"use client";

import { Heading } from "@/_components/text";
import Hero from "./hero";
import Checkerboard from "./checkerboard";
import PortableTextComponent from "@/_components/portable-text";
import { useRef } from "react";
import { useIsVisible } from "@/_util/useIsVisible";

function Landing({ heading }) {
  const checkerboardRef = useRef();
  const isIntersecting = useIsVisible(checkerboardRef);
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
    "Adobe Creative Suite",
    "Jest + Automation Testing",
    "Git/Github",
    "Figma",
    "RESTful APIs",
    "WCAG Best Practices",
  ];
  return (
    <div className="mb-32">
      <Hero />
      <div>
        <Heading type="h3">{heading.h3}</Heading>
        <Heading type="h2" serif={true} classnames="w-full md:w-9/12">
          I build custom web apps using
          <br className="hidden 2xl:block" />{" "}
          <span className="italic">thoughtful</span> design,{" "}
          <span className="italic">responsive</span> layout, and
          <br className="hidden 2xl:block" />{" "}
          <span className="italic">clean</span> code with accessibility best
          practices
          <br className="hidden 2xl:block" /> top of mind.
        </Heading>
        <PortableTextComponent
          blocks={heading.description}
          classnames="w-full md:w-8/12 mt-4 mb-8"
        />
      </div>
      <Checkerboard
        skills={skills}
        myRef={checkerboardRef}
        isVisible={isIntersecting}
      />
    </div>
  );
}

export default Landing;
