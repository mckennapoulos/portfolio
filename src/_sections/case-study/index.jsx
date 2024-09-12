"use client";

import { Heading, Label, Paragraph } from "@/_components/text";
import InfoBlock from "./info-block";
import { Link } from "@/_components/link";
import DeepDive from "./deep-dive";
import { client } from "@/sanity/lib/client";
import { useNextSanityImage } from "next-sanity-image";
import PortableTextComponent from "@/_components/portable-text";
import { twMerge } from "tailwind-merge";
import { SanityImage } from "@/_components/image";
import { notFound } from "next/navigation";
import InternalNav from "./internal-nav";

function hasProcess(process) {
  return (
    process?.design?.length ||
    process?.discovery?.length ||
    process?.development?.length
  );
}

function CaseStudy({ data, internalNav }) {
  if (!data) {
    notFound();
  }
  const {
    title,
    description,
    href,
    mockup,
    mockup2,
    team,
    tech,
    overview,
    duration,
    screens,
    process,
  } = data;
  const mockUpProps = useNextSanityImage(client, mockup);
  const columns = overview?.length > 2 ? `md:grid-cols-3` : `md:grid-cols-2`;
  return (
    <div>
      <div className="mb-12 flex w-full flex-col items-start lg:flex-row">
        <div className="w-full lg:w-6/12">
          <div className="md:mb-4">
            <Heading
              type="h1"
              classnames="text-[65px] sm:text-[20cqw] md:text-8xl leading-[.8] normal-case"
            >
              <Link
                location={href}
                classnames="hidden md:flex"
                linkClass="group-hover:decoration-[6px]"
                arrowClass="ml-4 w-[5cqw] lg:w-[50px] group-hover:translate-y-[-25px]"
              >
                {title}
              </Link>
              <span className="block md:hidden">{title}</span>
            </Heading>
            <Label classnames="text-primary ml-1 mt-1 sm:mt-none sm:ml-3">
              0{internalNav.current.key + 1}
            </Label>
            <div className="mt-[-16px] lg:mt-auto lg:hidden">
              {mockup2 && (
                <SanityImage
                  {...mockup2.customImage}
                  alt={mockup2.customImage.alt}
                  classnames="animate-moveup delay-500"
                />
              )}
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-col">
            <InfoBlock
              description={description}
              team={team}
              tech={tech}
              duration={duration}
              nav={internalNav}
              href={href}
            />
            <InternalNav data={internalNav} />
          </div>
        </div>
        <div className="hidden w-full lg:block lg:w-6/12">
          <div className="relative lg:left-5 lg:overflow-hidden">
            {mockup2 && (
              <SanityImage
                {...mockup2.customImage}
                alt={mockup2.customImage.alt}
                classnames="animate-moveup delay-500"
              />
            )}
          </div>
        </div>
      </div>
      {overview && (
        <div className="mb-32 flex w-full flex-col">
          <Heading type="h3" classnames="mb-3">
            Overview
          </Heading>

          <div className={twMerge("grid w-full grid-cols-1 gap-4", columns)}>
            {overview.map((section, i) => {
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-primary bg-background px-8 py-16"
                >
                  <Paragraph classnames="tracking-light text-2xl mb-8">
                    {section.title}
                  </Paragraph>
                  <PortableTextComponent blocks={section.content} />
                </div>
              );
            })}
          </div>
        </div>
      )}
      {hasProcess(process) && <DeepDive data={process} />}
      {screens && (
        <div>
          <div className="flex w-full flex-col items-center">
            <Heading type="h3" classnames="mb-4">
              Screens
            </Heading>
            {screens.desktop && (
              <div className="my-2 grid w-full grid-cols-2 gap-4 md:w-10/12">
                {screens.desktop.map((image, i) => (
                  <SanityImage {...image} key={i} />
                ))}
              </div>
            )}
            {screens.mobile && (
              <div className="my-2 grid w-full grid-cols-2 gap-4 md:w-10/12 md:grid-cols-5">
                {screens.mobile.map((image, i) => (
                  <SanityImage {...image} key={i} />
                ))}
              </div>
            )}
            {screens.tablet && (
              <div className="my-2 grid w-full grid-cols-2 gap-4 md:w-10/12">
                {screens.tablet.map((image, i) => (
                  <SanityImage {...image} key={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CaseStudy;
