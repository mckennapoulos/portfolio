import { Heading } from "../text";
import Image from "next/image";
import GreenStar from "../../../../public/icons/green-star.svg";

export function Hero() {
  return (
    <div className="bg-tertiary rounded-2xl md:rounded-[30px] lg:rounded-[40px]">
      <Heading
        type="h1"
        classnames="w-full text-5xl xs:text-[16cqw] 2xl:text-9xl px-2 pt-5 md:pt-8 lg:pt-12 leading-[.8]"
      >
        Mckenna
      </Heading>
      <div className="flex flex-col md:flex-row w-full pb-5 md:pb-0">
        <Heading
          type="h1"
          classnames="text-5xl xs:text-[16cqw] 2xl:text-9xl px-2 pb-0 md:pb-8 lg:pb-12 leading-[.8]"
        >
          Poulos
        </Heading>
        <div className="px-3.5 sm:px-0 pt-1.5 md:ml-1 md:mt-[3.25cqw] 2xl:mt-[70px]">
          <div className="flex items-center">
            <Heading
              type="h2"
              classnames="md:text-[1.75cqw] 2xl:text-3xl leading-tight mr-1"
            >
              San Diego
            </Heading>
            <Image
              src={GreenStar}
              alt="Green star icon"
              className="mb-[2px]"
              width="16"
            />
          </div>

          <Heading
            type="h2"
            classnames="md:text-[1.75cqw] 2xl:text-3xl leading-tight"
          >
            Web <br className="hidden md:block" />
            developer <br className="hidden md:block" />& designer
          </Heading>
        </div>
      </div>
    </div>
  );
}
