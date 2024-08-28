const Pill = ({ children }) => {
  return (
    <div className="mr-2 mt-2 w-fit rounded-full bg-secondary px-3 py-1 font-sans text-xs leading-tight">
      {children}
    </div>
  );
};

function Pills({ list }) {
  return (
    <div className="mt-3 flex flex-wrap">
      {list.map((text, i) => (
        <Pill key={i}>{text}</Pill>
      ))}
    </div>
  );
}

export default Pills;
