import React, { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { FlexColumn, FlexRow, Title, NavText } from "../styled/Styled";

export const Portfolio = ({ workList, projectList }) => {
  const [activeTab, setActiveTab] = useState("work");

  const currentTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <FlexColumn
      style={{ padding: "75px 0", maxWidth: "1160px" }}
      id="portfolio"
    >
      <FlexColumn>
        <Title>Portfolio</Title>
        <FlexRow
          style={{
            width: "275px",
            justifyContent: "space-between",
            margin: "35px 0 35px -11px",
          }}
        >
          <NavText
            id="work"
            onClick={() => {
              currentTab("work");
            }}
            active={activeTab === "work"}
          >
            <span>&ensp; work &ensp;</span>
          </NavText>
          <NavText
            id="project"
            onClick={() => {
              currentTab("projects");
            }}
            active={activeTab === "projects"}
          >
            <span>&ensp; projects &ensp;</span>
          </NavText>
          {/* <NavText 
                        id='inspo' 
                        onClick={() => {
                            currentTab('inspo')
                        }}
                        active={activeTab === 'inspo'}
                        ><span>&ensp; inspiration &ensp;</span></NavText> */}
        </FlexRow>
      </FlexColumn>
      <FlexRow style={{ justifyContent: "space-between", width: "inherit" }}>
        {activeTab === "work" &&
          workList.map((work, i) => {
            return (
              <ProjectCard
                key={i}
                name={work.name}
                bgColor={
                  work.info.projectCardColor
                    ? work.info.projectCardColor
                    : work.info.bgColor
                }
                nameColor={work.info.nameColor}
                imagePath={work.info.image}
                width={work.info.width ? work.info.width : null}
              />
            );
          })}
        {activeTab === "projects" &&
          projectList.map((work, i) => {
            return (
              <ProjectCard
                key={i}
                name={work.name}
                bgColor={
                  work.info.projectCardColor
                    ? work.info.projectCardColor
                    : work.info.bgColor
                }
                nameColor={work.info.nameColor}
                imagePath={work.info.image}
                width={work.info.width ? work.info.width : null}
              />
            );
          })}
        {activeTab === "inspo" && <div>nothing here yet</div>}
      </FlexRow>
    </FlexColumn>
  );
};
