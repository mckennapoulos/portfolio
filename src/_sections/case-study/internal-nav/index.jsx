import Link from "next/link";
import Image from "next/image";
import ArrowLeft from "../../../../public/icons/arrow-primary-left.svg";
import ArrowRight from "../../../../public/icons/arrow-primary-right.svg";

export default function InternalNav({ data }) {
  const textCx = "font-sans text-base text-primary font-bold";

  return (
    <div className="flex w-full justify-between">
      <div className="mb-4 md:mb-0 md:mt-4">
        <Link
          href={`/project/${data.prev.slug}`}
          className="group flex items-center"
        >
          <Image src={ArrowLeft} alt="Left pointing arrow" />
          <div
            className={
              "relative left-[-6.5px] h-[2px] w-[0px] rounded border border-primary bg-primary transition-all duration-500 ease-in-out group-hover:w-[20px]"
            }
          />
          <div>
            <span className={textCx}>Previous project</span>
          </div>
        </Link>
      </div>
      <div className="mb-4 md:mb-0 md:mt-4">
        <Link
          href={`/project/${data.next.slug}`}
          className="group flex items-center"
        >
          <div>
            <span className={textCx}>Next project</span>
          </div>
          <div
            className={
              "relative right-[-6.5px] h-[2px] w-[0px] rounded border border-primary bg-primary transition-all duration-500 ease-in-out group-hover:w-[20px]"
            }
          />
          <Image src={ArrowRight} alt="Right pointing arrow" />
        </Link>
      </div>
    </div>
  );
}
