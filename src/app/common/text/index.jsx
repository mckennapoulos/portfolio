import { twMerge } from "tailwind-merge";

export function Heading({ type, children, classnames }) {
  let cx;
  switch (type) {
    case "h1":
      cx = twMerge(
        `font-sans font-bold uppercase tracking-tighter text-primary`,
        classnames,
      );
      return <h1 className={cx}>{children}</h1>;
    case "h2":
      cx = twMerge(`font-sans uppercase tracking-tight text-2xl`, classnames);
      return <h2 className={cx}>{children}</h2>;
    case "h3":
      cx = twMerge(
        `font-sans uppercase font-bold tracking-tight text-base md:text-2xl text-primary pb-2 md:pb-auto`,
        classnames,
      );
      return <h3 className={cx}>{children}</h3>;
    case "h4":
      cx = twMerge(
        `font-sans tracking-tight text-2xl md:text-3xl pb-1 md:pb-auto`,
        classnames,
      );
      return <h4 className={cx}>{children}</h4>;
    case "h5":
      cx = twMerge(
        `font-sans tracking-tight uppercase text-base text-primary`,
        classnames,
      );
      return <h5 className={cx}>{children}</h5>;
  }
}

export const Paragraph = ({ children, classnames }) => {
  const cx = twMerge(`font-sans`, classnames);
  return <p className={cx}>{children}</p>;
};

export const Label = ({ children, classnames }) => {
  const cx = twMerge("font-sans font-bold text-sm tracking-tight", classnames);
  return <p className={cx}>{children}</p>;
};
