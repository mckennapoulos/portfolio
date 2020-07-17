import styled from "styled-components";
import { brandColor, brandBlack } from "./Colors";
import { NavLink } from "react-router-dom";

export const FlexColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const LogoContainer = styled.div`
  display: flex;

  position: fixed;
  z-index: 100;
  left: 0;
  max-width: 1160px;
  @media (max-width: 1650px) {
    margin: 50px 140px 0 50px;
  }
  margin: 50px 300px 0 150px;
`;

export const GlobalWrapper = styled.div``;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  width: inherit;
  height: auto;
  align-items: center;
  @media (max-width: 1650px) {
    margin: 0 140px 0 140px;
  }
  margin: 0 300px 0 300px;
`;
export const NumberText = styled.h1`
  font-family: "Tiempos Headline Bold";
  font-weight: normal;
  margin: 20px 50px 20px 0;
  font-size: 75px;
  width: 40px;
`;

export const Title = styled.h1`
  font-family: "Tiempos Headline Bold";
  font-weight: bold;
  margin-right: 10px;
  font-size: 42px;
`;
export const ImportantText = styled.h2`
  font-size: 20px;
  font-family: franklin-gothic-urw, sans-serif;
  font-weight: 500;
  font-style: normal;
  color: ${(props) => props.color};
`;

export const SecondaryText = styled.h2`
  font-size: 14px;
  font-family: franklin-gothic-urw, sans-serif;
  font-weight: 500;
  font-style: normal;
  color: ${(props) => props.color};
`;

export const TertiaryText = styled.h3`
  font-size: 14px;
  font-family: "franklin-gothic-urw", sans-serif;
  font-weight: 700;
  color: ${(props) => props.color};
`;

export const BodyText = styled.p`
  font-size: 14px;
  font-family: "franklin-gothic-urw", sans-serif;
  font-weight: 100;
  color: ${(props) => props.color};
  line-height: 20px;
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 14px;
  font-family: "franklin-gothic-urw", sans-serif;

  :hover {
    color: ${brandColor};
    cursor: pointer;
  }

  :visited {
    color: ${brandBlack};
  }
`;

export const RouterLink = styled(NavLink)`
  text-decoration: none;

  :hover {
    color: ${brandColor};
    cursor: pointer;
  }

  :visited {
    color: ${brandBlack};
  }
`;
export const ExternalLink = styled.a`
text-decoration: none;
  
:hover {
  color: ${brandColor};
  cursor: pointer;
}

:visited{
  color: ${brandBlack};
`;

export const NavText = styled.h3`
  font-size: 14px;
  font-family: "franklin-gothic-urw", sans-serif;
  font-weight: 500;
  z-index: 1 !important;
  color: ${(props) => props.color};

  ${(props) =>
    props.active &&
    `
    color: ${brandColor};
    text-decoration: line-through;
  `}

  :hover {
    color: #ff1178;
    cursor: pointer;
  }

  :visited {
    color: ${brandBlack};
  }
`;

// font-family: franklin-gothic-urw, sans-serif;
// font-weight: 500;
// font-style: normal;

export const Line = styled.div`
  width: ${(props) => props.width};
  height: 0px;
  border: solid 1px ${brandColor};
  margin: 0 35px;
`;
