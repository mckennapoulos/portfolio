import Image from "next/image";
import PrimaryArrow from "../../../public/icons/arrow-primary.svg";
import WhiteArrow from "../../../public/icons/arrow-white.svg";
import ArrowSvg from "../../../public/icons/arrow.svg";
import { twMerge } from "tailwind-merge";

export const Arrow = ({ variant, classnames }) => {
  const baseCx =
    "ml-1 group-hover:translate-y-[-5px] transition ease-in-out duration-500";
  const cx = twMerge(baseCx, classnames);
  switch (variant) {
    case "primary":
      return (
        <Image
          src={PrimaryArrow}
          alt="Northeast pointing arrow"
          className={cx}
        />
      );
    default:
      return (
        <Image src={ArrowSvg} alt="Northeast pointing arrow" className={cx} />
      );
  }
};

export function Link({
  location,
  children,
  classnames,
  arrowClass,
  linkClass,
  inline,
  mobileButtonStyle,
}) {
  const mobileButtonStyleCx =
    "hover:drop-shadow-button rounded border border-primary hover:cursor-pointer md:hover:cursor-auto bg-primary p-3 md:p-0 font-sans font-bold uppercase text-white hover:translate-x-[3px] hover:translate-y-[-3px] md:border-none md:bg-transparent md:normal-case md:hover:transform-none md:hover:drop-shadow-none transition ease-in-out duration-500";
  const cx = twMerge(
    "group flex items-baseline",
    mobileButtonStyleCx,
    classnames,
  );
  const linkCx = twMerge(
    "font-sans font-bold md:text-primary hover:cursor-pointer md:hover:underline",
    linkClass,
  );

  if (inline) {
    return (
      <span className={cx}>
        <a href={location} target="_blank">
          <span className={linkCx}>{children}</span>
        </a>
        <Arrow variant="primary" classnames={arrowClass} />
      </span>
    );
  }

  return (
    <div className={cx}>
      <div
        className={mobileButtonStyle && "baseline m-auto flex md:m-0 md:block"}
      >
        <a href={location} target="_blank">
          <span className={linkCx}>{children}</span>
        </a>
        {mobileButtonStyle && (
          <Image
            src={WhiteArrow}
            alt="Northeast pointing arrow!"
            width={12}
            className="ml-1 block md:hidden"
          />
        )}
      </div>
      <Arrow
        variant="primary"
        classnames={twMerge(mobileButtonStyle && "hidden md:block", arrowClass)}
      />
    </div>
  );
}
