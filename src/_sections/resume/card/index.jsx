"use client";

import Pills from "@/_components/pill";
import { Heading, Label, Paragraph } from "@/_components/text";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import useMeasure from "react-use-measure";
import { twMerge } from "tailwind-merge";

const CompanyLink = ({ href, children }) => {
  if (href) {
    return (
      <a href={href} target="_blank" className="underline hover:font-bold">
        {children}
      </a>
    );
  }
  return children;
};

function Card({ title, date, description, company, tech, key }) {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, bounds] = useMeasure();

  const contentAnimatedStyle = useSpring({
    height: isOpen ? bounds.height : 0,
  });

  const baseStyles =
    "w-full overflow-hidden border-b border-primary bg-background pt-5 px-5 transition-all duration-500 ease-in-out";
  const hoverStyles = "hover:cursor-pointer hover:drop-shadow-resume";
  const openStyles = "drop-shadow-resume";

  const cx = twMerge(baseStyles, hoverStyles, isOpen && openStyles);
  return (
    <div
      key={key}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className={cx}
    >
      <div>
        <Label>{date}</Label>
        <div className="mb-8 mt-2 md:mt-4">
          <Heading type="h4" classnames="pb-0">
            {title}
          </Heading>
          <div className="flex">
            <Paragraph classnames="text-sm pr-[1.5px]">&#x40;</Paragraph>
            <CompanyLink href={company.href}>
              <Paragraph classnames="text-sm">{company.name}</Paragraph>
            </CompanyLink>
          </div>
        </div>
      </div>
      <animated.div style={contentAnimatedStyle}>
        <div ref={ref} className="pb-5">
          <Paragraph>{description}</Paragraph>
          <Pills list={tech} />
        </div>
      </animated.div>
    </div>
  );
}

export default Card;
