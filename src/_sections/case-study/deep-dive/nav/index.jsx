import { twMerge } from "tailwind-merge";

const NavLink = ({ contentId, children }) => {
  return (
    <div className="group flex items-center">
      <div className="mb-[8px] mr-2 h-[2px] w-[2px] border border-primary bg-primary transition-all ease-in-out group-hover:w-[32px]" />
      <a
        href={`#${contentId}`}
        className="md:pb-auto pb-2 font-sans text-xl font-normal capitalize tracking-tight text-primary transition-all ease-in-out group-hover:font-bold md:text-2xl"
      >
        {children}
      </a>
    </div>
  );
};
export const Nav = ({ discovery, design, development }) => {
  return (
    <div className="sticky mb-4 mr-4 mt-3 hidden w-2/12 lg:block">
      {discovery?.length && <NavLink contentId="discovery">Discovery</NavLink>}
      {design?.length && <NavLink contentId="process">Design Process</NavLink>}
      {development?.length && (
        <NavLink contentId="development">Development</NavLink>
      )}
    </div>
  );
};

const MobileNavLink = ({ contentId, children }) => {
  return (
    <a
      href={`#${contentId}`}
      className="my-2 border border-x-0 border-t-0 border-b-primary py-4 text-center font-sans text-sm uppercase tracking-tight text-primary hover:cursor-pointer hover:bg-primary hover:font-bold hover:text-white"
    >
      {children}
    </a>
  );
};

export const MobileNav = ({ discovery, design, development }) => {
  const list = [discovery?.length, design?.length, development?.length].filter(
    (value) => Boolean(value),
  );
  return (
    <div
      className={twMerge(
        "my-2 grid w-full items-center gap-0 lg:hidden",
        list.length > 1
          ? list.length > 2
            ? "grid-cols-3"
            : "grid-cols-2"
          : "hidden",
      )}
    >
      {discovery?.length && (
        <MobileNavLink contentId="discovery">Discovery</MobileNavLink>
      )}
      {design?.length && (
        <MobileNavLink contentId="process">Design Process</MobileNavLink>
      )}
      {development?.length && (
        <MobileNavLink contentId="development">Development</MobileNavLink>
      )}
    </div>
  );
};
