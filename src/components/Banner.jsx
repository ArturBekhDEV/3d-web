import Spline from "@splinetool/react-spline";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web-developer", "3d-designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="items-test">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Hello from nowhere!</span>
            <h1>
              <span className="wrap">I'm a {text}</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              fuga.
            </p>
            <a href="#connect">
              <button
                onClick={() => {
                  console.log("connect me!");
                }}
                className="vvd"
              >
                Let's Connect!
              </button>
            </a>
          </Col>
          <Col xs={5} md={6} xl={5}>
            <div className="object">
              <Spline scene="https://prod.spline.design/KKoTrCA0O4mcYlrG/scene.splinecode" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
