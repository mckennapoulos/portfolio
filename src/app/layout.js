import "./globals.css";

import { JUANA } from "./styles/fonts";

export const metadata = {
  title: "Mckenna Poulos Portfolio",
  description:
    "Mckenna Poulos's portfolio site that highlights web and mobile design and development projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${JUANA.variable} scroll-smooth font-serif`}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/vrt4lcx.css" />
        <meta property="og:image" content="/images/preview.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
