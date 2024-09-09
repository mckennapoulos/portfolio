import Image from "next/image";
import Star from "../../../public/icons/star.svg";
import Link from "next/link";
import ArrowLeft from "../../../public/icons/arrow-primary-left.svg";

const NavItem = ({ location, children }) => {
  return (
    <a href={location}>
      <li className="ml-4 font-sans text-xl uppercase tracking-tight hover:font-bold">
        {children}
      </li>
    </a>
  );
};

export function ProjectHeader() {
  const textCx = "font-sans text-base text-primary font-bold";

  return (
    <div className="z-top fixed flex h-14 w-full bg-background px-5">
      <nav className="flex w-full">
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
  return (
    <div className="z-top fixed flex h-14 w-full bg-background px-5">
      <nav className="flex w-full items-center justify-between">
        <a href="#">
          <div className="flex items-center hover:cursor-pointer">
            <Image src={Star} alt="Star logo" className="mr-2" />
            <span className="serif text-2xl italic">Mckenna Poulos</span>
          </div>
        </a>
        <div>
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
