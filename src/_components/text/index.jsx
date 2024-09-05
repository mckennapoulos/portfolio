import { twMerge } from "tailwind-merge";

export function Heading({ type, children, classnames, serif }) {
  let cx;
  switch (type) {
    case "h1":
      cx = twMerge(
        `font-sans font-bold uppercase tracking-tighter text-primary`,
        classnames,
      );
      return <h1 className={cx}>{children}</h1>;
    case "h2":
      cx = twMerge(
        serif
          ? `font-serif normal-case text-[36px] leading-[54px] lg:text-5xl`
          : `font-sans uppercase tracking-tight text-2xl`,
        classnames,
      );
      return <h2 className={cx}>{children}</h2>;
    case "h3":
      cx = twMerge(
        `font-sans uppercase font-bold tracking-tight text-xl md:text-2xl text-primary pb-2 md:pb-auto`,
        classnames,
      );
      return <h3 className={cx}>{children}</h3>;
    case "h4":
      cx = twMerge(
        `font-sans tracking-tight text-3xl md:text-4xl pb-1 md:pb-auto`,
        classnames,
      );
      return <h4 className={cx}>{children}</h4>;
    case "h5":
      cx = twMerge(
        `font-sans tracking-tight uppercase text-base text-primary`,
        classnames,
      );
      return <h5 className={cx}>{children}</h5>;
    case "h6":
    default:
      cx = twMerge(`font-sans text-base`, classnames);
      return <h6 className={cx}>{children}</h6>;
  }
}

export const Paragraph = ({ children, classnames }) => {
  const cx = twMerge(`font-sans whitespace-pre-wrap`, classnames);
  return <p className={cx}>{children}</p>;
};

export const Label = ({ children, classnames }) => {
  const cx = twMerge("font-sans font-bold text-sm tracking-tight", classnames);
  return <p className={cx}>{children}</p>;
};
