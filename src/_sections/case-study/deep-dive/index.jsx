"use client";
import { Heading, Paragraph } from "@/_components/text";
import { useEffect, useState } from "react";

const NavLink = ({ contentId, children }) => {
  // const [active, setActive] = useState(null);
  // const sections = document.querySelectorAll("section");

  return (
    <div className="group flex items-center">
      <div className="mb-[8px] mr-2 h-[2px] w-[2px] border border-primary bg-primary transition-all ease-in-out group-hover:w-[20px]" />
      <a
        // activeClass="font-bold"
        href={`#${contentId}`}
        className="md:pb-auto pb-2 font-sans text-xl font-normal capitalize tracking-tight text-primary transition-all ease-in-out group-hover:font-bold md:text-2xl"
      >
        {children}
      </a>
    </div>
  );
};

function DeepDive() {
  return (
    <div>
      <Heading type="h3" classnames="mb-3">
        Diving Deeper
      </Heading>

      <div className="flex w-full flex-col lg:flex-row">
        <div className="mb-4 mr-4 w-full lg:w-2/12">
          <NavLink contentId="discovery">Discovery</NavLink>
          <NavLink contentId="process">Design Process</NavLink>
          <NavLink contentId="development">Development</NavLink>
        </div>
        <div className="h-[48rem] w-full overflow-scroll scroll-smooth border border-primary bg-white p-4 lg:w-10/12">
          <div id="discovery" className="mb-4">
            <section>
              <Heading type="h4">Discovery</Heading>
              <Paragraph>
                My goal is to bring your ideas to life in a digital space. From
                brand identity development to outlining intuitive user
                experiences and complete web development, I am passionate about
                building personalized products for clients. Given my degree in
                Computer Science and Design{" "}
                <span className="italic">
                  (concentration in Interaction Design and Web Development)
                </span>{" "}
                and over 6 years of design and development experience, I have
                fluency in the tools and skills needed to architect and deliver
                high-quality features. My goal is to bring your ideas to life in
                a digital space. From brand identity development to outlining
                intuitive user experiences and complete web development, I am
                passionate about building personalized products for clients.
                Given my degree in Computer Science and Design{" "}
                <span className="italic">
                  (concentration in Interaction Design and Web Development)
                </span>{" "}
                and over 6 years of design and development experience, I have
                fluency in the tools and skills needed to architect and deliver
                high-quality features. My goal is to bring your ideas to life in
                a digital space. From brand identity development to outlining
                intuitive user experiences and complete web development, I am
                passionate about building personalized products for clients.
                Given my degree in Computer Science and Design{" "}
                <span className="italic">
                  (concentration in Interaction Design and Web Development)
                </span>{" "}
                and over 6 years of design and development experience, I have
                fluency in the tools and skills needed to architect and deliver
                high-quality features. My goal is to bring your ideas to life in
                a digital space. From brand identity development to outlining
                intuitive user experiences and complete web development, I am
                passionate about building personalized products for clients.
                Given my degree in Computer Science and Design{" "}
                <span className="italic">
                  (concentration in Interaction Design and Web Development)
                </span>{" "}
                and over 6 years of design and development experience, I have
                fluency in the tools and skills needed to architect and deliver
                high-quality features. My goal is to bring your ideas to life in
                a digital space. From brand identity development to outlining
                intuitive user experiences and complete web development, I am
                passionate about building personalized products for clients.
                Given my degree in Computer Science and Design{" "}
                <span className="italic">
                  (concentration in Interaction Design and Web Development)
                </span>{" "}
                and over 6 years of design and development experience, I have
                fluency in the tools and skills needed to architect and deliver
                high-quality features. My goal is to bring your ideas to life in
                a digital space. From brand identity development to outlining
                intuitive user experiences and complete web development, I am
                passionate about building personalized products for clients.
                Given my degree in Computer Science and Design{" "}
                <span className="italic">
                  (concentration in Interaction Design and Web Development)
                </span>{" "}
                and over 6 years of design and development experience, I have
                fluency in the tools and skills needed to architect and deliver
                high-quality features.
              </Paragraph>
            </section>
          </div>
          <div id="process" className="mb-4">
            <section>
              <Heading type="h4">Process</Heading>
              <Paragraph>
                My goal is to bring your ideas to life in a digital space. From
                brand identity development to outlining intuitive user
                experiences and complete web development, I am passionate about
                building personalized products for clients. Given my degree in
                Computer Science and Design{" "}
                <span className="italic">
                  (concentration in Interaction Design and Web Development)
                </span>{" "}
                and over 6 years of design and development experience, I have
                fluency in the tools and skills needed to architect and deliver
                high-quality features. My goal is to bring your ideas to life in
                a digital space. From brand identity development to outlining
                intuitive user experiences and complete web development, I am
                passionate about building personalized products for clients.
                Given my degree in Computer Science and Design{" "}
                <span className="italic">
                  (concentration in Interaction Design and Web Development)
                </span>{" "}
                and over 6 years of design and development experience, I have
                fluency in the tools and skills needed to architect and deliver
                high-quality features.
              </Paragraph>
            </section>
          </div>
          <div id="development" className="mb-4">
            <section>
              <Heading type="h4">Development</Heading>
              <Paragraph>
                My goal is to bring your ideas to life in a digital space. From
                brand identity development to outlining intuitive user
                experiences and complete web development, I am passionate about
                building personalized products for clients. Given my degree in
                Computer Science and Design{" "}
                <span className="italic">
                  (concentration in Interaction Design and Web Development)
                </span>{" "}
                and over 6 years of design and development experience, I have
                fluency in the tools and skills needed to architect and deliver
                high-quality features. My goal is to bring your ideas to life in
                a digital space. From brand identity development to outlining
                intuitive user experiences and complete web development, I am
                passionate about building personalized products for clients.
                Given my degree in Computer Science and Design{" "}
                <span className="italic">
                  (concentration in Interaction Design and Web Development)
                </span>{" "}
                and over 6 years of design and development experience, I have
                fluency in the tools and skills needed to architect and deliver
                high-quality features. My goal is to bring your ideas to life in
                a digital space. From brand identity development to outlining
                intuitive user experiences and complete web development, I am
                passionate about building personalized products for clients.
                Given my degree in Computer Science and Design{" "}
                <span className="italic">
                  (concentration in Interaction Design and Web Development)
                </span>{" "}
                and over 6 years of design and development experience, I have
                fluency in the tools and skills needed to architect and deliver
                high-quality features. My goal is to bring your ideas to life in
                a digital space. From brand identity development to outlining
                intuitive user experiences and complete web development, I am
                passionate about building personalized products for clients.
                Given my degree in Computer Science and Design{" "}
                <span className="italic">
                  (concentration in Interaction Design and Web Development)
                </span>{" "}
                and over 6 years of design and development experience, I have
                fluency in the tools and skills needed to architect and deliver
                high-quality features.
              </Paragraph>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeepDive;
