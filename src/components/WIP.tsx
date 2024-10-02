import { Col, Container, Row } from "react-bootstrap";

function WIP() {
  return (
    <Container className="p-4">
      <Row className="pt-4">
        <Col></Col>
        <Col md="auto">
          <h3>Sorry!</h3>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md="auto" className="pt-2">
          <p>
            This page is currently under construction. Please check again later!
          </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
export default WIP;
