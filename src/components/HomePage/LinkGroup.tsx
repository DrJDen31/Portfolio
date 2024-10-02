import { Col, Container, Row } from "react-bootstrap";

function LinkGroup() {
  return (
    <Container className="bg-secondary my-auto p-2">
      <Row className="justify-content-md-center">
        <Col xs></Col>
        <Col md="auto" className="justify-content-center">
          <h3 className="text-white">
            {
              <a href="https://github.com/DrJDen31" className="text-white">
                Github
              </a>
            }
          </h3>
        </Col>
        <Col xs></Col>
        <Col md="auto" className="justify-content-center">
          <h3 className="text-white">
            {
              <a
                href="https://www.linkedin.com/in/jaden-tompkins-074b17265/"
                className="text-white"
              >
                LinkedIn
              </a>
            }
          </h3>
        </Col>
        <Col xs></Col>
        <Col md="auto" className="justify-content-center">
          <h3 className="text-white">
            {
              <a href="mailto:tompkj3@rpi.edu" className="text-white">
                Email
              </a>
            }
          </h3>
        </Col>
        <Col xs></Col>
      </Row>
    </Container>
  );
}

export default LinkGroup;
