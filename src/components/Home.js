import React from "react";
import "../App.css";
import {
  GlobalWrapper,
  ContentWrapper,
  FlexColumn,
} from "../styled/Styled";
import { Portfolio } from "../components/Portfolio";
import Intro from "../components/Intro";
import Nav from "../components/Nav";
import About from "../components/About";
import { Carousel } from "../components/Carousel";
import Worklist from "../data/work.json";
import ProjectList from "../data/projects.json";

const Home = () => {
  return (
    <GlobalWrapper>
      <Nav />
      <ContentWrapper>
        <Intro />
        <FlexColumn>
          <Carousel projects={Worklist.worklist} />
          {/* { workList.map((card, i) => {
                            if (card.isFeatured) {
                                return (
                                <ProjectOverview
                                    key={i}
                                    index={i}
                                    style={{ margin: '50px'}}
                                    title={card.name}
                                    subtitle={card.subtitle}
                                    description={card.description}
                                    infoBits={card.infoBits}
                                    bgColor={card.bgColor}
                                    primaryColor={card.primaryColor}
                                    imagePath={card.image}
                                    isFeatured={card.isFeatured}
                                />
                                )
                            }
                        })} */}
        </FlexColumn>
        <Portfolio workList={Worklist.worklist} projectList={ProjectList.projects} />
      </ContentWrapper>
      <About />
    </GlobalWrapper>
  );
};

export default Home;
