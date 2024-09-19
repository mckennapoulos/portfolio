"use client";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export function SkillsCheckerboard({ skills, myRef, isVisible }) {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    if (isVisible) {
      setPlay(true);
    }
  }, [isVisible]);
  const checkerboard =
    "bg-white [&:nth-child(4n+1)]:bg-tertiary [&:nth-child(4n)]:bg-tertiary";
  const smCheckerboard =
    "sm:[&:nth-of-type(2n)]:bg-white sm:[&:nth-of-type(2n+1)]:bg-tertiary";
  const xlCheckerboard =
    "xl:!bg-tertiary xl:[&:nth-of-type(12n+2)]:!bg-white xl:[&:nth-of-type(12n+4)]:!bg-white xl:[&:nth-of-type(12n+6)]:!bg-white xl:[&:nth-of-type(12n+7)]:!bg-white xl:[&:nth-of-type(12n+9)]:!bg-white xl:[&:nth-of-type(12n+11)]:!bg-white";

  return (
    <div
      ref={myRef}
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6"
    >
      {skills.map((skill, i) => {
        return (
          <div
            key={i}
            className={twMerge(
              "flex h-20 w-full items-center text-center md:h-24",
              checkerboard,
              smCheckerboard,
              xlCheckerboard,
              play && "xl:animate-slidein xl:opacity-0",
            )}
            style={{ "--delay": (i % 6) * 0.25 + "s" }}
          >
            <p className="m-auto p-2 font-serif text-2xl font-extrabold italic leading-[1] text-primary md:text-4xl">
              {skill}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default SkillsCheckerboard;
