export function SkillsGrid({ skills }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
      {skills.map((skill, i) => {
        return (
          <div
            key={i}
            className="flex w-full h-20 md:h-24 text-center items-center bg-white [&:nth-child(4n+1)]:bg-tertiary [&:nth-child(4n)]:bg-tertiary sm:[&:nth-of-type(2n)]:bg-white sm:[&:nth-of-type(2n+1)]:bg-tertiary  border-solid border-primary border-1"
          >
            <p className="font-serif italic text-primary text-2xl md:text-4xl font-extrabold leading-[1] m-auto p-2">
              {skill}
            </p>
          </div>
        );
      })}
    </div>
  );
}
