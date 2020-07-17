import React, { useState } from "react";
import { Link, TertiaryText, FlexColumn, BodyText } from "../styled/Styled";
import styled from "styled-components";
import { brandColor, brandBlack } from "../styled/Colors";
import LogoBlack from "../logo/LogoBlack.svg";
import "../styled/styles.css";
import { CSSTransition } from "react-transition-group";
import resume from "../resume/MckennaPoulosResume2020.pdf";

const Logo = styled.div``;

const AboutContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${brandBlack};
  color: white;
`;

const DescriptionContainer = styled.div`
  @media (max-width: 1650px) {
    margin: 0 140px 0 140px;
  }
  margin: 0 300px 0 300px;
`;
const TextContainer = styled.div`
  vertical-align: middle;
  display: inline-block;
  text-align: left !important;
  width: 40%;
  margin-top: 30vh;
`;
const LogoContainer = styled.div`
  margin-bottom: 50px;
`;
const ContactContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

const About = () => {
  return (
    <AboutContainer id={"about"}>
      <DescriptionContainer>
        <TextContainer>
          <LogoContainer>
            <img src={LogoBlack} width="150px" />
          </LogoContainer>
          <BodyText>
            <b>Mckenna Poulos</b> is a web developer based in Boston, MA. She
            specializes in React, Javascript, HTML and CSS. Currently, she is
            pursing bachelor of science in Computer Science and Design from
            Northeastern University, MA.{" "}
          </BodyText>
          <BodyText>
            Mckenna has a strong background in User Experience that includes
            prototyping, user testing and product design.
          </BodyText>
          <BodyText>
            Outside of work, Mckenna likes to collage, bake, play soccer, do
            yoga and roller-skate down the esplanade.{" "}
          </BodyText>
          <ContactContainer style={{ marginLeft: "-6px" }}>
            <Link
              href={resume}
              style={{ fontWeight: "500", marginTop: "35px", color: "white" }}
              target="_blank"
            >
              <span>&ensp;resume&ensp;</span>
            </Link>
            <Link
              href="https://github.com/mckennapoulos"
              style={{ fontWeight: "500", marginTop: "35px", color: "white" }}
              target="_blank"
            >
              <span>&ensp;github&ensp;</span>
            </Link>
          </ContactContainer>
        </TextContainer>
      </DescriptionContainer>
    </AboutContainer>
  );
};

export default About;
