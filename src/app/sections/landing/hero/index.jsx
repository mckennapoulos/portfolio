import Image from "next/image";
import StarSecondary from "../../../../../public/icons/star-secondary.svg";
import { Heading } from "@/app/common/text";

function Hero() {
  return (
    <div className="mb-7 rounded-2xl bg-tertiary md:rounded-[30px] lg:rounded-[40px]">
      <Heading
        type="h1"
        classnames="w-full text-5xl xs:text-[16cqw] 2xl:text-9xl px-2 pt-5 md:pt-8 lg:pt-12 leading-[.8]"
      >
        Mckenna
      </Heading>
      <div className="flex w-full flex-col pb-5 md:flex-row md:pb-0">
        <Heading
          type="h1"
          classnames="text-5xl xs:text-[16cqw] 2xl:text-9xl px-2 pb-0 md:pb-8 lg:pb-12 leading-[.8]"
        >
          Poulos
        </Heading>
        <div className="px-3.5 pt-1.5 md:ml-2 md:mt-[3.25cqw] md:px-0 lg:ml-3 2xl:mt-[70px]">
          <div className="flex items-center">
            <Heading
              type="h2"
              classnames="md:text-[1.75cqw] 2xl:text-3xl leading-tight mr-1"
            >
              San Diego
            </Heading>
            <Image
              src={StarSecondary}
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

export default Hero;
