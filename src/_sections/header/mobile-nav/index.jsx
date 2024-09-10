"use client";

import React from "react";
import { NavItem } from "..";
import useMeasure from "react-use-measure";
import { useSpring, animated } from "@react-spring/web";

export const Nav = ({ isOpen, setIsOpen }) => {
  const [ref, bounds] = useMeasure();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const contentAnimatedStyle = useSpring({
    height: isOpen ? bounds.height : 0,
  });

  return (
    <div className="flex w-fit flex-col items-end transition-all duration-500 ease-in-out md:hidden">
      <button
        onClick={handleClick}
        className="my-4 ml-4 items-center justify-center md:hidden"
      >
        <div
          className={`bg-text block h-0.5 w-6 rounded-sm transition-all duration-500 ease-out ${
            isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
          }`}
        />
        <div
          className={`bg-text my-0.5 block h-0.5 w-6 rounded-sm transition-all duration-500 ease-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className={`bg-text block h-0.5 w-6 rounded-sm transition-all duration-500 ease-out ${
            isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
          }`}
        />
      </button>
      <animated.div style={contentAnimatedStyle}>
        <div ref={ref} className="bg-background text-right">
          <ul className="flex-col items-center">
            <NavItem
              location="#projects"
              classnames="py-3"
              handleClick={() => setIsOpen(false)}
            >
              Projects
            </NavItem>
            <NavItem
              location="#resume"
              classnames="py-3"
              handleClick={() => setIsOpen(false)}
            >
              Resume
            </NavItem>
            <NavItem
              location="#contact"
              classnames="py-3"
              handleClick={() => setIsOpen(false)}
            >
              Contact
            </NavItem>
          </ul>
        </div>
      </animated.div>
    </div>
  );
};
