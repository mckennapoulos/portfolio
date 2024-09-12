import { PortableText } from "@portabletext/react";
import { Heading, Paragraph } from "../text";
import { twMerge } from "tailwind-merge";
import { Link } from "../link";
import { SanityImage } from "../image";
import Image from "next/image";

const myPortableTextComponents = {
  types: {
    customImage: ({ value }) => {
      return <SanityImage {...value} alt={value.alt} classnames="my-12" />;
    },
    image: ({ value }) => (
      <Image src={value.imageUrl} alt={"my image"} quality={100} />
    ),
    callout: ({ value }) => {
      return (
        <div className="w-full bg-tertiary px-8 py-10 md:px-12 md:py-16">
          <Paragraph classnames="font-sans text-3xl tracking-tight text-primary font-bold normal-case mb-4">
            {value.heading}
          </Paragraph>
          <PortableTextComponent blocks={value.content} />
        </div>
      );
    },
  },
  block: {
    h5: ({ children }) => (
      <Heading
        type="h5"
        classnames="font-sans text-3xl tracking-tight text-text normal-case mt-12 mb-2"
      >
        {children}
      </Heading>
    ),
    h6: ({ children }) => (
      <Heading type="h6" classnames="mb-2">
        {children}
      </Heading>
    ),
    blockquote: ({ children }) => (
      <p className="my-8 font-sans text-5xl font-bold leading-[60px] tracking-tight text-primary">
        "{children}"
      </p>
    ),
  },
  marks: {
    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      // account for internal links
      return (
        <Link
          location={value?.href}
          inline={true}
          mobileButtonStyle={true}
          classnames="mt-4 md:mt-2"
        >
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className="my-4 list-disc">{children}</ul>,
    number: ({ children }) => <ol className="my-4 list-decimal">{children}</ol>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <li className="ml-4">{children}</li>,
    number: ({ children }) => <li className="ml-5">{children}</li>,

    // // Ex. 2: rendering custom list items
    // checkmarks: ({children}) => <li>✅ {children}</li>,
  },
};

export default function PortableTextComponent({ blocks, classnames }) {
  return (
    <div className={twMerge(`whitespace-pre-wrap font-sans`, classnames)}>
      <PortableText value={blocks} components={myPortableTextComponents} />
    </div>
  );
}
