"use client";

import { Heading, Paragraph } from "@/_components/text";
import Form from "./form";
import Marquee from "react-fast-marquee";
import PrimaryStar from "../../../public/icons/star-primary.svg";
import Image from "next/image";
import { useConfettiAnimation } from "./confetti";
import Confetti from "react-confetti";

function Contact() {
  const { showConfetti, handleButtonClick } = useConfettiAnimation();
  return (
    <div className="mb-10 flex w-full flex-col">
      <div className="mb-10">
        <Marquee autoFill>
          <div className="flex items-center">
            <span className="mr-5 font-sans text-2xl font-bold uppercase tracking-tight text-primary">
              Let's work together
            </span>
            <Image src={PrimaryStar} alt="Primary star icon" className="mr-5" />
          </div>
        </Marquee>
      </div>
      {showConfetti && (
        <div className="relative">
          <Confetti numberOfPieces={400} recycle={false} />
        </div>
      )}
      <div className="flex w-full flex-col justify-between md:flex-row-reverse lg:flex-row">
        <div className="w-3/12" />
        <div className="flex w-full flex-col lg:w-8/12">
          <Heading type="h2" serif={true} classnames="mb-6">
            Say hi !
          </Heading>
          <div className="mb-8 w-full lg:w-6/12">
            <Paragraph>
              Your digital business needs, site development, frontend engineer
              opportunities, branding revamp, design help, typography guidance,
              accessibility overhaul, latest UX finds, cool websites, your
              favorite dinner recipe, latest NWSL news, surfing, starting an
              herb garden, the best local WFH coffee spots in San Diego — I want
              to talk about it! <br /> <br /> Leave a message and let’s get the
              conversation going.
            </Paragraph>
          </div>
          <Form onSuccess={handleButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
