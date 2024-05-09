import React from "react";
import "./Projects.css";
import food from "./food.jpg";
import employee from "./emp.jpg";
import complaint from "./comp.jpeg";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          During this current course, I have built many web development
          projects. These projects not only helped me gain valuable experience
          but also demonstrated my ability to deliver good-quality web
          solutions. Some of which are as follows-
        </p>
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img src={employee} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">Mongodb</span>
                <span className="card-detail-badge">MUI</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">Complaint Box</h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://complaint-box-v2.vercel.app/"
                  target="_blank"
                >
                  Live link
                </a>
              </div>
              <a
                className="git-hub-link"
                href="https://github.com/saxena-nikhil738/complaint-box-v2"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img src={food} alt="project2" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">Blog Application</h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://postblog-v2.vercel.app/"
                  target="_blank"
                >
                  Live link
                </a>
              </div>
              <a
                className="git-hub-link"
                href="https://github.com/saxena-nikhil738/postblog-v2/"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Machine Learning</span>
                <img src={complaint} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Python</span>
                <span className="card-detail-badge">Keras</span>
                <span className="card-detail-badge">TenserFlow</span>
                <span className="card-detail-badge">MNIST</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">Digit Recognition</h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/saxena-nikhil738/digit-recognition/"
                  target="_blank"
                >
                  View
                </a>
              </div>
              <a
                className="git-hub-link"
                href="https://github.com/saxena-nikhil738/digit-recognition/"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
