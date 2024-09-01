import Image from "next/image";
import LinkedIn from "../../../public/icons/linkedIn.svg";
import Github from "../../../public/icons/github.svg";
import Star from "../../../public/icons/star-footer.svg";

import { Paragraph } from "@/_components/text";

function Footer() {
  const textCx = "text-footer text-sm";
  return (
    <div className="my-4 flex w-full flex-col justify-between px-4 align-middle md:flex-row">
      <div className="mb-4 flex w-auto md:mb-auto" target="_blank">
        <a href="https://www.linkedin.com/in/mckennapoulos/" className="mr-4">
          <Image src={LinkedIn} alt="LinkedIn logo" />
        </a>
        <a href={"https://github.com/mckennapoulos"} target="_blank">
          <Image src={Github} alt="Github logo" />
        </a>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center md:justify-end">
          <Paragraph classnames={textCx}>Made with care</Paragraph>
          <Image src={Star} alt="Star logo" className="mx-1" />
          <Paragraph classnames={textCx}>2024</Paragraph>
        </div>

        <Paragraph classnames={textCx}>
          Built with Next.js and React. Styled with Tailwind CSS. Managed by
          Sanity. Deployed on Vercel.
        </Paragraph>
      </div>
    </div>
  );
}

export default Footer;
