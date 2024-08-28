import { Heading, Paragraph } from "@/app/common/text";
import RedStar from "../../../../../public/icons/red-star.svg";
import Image from "next/image";

export function WordLink({ words }) {
  return (
    <div className="flex flex-wrap">
      {words.map((word, i) => {
        return (
          <div key={i} className="flex items-baseline pr-2">
            {i > 0 && (
              <Image
                src={RedStar}
                alt="Red star icon"
                className="mr-2"
                width="auto"
                height="auto"
              />
            )}
            <Heading type="h5">{word}</Heading>
          </div>
        );
      })}
    </div>
  );
}
