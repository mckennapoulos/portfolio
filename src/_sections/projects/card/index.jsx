"use client";
import Image from "next/image";
import { Heading, Paragraph } from "../../../_components/text";
import { WordLink } from "../../../_components/word-link";
import { twMerge } from "tailwind-merge";
import { Arrow } from "../../../_components/link";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

const PreviewImage = ({ classnames, data }) => {
  const imageProps = useNextSanityImage(client, data.file);
  return (
    <Image
      {...imageProps}
      alt={data.alt}
      style={{ width: "100px", height: "auto" }}
      className={twMerge(
        "mb-2 border-2 border-solid border-secondary transition duration-500 ease-in-out md:opacity-0 md:group-hover:translate-x-[2px] md:group-hover:translate-y-[-3px] md:group-hover:opacity-100 md:group-hover:drop-shadow-previewImg",
        classnames,
      )}
    />
  );
};

const Content = ({
  title,
  description,
  categories,
  previewImage,
  linkOnly,
}) => {
  const linkStyle = linkOnly ? "group-hover:underline" : "";
  const headingCx = twMerge("xl:mt-5 mb-0 pb-0", linkStyle);
  return (
    <div className="p-7 xl:p-8">
      <div className="mb-3">
        <div>
          <div className="flex items-start justify-between">
            <PreviewImage
              classnames="block xl:hidden mb-5"
              data={previewImage}
            />
            {linkOnly && (
              <Arrow classnames="block md:hidden group-hover:translate-x-[5px]" />
            )}
          </div>
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline">
              <Heading type="h4" classnames={headingCx}>
                {title}
              </Heading>
              {linkOnly && <Arrow classnames="hidden md:block" />}
            </div>
            <PreviewImage classnames="hidden xl:block" data={previewImage} />
          </div>
        </div>
        <WordLink words={categories} />
      </div>
      <div className="min-h-14">
        <Paragraph classnames="text-sm">{description}</Paragraph>
      </div>
    </div>
  );
};

function Card(props) {
  return (
    <div className="group relative w-full rounded-2xl border border-solid border-secondary bg-background transition duration-500 ease-in-out hover:translate-x-[6px] hover:translate-y-[-6px] hover:cursor-pointer hover:drop-shadow-project">
      {Boolean(props.linkOnly) ? (
        <a href={props.href} target="_blank">
          <Content {...props} />
        </a>
      ) : (
        <Link href={`/project/${props.slug}`}>
          <Content {...props} />
        </Link>
      )}
    </div>
  );
}

export default Card;
