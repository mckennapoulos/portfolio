import { twMerge } from "tailwind-merge";

function Button(props) {
  const { onClick, ariaLabel, text, classnames } = props;
  const cx = twMerge(
    "font-sm w-full rounded border border-primary bg-primary p-2 font-sans font-bold uppercase text-white hover:bg-tertiary hover:text-primary",
    classnames,
  );
  return (
    <button {...props} className={cx} onClick={onClick} aria-label={ariaLabel}>
      {text}
    </button>
  );
}
export default Button;
