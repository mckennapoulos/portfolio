import { Heading, Label, Paragraph } from "@/_components/text";
import Image from "next/image";
import batlMockup from "../../../public/mockup/BATL_mockup.svg";
import InfoBlock, { InfoGroup } from "./info-block";
import { Link } from "@/_components/link";
import Button from "@/_components/button";

const BATLCaseStudy = {
  id: 2,
  name: "BATL",
  description:
    "As a client of Scout Studio’s fall 2020 roster, a team of 6 designers and developers, lead by 1 project manager, underwent the development of a custom brand identity and information site.",
  tech: ["React", "Contentful", "Figma", "Javascript"],
  team: { role: "Lead Developer", count: 6 },
  duration: "4 months",
  overview: {
    client: `BATL is Northeastern University’s Biopharmaceutical Analysis & Training Lab. They provide worldwide training, research and education to industries including biopharma, government and academia at their facilities based in the US and around the world. In 2020, BATL transformed part of its lab to house the University’s COVID-19 test center for students and faculty. 

        BATL was brought on as a client to Northeastern’s student-led design studio, Scout, to undergo a semester-long design up haul – re-designing their entire brand identity and developing a new site. `,
    problem:
      "BATL is looking for a strong brand identify to solidify their place as a top regulatory global agency. This brand need to amplify their voice and highlight the pillars of their mission. When people visit the site, they need to be able to understand 3 things: 1. what batl is  and why they are important. 2. what batl can do for them. 3. How to reach batl. ",
    impact:
      "Delivered entire site + brand identity guidelines. Completed all requests and x y z. We used contentful, React app, google maps, figma, Font #1, Font #2 to reinvent BATL.  BATL’s online presence doubled. There is clear information and people can find it quickly. ",
  },
  process: `Long text markup`,
  link: "https://batl.cos.northeastern.edu/",
};

function CaseStudy() {
  return (
    <div>
      <div className="flex w-full flex-col items-start lg:flex-row">
        <div className="w-full lg:w-6/12">
          <div className="md:mb-4">
            <Heading
              type="h1"
              classnames="text-[65px] sm:text-[20cqw] md:text-8xl leading-[.8] "
            >
              <Link
                location={BATLCaseStudy.link}
                classnames="hidden md:flex"
                linkClass="group-hover:decoration-[6px]"
                arrowClass="ml-4 w-[5cqw] lg:w-[50px] group-hover:translate-y-[-25px]"
              >
                {BATLCaseStudy.name}
              </Link>
              <span className="block md:hidden"> {BATLCaseStudy.name}</span>
            </Heading>
            <Label classnames="text-primary ml-1 mt-1 sm:mt-none sm:ml-3">
              0{BATLCaseStudy.id + 1}
            </Label>
            <div className="mt-[-16px] lg:mt-auto lg:hidden">
              <Image
                src={batlMockup}
                alt="mockup"
                className="animate-moveup"
                priority
              />
            </div>
          </div>
          <InfoBlock {...BATLCaseStudy} />
        </div>
        <div className="hidden w-full lg:block lg:w-6/12">
          <div className="relative lg:left-5 lg:overflow-hidden">
            <Image
              src={batlMockup}
              alt="mockup"
              className="animate-movein max-w-none"
              priority
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-8/12">
        <Heading type="h3" classnames="mb-3 md:mb-5">
          High-level overview
        </Heading>
        <div className="mb-4">
          <Label classnames="uppercase mb-2 text-base">the client</Label>
          <Paragraph>{BATLCaseStudy.overview.client}</Paragraph>
        </div>
        <div className="mb-4">
          <Label classnames="uppercase mb-2 text-base">the problem</Label>
          <Paragraph>{BATLCaseStudy.overview.problem}</Paragraph>
        </div>
        <div className="mb-4">
          <Label classnames="uppercase mb-2 text-base">the impact</Label>
          <Paragraph>{BATLCaseStudy.overview.impact}</Paragraph>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
