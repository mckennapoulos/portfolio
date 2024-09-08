import "../../globals.css";

import { JUANA } from "../../styles/fonts";

export const metadata = {
  title: "Mckenna Poulos Portfolio",
  description:
    "Mckenna Poulos's portfolio site that highlights web and mobile design and development projects.",
};

export default function ProjectLayout({ children }) {
  return (
    <html lang="en" className={`${JUANA.variable} scroll-smooth font-serif`}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/vrt4lcx.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
