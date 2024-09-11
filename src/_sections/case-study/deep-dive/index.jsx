"use client";
import PortableTextComponent from "@/_components/portable-text";
import { Heading } from "@/_components/text";
import { twMerge } from "tailwind-merge";
import { MobileNav, Nav } from "./nav";
import { useEffect, useRef, useState } from "react";
import { useScrolling } from "@/_util/useScrolling";

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
  const [activeNav, setActiveNav] = useState("discovery");

  const discoveryBlockRef = useRef();
  const designBlockRef = useRef();
  const developmentBlockRef = useRef();

  const [scrolling, scrollTop] = useScrolling();

  useEffect(() => {
    if (
      discovery &&
      discoveryBlockRef.current?.getBoundingClientRect().top <= 165
    ) {
      setActiveNav("discovery");
    }
    if (design && designBlockRef.current?.getBoundingClientRect().top <= 165) {
      setActiveNav("process");
    }
    if (
      development &&
      developmentBlockRef.current?.getBoundingClientRect().top <= 165
    ) {
      setActiveNav("development");
    }
  }, [scrollTop, scrolling]);

  return (
    <div className="mb-16">
      <div className={twMerge("flex w-full flex-col lg:flex-row")}>
        <div className="lg:unset sticky top-14 z-50 w-full lg:top-0 lg:w-2/12">
          <div className="bg-background lg:sticky lg:top-16">
            <Heading type="h3" classnames="mb-2">
              Diving Deeper
            </Heading>
            <MobileNav
              design={design}
              discovery={discovery}
              development={development}
              active={activeNav}
            />
            <Nav
              design={design}
              discovery={discovery}
              development={development}
              active={activeNav}
            />
          </div>
        </div>
        <div className="w-full scroll-smooth lg:w-8/12">
          {discovery && (
            <div
              ref={discoveryBlockRef}
              id="discovery"
              className="mb-4 scroll-mt-40 lg:scroll-mt-14"
            >
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
            <div
              ref={designBlockRef}
              id="process"
              className="mb-4 scroll-mt-40 lg:scroll-mt-14"
            >
              <section>
                <SectionHeading text="Design process" />

                <PortableTextComponent
                  blocks={design}
                  classnames="first:text-pink"
                />
              </section>
            </div>
          )}
          {development && (
            <div
              ref={developmentBlockRef}
              id="development"
              className="mb-4 scroll-mt-40 lg:scroll-mt-14"
            >
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
