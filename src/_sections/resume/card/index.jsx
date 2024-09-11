"use client";

import Pills from "@/_components/pill";
import { Heading, Label, Paragraph } from "@/_components/text";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import useMeasure from "react-use-measure";
import { twMerge } from "tailwind-merge";
import moment from "moment";
import PortableTextComponent from "@/_components/portable-text";

const CompanyLink = ({ href, children }) => {
  if (href) {
    return (
      <a href={href} target="_blank" className="hover:underline">
        {children}
      </a>
    );
  }
  return children;
};

function FormatDate({ date }) {
  const startTime = date.startTime.split("-");
  const endTime = date.endTime.split("-");
  if (date.yearOnly) {
    return startTime[0] + " - " + endTime[0];
  }

  const startMonth = moment(startTime[1], "M").format("MMM");
  const endMonth = moment(endTime[1], "M").format("MMM");
  return startMonth + " - " + endMonth + " " + endTime[0];
}

function Card({ title, date, summary, company, tech, key }) {
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
        <Label>
          <FormatDate date={date} />
        </Label>
        <div className="mb-8 mt-2 md:mt-4">
          <Heading type="h4" classnames="pb-0">
            {title}
          </Heading>
          <div className="flex">
            <Paragraph classnames="text-sm pr-[1.5px]">&#x40;</Paragraph>
            <CompanyLink href={company.link}>
              <Paragraph classnames="text-sm">{company.name}</Paragraph>
            </CompanyLink>
          </div>
        </div>
      </div>
      <animated.div style={contentAnimatedStyle}>
        <div ref={ref} className="pb-5">
          <PortableTextComponent blocks={summary} />
          <Pills list={tech} />
        </div>
      </animated.div>
    </div>
  );
}

export default Card;
