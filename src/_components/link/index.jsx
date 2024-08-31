import Image from "next/image";
import PrimaryArrow from "../../../public/icons/arrow-primary.svg";
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
}) {
  const cx = twMerge("group flex items-baseline", classnames);
  const linkCx = twMerge(
    "font-sans font-bold text-primary hover:cursor-pointer hover:underline",
    linkClass,
  );
  return (
    <div className={cx}>
      <a href={location} target="_blank">
        <span className={linkCx}>{children}</span>
      </a>
      <Arrow variant="primary" classnames={arrowClass} />
    </div>
  );
}
