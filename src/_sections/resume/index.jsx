import { Heading, Paragraph } from "@/_components/text";
import ExperienceCard from "./card";
import { Link } from "@/_components/link";
import Button from "@/_components/button";

const ResumeContent = [
  {
    date: "2022 - Present",
    title: "Freelance Web Developer",
    company: { name: "Self", href: null },
    description:
      "I worked on many things and they were important. I did worked on building dashboards for Retail Referrals and Easylinks. I drove the development of many projects and completed thourough testing with by writing automated tests with Webdriver and Selenium as well as unit tests with react-testing-library",
    tech: [
      "React",
      "Typescript",
      "Ruby on Rails",
      "Selenium Test Driver",
      "Storybook",
      "Graphql",
    ],
  },
  {
    date: "2021 - 2024",
    title: "Software Engineer, Software Engineer Co-op",
    company: {
      name: "Proof",
      href: "https://www.linkedin.com/company/notarize/",
    },
    description:
      "I worked on many things and they were important. I did worked on building dashboards for Retail Referrals and Easylinks. I drove the development of many projects and completed thourough testing with by writing automated tests with Webdriver and Selenium as well as unit tests with react-testing-library",
    tech: [
      "React",
      "Typescript",
      "Ruby on Rails",
      "Selenium Test Driver",
      "Storybook",
      "Graphql",
    ],
  },
  {
    date: "2021 - 2022",
    title: "Operations Director",
    company: {
      name: "Scout Studio",
      href: "https://scout.camd.northeastern.edu/",
    },
    description:
      "I worked on many things and they were important. I did worked on building dashboards for Retail Referrals and Easylinks. I drove the development of many projects and completed thourough testing with by writing automated tests with Webdriver and Selenium as well as unit tests with react-testing-library",
    tech: [
      "React",
      "Typescript",
      "Ruby on Rails",
      "Selenium Test Driver",
      "Storybook",
      "Graphql",
    ],
  },
  {
    date: "2021 - 2022",
    title: "Operations Director",
    company: {
      name: "Scout Studio",
      href: "https://scout.camd.northeastern.edu/",
    },
    description:
      "I worked on many things and they were important. I did worked on building dashboards for Retail Referrals and Easylinks. I drove the development of many projects and completed thourough testing with by writing automated tests with Webdriver and Selenium as well as unit tests with react-testing-library",
    tech: [
      "React",
      "Typescript",
      "Ruby on Rails",
      "Selenium Test Driver",
      "Storybook",
      "Graphql",
    ],
  },
  {
    date: "JAN - JUNE 2020",
    title: "Frontend Software Engineer Co-op",
    company: {
      name: "Priceline",
      href: "https://www.linkedin.com/company/priceline-com/posts/?feedView=all",
    },
    description:
      "I worked on many things and they were important. I did worked on building dashboards for Retail Referrals and Easylinks. I drove the development of many projects and completed thourough testing with by writing automated tests with Webdriver and Selenium as well as unit tests with react-testing-library",
    tech: [
      "React",
      "Typescript",
      "Ruby on Rails",
      "Selenium Test Driver",
      "Storybook",
      "Graphql",
    ],
  },
];

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
