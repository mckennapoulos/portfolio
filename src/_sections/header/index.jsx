import Image from "next/image";
import Star from "../../../public/icons/star.svg";

const NavItem = ({ location, children }) => {
  return (
    <a href={location}>
      <li className="ml-4 font-sans text-xl uppercase tracking-tight hover:font-bold">
        {children}
      </li>
    </a>
  );
};

function Header() {
  return (
    <div className="z-top fixed flex h-14 w-full bg-background px-5">
      <nav className="flex w-full items-center justify-between">
        <a href="#">
          <div className="flex items-center">
            <Image src={Star} alt="Star logo" className="mr-2" />
            <span className="serif text-2xl italic">Mckenna Poulos</span>
          </div>
        </a>
        <div>
          <ul className="flex items-center">
            <NavItem location="#projects">Projects</NavItem>
            <NavItem location="#resume">Resume</NavItem>
            <NavItem location="#contact">Contact</NavItem>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
