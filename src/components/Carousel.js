import React from "react";
import Slider from "infinite-react-carousel";
import { ProjectOverview } from "./ProjectOverview";
import { GlobalWrapper } from "../styled/Styled";


export const Carousel = ({ projects }) => (
    <Slider dots autoplay arrows={false} autoplaySpeed={5000}>
      {projects.map((card, i) => {
        if (card.info.isFeatured) {
          return (
            <div>
              <ProjectOverview
                key={i}
                index={i}
                style={{ margin: "50px" }}
                title={card.name}
                subtitle={card.info.subtitle}
                description={card.info.description}
                infoBits={card.info.infoBits}
                bgColor={card.info.bgColor}
                primaryColor={card.info.primaryColor}
                imagePath={card.info.image}
                isFeatured={card.info.isFeatured}
              />
            </div>
          );
        }
      })}
    </Slider>
);
