import { PortableText } from "@portabletext/react";
import { Paragraph } from "../text";
import { twMerge } from "tailwind-merge";

const myPortableTextComponents = {
  types: {
    image: ({ value }) => <img src={value.imageUrl} />,
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  marks: {
    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
        >
          {children}
        </a>
      );
    },
  },
};

export default function PortableTextComponent({ blocks, classnames }) {
  return (
    <div className={twMerge(`whitespace-pre-wrap font-sans`, classnames)}>
      <PortableText value={blocks} components={myPortableTextComponents} />
    </div>
  );
}
