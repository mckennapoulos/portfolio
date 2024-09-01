import { twMerge } from "tailwind-merge";

function Button(props) {
  const { onClick, label, children, classnames, disabled } = props;
  const hoverStyles =
    "hover:cursor-pointer hover:drop-shadow-button hover:translate-x-[3px] hover:translate-y-[-3px]";
  const disabledStyles =
    "aria-disabled:cursor-not-allowed aria-disabled:bg-secondary text-text border-none";
  const cx = twMerge(
    "font-sm w-full  md:w-auto rounded border border-primary bg-primary p-2 font-sans font-bold uppercase text-white  transition-all duration-500 ease-in-out",
    disabled ? disabledStyles : hoverStyles,
    classnames,
  );
  return (
    <button
      className={cx}
      onClick={onClick}
      aria-label={label}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
}
export default Button;
