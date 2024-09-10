"use client";
import PortableTextComponent from "@/_components/portable-text";
import { Heading } from "@/_components/text";
import { twMerge } from "tailwind-merge";
import { MobileNav, Nav } from "./nav";

const SectionHeading = ({ text, offsetTop = true }) => (
  <div className="flex align-baseline">
    <div
      className={twMerge(
        "relative top-[1.7rem] h-[2px] w-[32px] border border-primary bg-primary",
        offsetTop && "top-[2.7rem]",
      )}
    />
    <Heading
      type="h5"
      classnames={twMerge(
        "ml-2 font-bold mb-[-3rem] mt-4",
        offsetTop && "mt-8 mb-[-2.5rem]",
      )}
    >
      {text}
    </Heading>
  </div>
);

function DeepDive({ data }) {
  const { discovery, design, development } = data;

  return (
    <div className="mb-16">
      <Heading type="h3" classnames="mb-2">
        Diving Deeper
      </Heading>

      <div className="flex w-full flex-col lg:flex-row">
        <MobileNav
          design={design}
          discovery={discovery}
          development={development}
        />
        <Nav design={design} discovery={discovery} development={development} />
        <div className="w-full scroll-smooth lg:w-8/12">
          {discovery && (
            <div id="discovery" className="mb-4 scroll-mt-14">
              <section>
                <SectionHeading text="Discovery" offsetTop={false} />
                <PortableTextComponent
                  blocks={discovery}
                  classnames="first:mt-2"
                />
              </section>
            </div>
          )}
          {design && (
            <div id="process" className="mb-4 scroll-mt-12">
              <section>
                <SectionHeading text="Process" />

                <PortableTextComponent
                  blocks={design}
                  classnames="first:text-pink"
                />
              </section>
            </div>
          )}
          {development && (
            <div id="development" className="mb-4 scroll-mt-12">
              <section>
                <SectionHeading text="Development" />
                <PortableTextComponent
                  blocks={development}
                  classnames="first:mt-2"
                />
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DeepDive;
