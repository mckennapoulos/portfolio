import React from "react";
import {
  FlexRow,
  ImportantText,
  BodyText,
  ExternalLink,
  FlexColumn,
  Link,
  GlobalWrapper,
  NumberText,
  ContentWrapper,
  NavText,
} from "../styled/Styled";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ProjectOverview } from "./ProjectOverview";
import "../styled/styles.css";
import { ComingSoon } from "./ComingSoon";

import Worklist from "../data/work.json";
import ProjectList from "../data/projects.json";
import { NavContainer } from "./Nav";

const Landing = styled.div`
  background-color: ${(props) => props.bg};
  width: 100%;
  height: 100vh;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SectionContainer = styled.div`
  background-color: ${(props) => props.bg};
  width: 100%;
  height: 85vh;
  z-index: -1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.img`
  width: ${(props) => (props.isMobile ? "154px" : "370px")};
  height: ${(props) => (props.isMobile ? "335px" : "200px")};
`;

const ItemsContainer = styled.div`
  display: flex;
  width: inherit;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  width: 335px;
`;
const ProductLink = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const CaseStudy = (props) => {
  const { name } = props.match.params;
  const titleprop = name;

  const projects = Worklist.worklist.concat(ProjectList.projects);
  let project;
  let projectName;
  projects.map((card, i) => {
    if (card.name === titleprop) {
      project = card.info;
      projectName = card.name;
    }
  });

  return (
    <GlobalWrapper>
      <NavContainer style={{ flexDirection: "row-reverse" }}>
        <NavText>
          <NavLink to="/#portfolio" className="navlink">
            <span>&ensp;back to portfolio&ensp;</span>
          </NavLink>
        </NavText>
      </NavContainer>
      {project.isComingSoon ? (
        <ComingSoon bgColor={project.bgColor} />
      ) : (
        <GlobalWrapper>
          <FlexRow>
            <Landing bg={project.bgColor}>
              <ProjectOverview
                style={{ margin: "50px" }}
                title={projectName}
                subtitle={project.subtitle}
                description={project.description}
                infoBits={project.infoBits}
                bgColor={project.bgColor}
                primaryColor={project.primaryColor}
                imagePath={project.image}
                spacing={"100px"}
                isFeatured={false}
                isCaseStudy={true}
                role={project.role}
                team={project.team}
              />
              <section id="section04" class="demo">
                <a href="#section05">
                  <span></span>scroll
                </a>
              </section>
            </Landing>
          </FlexRow>
          <FlexColumn>
            <ContentWrapper>
              <SectionContainer>
                <FlexColumn>
                  <BodyText
                    style={{ fontWeight: "700", color: project.primaryColor }}
                  >
                    the problem
                  </BodyText>
                  <ImportantText style={{ marginBottom: "50px" }}>
                    {project.problemStatement}
                  </ImportantText>
                  <BodyText
                    style={{ fontWeight: "700", color: project.primaryColor }}
                  >
                    the solution
                  </BodyText>
                  <ImportantText>{project.solutionStatement}</ImportantText>
                </FlexColumn>
              </SectionContainer>
            </ContentWrapper>
            <SectionContainer bg={project.bgColor}>
              <ContentWrapper>
                <BodyText
                  style={{
                    fontWeight: "700",
                    marginBottom: "50px",
                    color: project.primaryColor,
                  }}
                >
                  key discoveries
                </BodyText>
                <ItemsContainer>
                  {project.keyContent.map((content, i) => {
                    return (
                      <ContentContainer>
                        <ImageContainer
                          src={require("../image/" + content.image)}
                          id={content.image}
                          alt="keyDiscoveryImage"
                          isMobile={project.isMobile}
                        />
                        <ImportantText style={{ marginBottom: "20px" }}>
                          {content.title}
                        </ImportantText>
                        <BodyText width="40px">{content.description}</BodyText>
                      </ContentContainer>
                    );
                  })}
                </ItemsContainer>
              </ContentWrapper>
            </SectionContainer>
            <ContentWrapper>
              <SectionContainer>
                <FlexColumn>
                  <BodyText
                    style={{
                      fontWeight: "700",
                      marginBottom: "50px",
                      color: project.primaryColor,
                    }}
                  >
                    takeaways
                  </BodyText>
                  {project.takeaways.map((takeaway, i) => {
                    return (
                      <FlexRow
                        style={{ alignItems: "center", width: "inherit" }}
                      >
                        <NumberText>{i + 1}</NumberText>
                        <ImportantText style={{ width: "90%" }}>
                          {takeaway.statement}
                        </ImportantText>
                      </FlexRow>
                    );
                  })}
                  {(project.type == "SITE" || project.type == "PROTOTYPE") && (
                    <ProductLink>
                      <ExternalLink href={project.productLink} target="_blank">
                        <NavText>
                          <ImportantText>
                            <span>VIEW {project.type}</span>
                          </ImportantText>
                        </NavText>
                      </ExternalLink>
                    </ProductLink>
                  )}
                </FlexColumn>
              </SectionContainer>
            </ContentWrapper>
          </FlexColumn>
        </GlobalWrapper>
      )}
    </GlobalWrapper>
  );
};
