import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import photo from "./photo.jpg";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={photo} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Hi, my name is Nikhil Saxena, I'm a Computer science student
                with a love for building apps. I am currently pursuing Master of
                Computer Applications at NIT, Warangal. I'm passionate about
                creating cool projects, and curious about to know new technologies.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
