import React from "react";
import {
  FlexRow,
  Title,
  SecondaryText,
  BodyText,
  TertiaryText,
  FlexColumn,
  Link,
  NavText,
} from "../styled/Styled";
import styled from "styled-components";
import { brandBlack } from "../styled/Colors";
import { NavLink } from "react-router-dom";

const Preview = styled.div`
  width: 845px;
  height: 385px;
  background-color: ${(props) => props.bgColor};
  z-index: -1;
  position: relative;
`;

const ProjectTag = styled.div`
  margin-bottom: 25px;
`;

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  position: relative;
  justify-content: space-between;
  height: inherit;
`;

const ProjectImage = styled.div`
  z-index: 1;
  width: auto;
  height: 350px;
  float: right;
  position: relative;
  right: 40px;
  top: 75px;
  box-shadow: 2px 5px 5px #d6d6d6;

  &::after {
    content: "";
    width: -webkit-fill-available;
    height: 350px;
    float: right;
    position: absolute;
    left: -17px;
    top: -18px;
    z-index: -1;
    border: solid 1px ${(props) => props.color};
  }
`;
const InfoBitContainer = styled.div`
  display: flex;
  width: 325px;
  justify-content: space-between;
`;

const InfoBit = styled.h3`
  font-size: 12px;
  font-family: "franklin-gothic-urw", sans-serif;
  font-weight: 700;
  color: ${(props) => props.color};
  border: 0.5px solid ${brandBlack};
  padding: 5px 7px;
`;

export const ProjectOverview = ({
  index,
  title,
  subtitle,
  description,
  bgColor,
  primaryColor,
  imagePath,
  isFeatured,
  spacing,
  isCaseStudy,
  infoBits,
  team,
  role,
}) => {
  return (
    <FlexRow
      id={"featured" + index}
      style={{
        margin: "50px 0 200px 0",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProjectDescription style={{ width: "300px" }}>
        {isFeatured && (
          <ProjectTag>
            <TertiaryText style={{ fontWeight: "500" }} className="featured">
              FEATURED
            </TertiaryText>
          </ProjectTag>
        )}
        <FlexColumn style={{ marginTop: isFeatured ? "0px" : spacing }}>
          <Title style={{ width: "450px", marginBottom: "0" }}>{title}</Title>
          <SecondaryText color={primaryColor} style={{ margin: "0 0 10px 0" }}>
            {subtitle}
          </SecondaryText>
          <BodyText style={{ width: "385px" }}>{description}</BodyText>
          {!isCaseStudy && (
            <NavLink
              to={`/casestudy/${title}`}
              color={brandBlack}
              style={{
                fontWeight: "500",
                marginTop: "35px",
                width: "max-content",
                marginLeft: "-6px",
                textDecoration: "none",
              }}
            >
              <NavText>
                <span>&ensp;view case study&ensp;</span>
              </NavText>
            </NavLink>
          )}
          {isCaseStudy && (
            <FlexColumn>
              <BodyText style={{ margin: "0 0 10px 0" }}>
                <b>team:</b> {team}
              </BodyText>
              <BodyText style={{ margin: "0 0 10px 0" }}>
                <b>role:</b> {role}
              </BodyText>

              <InfoBitContainer>
                {infoBits.map((infoBit, i) => {
                  return <InfoBit>{infoBit}</InfoBit>;
                })}
              </InfoBitContainer>
            </FlexColumn>
          )}
        </FlexColumn>
      </ProjectDescription>
      <Preview bgColor={bgColor} color={primaryColor}>
        <ProjectImage color={primaryColor}>
          <img
            src={require("../image/" + imagePath)}
            alt="projectimg"
            style={{
              width: "inherit",
              height: "inherit",
              objectFit: "cover",
              objectPosition: "left",
            }}
          />
        </ProjectImage>
      </Preview>
    </FlexRow>
  );
};
