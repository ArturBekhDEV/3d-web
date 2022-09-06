import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import nextjsImage from "../../img/nextjs.png";
import gitImage from "../../img/git.png";
import cssImage from "../../img/css3.png";
import htmlImage from "../../img/html5.png";
import jsImage from "../../img/js.png";
import nodejsImage from "../../img/nodejs.png";
import reactImage from "../../img/reactjs.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="skill-media">
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={htmlImage} alt="Image1" />
                  <h5>HTML:5</h5>
                </div>
                <div className="item">
                  <img src={cssImage} alt="Image2" />
                  <h5>CCS</h5>
                </div>
                <div className="item">
                  <img src={jsImage} alt="Image3" />
                  <h5>Java Script</h5>
                </div>
                <div className="item">
                  <img src={reactImage} alt="Image4" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={nodejsImage} alt="Image4" />
                  <h5>Node JS</h5>
                </div>
                <div className="item">
                  <img src={gitImage} alt="Image4" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={nextjsImage} alt="Image4" />
                  <h5>Next JS</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default Skills;
