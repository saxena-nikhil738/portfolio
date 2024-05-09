import React from "react";
import { FaMedal } from "react-icons/fa";
import flipkart_5 from "./flipkart.pdf";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Achievements
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<FaMedal />}
            >
              <h3 className="vertical-timeline-element-title">
                Qualified 1st round of Flipkart GRiD 5.0
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Flipkart Hackethon
              </h4>
              <div className="home-buttons">
                <a
                  className="btn btn-cv"
                  href={flipkart_5}
                  download="Flipkart_Grid_5.0.pdf"
                >
                  Certificate
                </a>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<FaMedal />}
            >
              <h3 className="vertical-timeline-element-title">
                Won the hackathon in first place.
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Hackethon organized at NIT Warangal
              </h4>
            </VerticalTimelineElement>
            
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
