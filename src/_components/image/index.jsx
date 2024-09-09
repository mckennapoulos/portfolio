"use client";

import { client } from "@/sanity/lib/client";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

export const SanityImage = ({ asset, alt, classnames }) => {
  const imageProps = useNextSanityImage(client, asset);

  if (!imageProps) return null;

  return (
    <Image
      {...imageProps}
      sizes="(max-width: 800px) 100vw, 800px"
      className={classnames}
      alt={alt}
    />
  );
};
