import { PortableText } from "@portabletext/react";
import { Heading, Paragraph } from "../text";
import { twMerge } from "tailwind-merge";
import { Link } from "../link";

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
  block: {
    h5: ({ children }) => (
      <Heading
        type="h5"
        classnames="normal-case text-xl text-text font-bold mb-1"
      >
        {children}
      </Heading>
    ),
    h6: ({ children }) => (
      <Heading type="h6" classnames="mb-2">
        {children}
      </Heading>
    ),
  },
  marks: {
    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      // account for internal links
      return (
        <Link location={value?.href} inline={true}>
          {children}
        </Link>
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
