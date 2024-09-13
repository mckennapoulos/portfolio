"use client";

import { Heading, Paragraph } from "@/_components/text";
import ExperienceCard from "./card";
import { Link } from "@/_components/link";
import useFileUrl from "@/_util/useFileUrl";

function Resume({ data, heading, pdf }) {
  const link = useFileUrl(pdf);
  return (
    <div
      id="resume"
      className="mb-12 flex scroll-mt-20 flex-col lg:flex-row lg:justify-between"
    >
      <div className="mb-5 w-full flex-col lg:mb-auto lg:w-3/12">
        <Heading type="h3" classnames="mb-5 lg:mb-10">
          {heading.h3}
        </Heading>
        <Paragraph>{heading.description}</Paragraph>
        <Link location={link} mobileButtonStyle classnames="mt-5">
          View full resume
        </Link>
      </div>
      <div className="flex w-full flex-col lg:w-8/12">
        {data.map((value, i) => {
          return (
            <div key={i}>
              <ExperienceCard {...value} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Resume;
