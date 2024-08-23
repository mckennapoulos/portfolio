import localFont from "next/font/local";

export const JUANA = localFont({
  src: [
    {
      path: "../../../public/fonts/juana-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/juana-regularit-webfont.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-juana",
});
