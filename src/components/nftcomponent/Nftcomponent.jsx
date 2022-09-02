import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard3D from "../ProjectCard3D/ProjectCard3D";

const Nftcomponent = () => {
  const arrInfo = [
    {
      title: "Sense.",
      description: "aASTROadventures series.",
      link3D: "https://prod.spline.design/tauTd6qIJinCrYJi/scene.splinecode",
      link: "https://opensea.io/assets/ethereum/0x3a10b673a043746633918797a32ec5432c7c2281/1634738079724733",
    },
    {
      title: "Pain.",
      description: "aASTROadventures series.",
      link3D: "https://prod.spline.design/OXNBHJ3AR6B9lBuw/scene.splinecode",
      link: "https://opensea.io/assets/ethereum/0x3a10b673a043746633918797a32ec5432c7c2281/1632310608638498",
    },
    {
      title: "Collapse.",
      description: "aASTROadventures series.",
      link3D: "https://prod.spline.design/RKQeKZLIYiag3H-2/scene.splinecode",
      link: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/109363574390239392834287033329924730476889134183197331643757345668203880120321",
    },
  ];

  return (
    <section className="project" id="works">
      <h2>NFT Art-Works.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
        laudantium.
      </p>
      <div className="test-div">
        <div className="my-items-list">
          {arrInfo.map((item, index) => {
            return <ProjectCard3D key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Nftcomponent;
