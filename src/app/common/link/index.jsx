import Image from "next/image";
import PrimaryArrow from "../../../../public/icons/arrow-primary.svg";
import ArrowSvg from "../../../../public/icons/arrow.svg";
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

export function Link({ location, children, classnames }) {
  const cx = twMerge("group flex items-baseline", classnames);
  return (
    <div className={cx}>
      <a href={location} target="_blank">
        <span className="font-sans font-bold text-primary hover:cursor-pointer hover:underline">
          {children}
        </span>
      </a>
      <Arrow variant="primary" />
    </div>
  );
}
