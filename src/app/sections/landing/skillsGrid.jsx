import { twMerge } from "tailwind-merge";

export function SkillsGrid({ skills }) {
  const checkerboard =
    "bg-white [&:nth-child(4n+1)]:bg-tertiary [&:nth-child(4n)]:bg-tertiary";
  const smCheckerboard =
    "sm:[&:nth-of-type(2n)]:bg-white sm:[&:nth-of-type(2n+1)]:bg-tertiary";
  const xlCheckerboard =
    "xl:!bg-tertiary xl:[&:nth-of-type(12n+2)]:!bg-white xl:[&:nth-of-type(12n+4)]:!bg-white xl:[&:nth-of-type(12n+6)]:!bg-white xl:[&:nth-of-type(12n+7)]:!bg-white xl:[&:nth-of-type(12n+9)]:!bg-white xl:[&:nth-of-type(12n+11)]:!bg-white";
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
      {skills.map((skill, i) => {
        return (
          <div
            key={i}
            className={twMerge(
              "flex w-full h-20 md:h-24 text-center items-center",
              checkerboard,
              smCheckerboard,
              xlCheckerboard
            )}
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
