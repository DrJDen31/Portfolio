import { Col, Container, Row } from "react-bootstrap";

import headshot from "../../content/images/IMG_9152 (1).jpg";

function Bio() {
  return (
    <Container className="p-2">
      <Row>
        <Col></Col>
        <Col md="auto">
          <img src={headshot} alt="Headshot" width="150" height="200"></img>
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
      <Row className="justify-content-md-center">
        <Col></Col>
        <Col md="auto" className="justify-content-center">
          <h4 className="text-black">Phone: 518-653-1540</h4>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Bio;
