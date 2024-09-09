import Footer from "@/_sections/footer";
import "../globals.css";

import { MainHeader } from "@/_sections/header";

export const metadata = {
  title: "Mckenna Poulos Portfolio",
  description:
    "Mckenna Poulos's portfolio site that highlights web and mobile design and development projects.",
};

export default function ProjectLayout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
      <Footer />
    </>
  );
}
