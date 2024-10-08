const Pill = ({ children }) => {
  return (
    <div className="mr-2 mt-2 w-fit rounded-full bg-secondary px-3 py-1 font-sans text-sm leading-tight">
      {children}
    </div>
  );
};

function Pills({ list }) {
  return (
    <div className="mt-4 flex flex-wrap">
      {list.map((text, i) => (
        <div key={i}>
          <Pill>{text.name}</Pill>
        </div>
      ))}
    </div>
  );
}

export default Pills;
