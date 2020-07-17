import React, { useState } from "react";
import { Link, TertiaryText } from "../styled/Styled";
import styled from "styled-components";
import "../styled/styles.css";
import { NavLink } from "react-router-dom";

export const Card = styled.div`
  background-color: ${(props) => props.color};
  width: 500px;
  height: 345px;
  margin-bottom: 50px;

  :hover {
    &::after {
      content: "";
      width: -webkit-fill-available;
      height: inherit;
      float: right;
      position: absolute;
      right: -8px;
      bottom: -8px;
      z-index: -1;
      border: solid 1px ${(props) => props.color};
    }
  }
`;

// box-shadow: 4px 10px 5px #D6D6D6;

export const CardPreview = styled.img`
  width: ${(props) => (props.width ? props.width : "60%")};
  height: auto;
  position: absolute;
  bottom: -1px;
  right: 10px;
`;

export const ProjectCard = ({ bgColor, nameColor, name, imagePath, width }) => {
  return (
    <NavLink to={`/casestudy/${name}`} style={{ textDecoration: "none" }}>
      <Card color={bgColor} className="grow">
        <TertiaryText
          color={nameColor}
          style={{
            fontWeight: "500",
            fontSize: "16px",
            paddingTop: "70px",
            paddingBottom: "10px",
            marginLeft: "60px",
            postion: "relative",
          }}
        >
          {name}
        </TertiaryText>
        <div style={{ position: "relative", height: "66%", width: "inherit" }}>
          <CardPreview
            src={require("../image/" + imagePath)}
            id={imagePath}
            alt="projectimg"
            width={width}
          />
        </div>
      </Card>
    </NavLink>
  );
};
