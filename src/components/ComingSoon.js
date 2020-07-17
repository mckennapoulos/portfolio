import React from "react";
import { Title } from "../styled/Styled";
import styled from "styled-components";

const Landing = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.bgcolor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ComingSoon = ({ bgColor }) => {
  return (
    <Landing bgcolor={bgColor}>
      <Title style={{ fontSize: "75px" }}>coming soon</Title>
    </Landing>
  );
};
