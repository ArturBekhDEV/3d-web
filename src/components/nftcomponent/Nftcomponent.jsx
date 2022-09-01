import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard3D from "../ProjectCard3D/ProjectCard3D";

const Nftcomponent = () => {
  const arrInfo = [
    {
      title: "Sense.",
      description: "aASTROadventures series.",
      link3D: "https://prod.spline.design/tauTd6qIJinCrYJi/scene.splinecode",
    },
    {
      title: "Pain.",
      description: "aASTROadventures series.",
      link3D: "https://prod.spline.design/RKQeKZLIYiag3H-2/scene.splinecode",
    },
    {
      title: "Collapse.",
      description: "aASTROadventures series.",
      link3D: "https://prod.spline.design/OXNBHJ3AR6B9lBuw/scene.splinecode",
    },
  ];

  return (
    <section className="project" id="works">
      <h2>NFT Art-Works.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
        laudantium.
      </p>
      <div className="my-items-list">
        {arrInfo.map((item, index) => {
          return <ProjectCard3D key={index} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Nftcomponent;
