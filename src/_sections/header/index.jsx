"use client";

import Image from "next/image";
import Star from "../../../public/icons/star.svg";
import Link from "next/link";
import ArrowLeft from "../../../public/icons/arrow-primary-left.svg";
import { Nav } from "./mobile-nav";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

export const NavItem = ({ location, children, classnames, handleClick }) => {
  return (
    <a
      href={location}
      onClick={() => {
        if (handleClick) {
          handleClick();
        }
      }}
    >
      <li
        className={twMerge(
          "ml-4 font-sans text-xl uppercase tracking-tight hover:font-bold",
          classnames,
        )}
      >
        {children}
      </li>
    </a>
  );
};

export function ProjectHeader() {
  const textCx = "font-sans text-base text-primary font-bold";

  return (
    <div className="z-top fixed flex h-14 w-full bg-background">
      <nav className="mx-auto flex w-full max-w-screen-2xl px-5">
        <Link href="/#projects" className="group flex items-center">
          <Image src={ArrowLeft} alt="Left pointing arrow" />
          <div
            className={
              "relative left-[-6.5px] h-[2px] w-[0px] rounded border border-primary bg-primary transition-all duration-500 ease-in-out group-hover:w-[20px]"
            }
          />
          <div>
            <span className={textCx}>Back to main</span>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="z-top fixed mx-auto flex w-full overflow-hidden md:h-14">
      <nav className="mx-auto flex w-full max-w-screen-2xl items-baseline justify-between bg-background px-5 md:items-center">
        <a href="#" className="relative top-[3px] md:top-0 md:flex">
          <div className="mt-2 flex items-center hover:cursor-pointer md:mt-auto">
            <Image src={Star} alt="Star logo" className="mr-2" />
            <span className="serif text-2xl italic">Mckenna Poulos</span>
          </div>
        </a>
        <div className="flex items-center">
          <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
          <ul className="hidden items-center md:flex">
            <NavItem location="#projects">Projects</NavItem>
            <NavItem location="#resume">Resume</NavItem>
            <NavItem location="#contact">Contact</NavItem>
          </ul>
        </div>
      </nav>
    </div>
  );
}
