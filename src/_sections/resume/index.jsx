import { Heading, Paragraph } from "@/_components/text";
import ExperienceCard from "./card";
import { Link } from "@/_components/link";

function Resume({ data, heading }) {
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
        <Link mobileButtonStyle classnames="mt-5">
          View full resume
        </Link>
      </div>
      <div className="flex w-full flex-col lg:w-8/12">
        {data.map((value, i) => {
          return <ExperienceCard key={i} {...value} />;
        })}
      </div>
    </div>
  );
}

export default Resume;
