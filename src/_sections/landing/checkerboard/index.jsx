"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useScrollAnimation } from "@/_util/useScrollAnimation";

function getAnimationDelay(width, i) {
  if (!width) {
    return 0;
  }

  if (width >= 1240) {
    // account for window margins
    // xl screen
    return Math.floor(i / 6) * 0.25;
  } else if (width >= 984) {
    // lg screen
    return Math.floor(i / 5) * 0.25;
  } else if (width >= 600) {
    // sm screen
    return Math.floor(i / 3) * 0.5;
  } else {
    return Math.floor(i / 2) * 0.5;
  }
}

export function SkillsCheckerboard({ skills }) {
  const sessionKey = "checkerboardAnimationPlayed";
  const { play, ref } = useScrollAnimation(sessionKey);
  const [width, setWidth] = useState();
  const [showCheckerboard, setShowCheckerboard] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      sessionStorage.removeItem(sessionKey);
    });

    if (sessionStorage.getItem(sessionKey)) {
      setShowCheckerboard(true);
    }
  }, []);

  useEffect(() => {
    setWidth(ref.current.getBoundingClientRect().width);
  }, [ref]);

  const checkerboard =
    "bg-white [&:nth-child(4n+1)]:bg-tertiary [&:nth-child(4n)]:bg-tertiary";
  const smCheckerboard =
    "sm:[&:nth-of-type(2n)]:bg-white sm:[&:nth-of-type(2n+1)]:bg-tertiary";
  const xlCheckerboard =
    "xl:!bg-tertiary xl:[&:nth-of-type(12n+2)]:!bg-white xl:[&:nth-of-type(12n+4)]:!bg-white xl:[&:nth-of-type(12n+6)]:!bg-white xl:[&:nth-of-type(12n+7)]:!bg-white xl:[&:nth-of-type(12n+9)]:!bg-white xl:[&:nth-of-type(12n+11)]:!bg-white";

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6"
    >
      {skills.map((skill, i) => {
        const delay = getAnimationDelay(width, i).toString();
        return (
          <div
            key={i}
            className={twMerge(
              "flex h-20 w-full items-center text-center md:h-24",
              checkerboard,
              smCheckerboard,
              xlCheckerboard,
              !showCheckerboard && "opacity-0",
              play && "animate-slideup",
            )}
            style={{ "--delay": delay + "s" }}
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
