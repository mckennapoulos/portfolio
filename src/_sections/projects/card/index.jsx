import Image from "next/image";
import { Heading, Paragraph } from "../../../_components/text";
import { WordLink } from "../../../_components/word-link";
import PreviewImg from "../../../../public/images/beach-break-preview.png";
import { twMerge } from "tailwind-merge";
import { Arrow } from "../../../_components/link";

const PreviewImage = ({ classnames }) => (
  <Image
    src={PreviewImg}
    alt="Preview image for Beach Break Surf Cafe"
    width="auto"
    height="auto"
    className={twMerge(
      "mb-2 border-2 border-solid border-secondary transition duration-500 ease-in-out md:opacity-0 md:group-hover:translate-x-[2px] md:group-hover:translate-y-[-3px] md:group-hover:opacity-100 md:group-hover:drop-shadow-previewImg",
      classnames,
    )}
  />
);

const Content = ({ title, href, description, categories }) => {
  const linkStyle = href ? "group-hover:underline" : "";
  const headingCx = twMerge("xl:mt-5 mb-0 pb-0", linkStyle);
  return (
    <div className="p-7 xl:p-8">
      <div className="mb-3">
        <div>
          <div className="flex items-start justify-between">
            <PreviewImage classnames="block xl:hidden mb-5" />
            {href && (
              <Arrow classnames="block md:hidden group-hover:translate-x-[5px]" />
            )}
          </div>
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline">
              <Heading type="h4" classnames={headingCx}>
                {title}
              </Heading>
              {href && <Arrow classnames="hidden md:block" />}
            </div>
            <PreviewImage classnames="hidden xl:block" />
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
    <div
      key={props.key}
      className="group relative w-full rounded-2xl border border-solid border-secondary bg-background transition duration-500 ease-in-out hover:translate-x-[6px] hover:translate-y-[-6px] hover:cursor-pointer hover:drop-shadow-project"
    >
      {props.href ? (
        <a href={props.href} target="_blank">
          <Content {...props} />
        </a>
      ) : (
        <Content {...props} />
      )}
    </div>
  );
}

export default Card;