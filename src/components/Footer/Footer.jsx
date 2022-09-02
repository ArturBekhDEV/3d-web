import React from "react";
import MailChimpForm from "../MailChimpForm/MailChimpForm";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../img/logo.jpeg";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailChimpForm />
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="">{AiFillGithub}</a>
              <a href="">{AiFillInstagram}</a>
              <a href="">{AiFillLinkedin}</a>
            </div>
            <p>Copyright 2022. All Right Reserved by Ocean-Motion</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
