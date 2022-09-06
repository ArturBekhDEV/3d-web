import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Spline from "@splinetool/react-spline";

const Contact = () => {
  const formInitialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialState);
  const [buttonSent, setButtonSent] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    console.log(typeof value);
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  console.log(formDetails);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonSent("Sending..");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    console.log(response);
    setButtonSent("Send");
    let result = await response.json();
    console.log(result);

    setFormDetails(formInitialState);
    if (result.code === 200) {
      setStatus({
        success: true,
        message: "Message sent succesfully!",
      });
    } else {
      setStatus({
        success: false,
        message: "Message didnt sent! Try Again!",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={12} xl={6} className="formsize">
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    defaultValue={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => {
                      onFormUpdate("firstName", e.target.value);
                    }}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    defaultValue={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="telephone"
                    defaultValue={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    defaultValue={formDetails.email}
                    placeholder="Email Adress"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <textarea
                    row="6"
                    defaultValue={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonSent}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
          <Col xs={5} md={6} xl={5}>
            <div className="object-contact">
              <Spline scene="https://prod.spline.design/fCZXGxIph6KTlJJn/scene.splinecode" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
