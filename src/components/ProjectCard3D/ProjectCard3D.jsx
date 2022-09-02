import React from "react";
import { Col } from "react-bootstrap";
import Spline from "@splinetool/react-spline";

const ProjectCard3D = ({ title, description, link3D, link }) => {
  return (
    <Col>
      <div className="proj-imgbx">
        <a href={link}>
          <Spline scene={link3D} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  );
};

export default ProjectCard3D;
