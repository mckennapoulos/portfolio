function Button(props) {
  const { onClick, ariaLabel, text } = props;
  return (
    <button
      {...props}
      className="font-sm rounded border border-primary bg-primary p-2 font-sans font-bold uppercase text-white hover:bg-tertiary hover:text-primary"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {text}
    </button>
  );
}
export default Button;
