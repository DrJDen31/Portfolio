import { Col, Container, Row } from "react-bootstrap";

import headshot from "../../content/images/IMG_9152 (1).jpg";
import grad from "../../content/images/50401733_00301_1189_XLarge.jpg";

function Bio() {
  return (
    <Container className="p-1 bg-primary">
      <Container className="p-1 bg-white">
        <Row>
          <Col></Col>
          <Col md="auto">
            <img src={headshot} alt="Headshot" width="150" height="200"></img>
          </Col>
          <Col></Col>
          <Col md="auto">
            <img src={grad} alt="Headshot" width="134" height="200"></img>
          </Col>
          <Col></Col>
        </Row>
        <Row className="pt-2">
          <Col></Col>
          <Col md="auto" className="justify-content-center">
            <h4 className="text-black">
              Email:{" "}
              <a href="mailto:tompkj3@rpi.edu" className="text-black">
                tompkj3@rpi.edu
              </a>{" "}
              or{" "}
              <a href="mailto:jadentompkins31@gmail.com" className="text-black">
                jadentompkins31@gmail.com
              </a>
            </h4>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Bio;
