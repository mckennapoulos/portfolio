import { Heading } from "@/_components/text";
import StarPrimary from "../../../public/icons/star-primary.svg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export function WordLink({ words, textCx, starCx, classnames }) {
  return (
    <div className="flex flex-wrap">
      {words.map((word, i) => {
        return (
          <div
            key={i}
            className={twMerge("flex items-baseline pr-2", classnames)}
          >
            {i > 0 && (
              <Image
                src={StarPrimary}
                alt="Red star icon"
                className={twMerge("mr-2", starCx)}
                width="auto"
                height="auto"
              />
            )}
            <Heading type="h5" classnames={textCx}>
              {word}
            </Heading>
          </div>
        );
      })}
    </div>
  );
}
