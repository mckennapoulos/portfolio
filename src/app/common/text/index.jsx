import { twMerge } from "tailwind-merge";

export function Heading({ type, variant, children, classnames }) {
  let cx;
  switch (type) {
    case "h1":
      cx = twMerge(
        `font-sans font-bold uppercase tracking-tighter text-primary`,
        classnames
      );
      return <h1 className={cx}>{children}</h1>;
    case "h2":
      cx = twMerge(`font-sans uppercase tracking-tight text-2xl`, classnames);
      return <h2 className={cx}>{children}</h2>;
    case "h3":
      cx = twMerge(
        `font-sans uppercase font-bold tracking-tight text-2xl text-primary`,
        classnames
      );
      return <h3 className={cx}>{children}</h3>;
  }
}
