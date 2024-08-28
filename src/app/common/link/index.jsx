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

export function Link({ location }) {
  return;
}
