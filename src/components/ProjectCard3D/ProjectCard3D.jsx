import React from "react";
import Spline from "@splinetool/react-spline";

const ProjectCard3D = ({ title, description, link3D, link }) => {
  return (
    <div className="proj-imgbx">
      <div>
        <a href={link}></a>
        <Spline scene={link3D} />
      </div>
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default ProjectCard3D;
