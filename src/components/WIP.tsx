import { Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function WIP() {
  const navigate = useNavigate();
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
      <Row>
        <Col></Col>
        <Col md="auto" className="pt-2">
          <Button 
            variant="primary"
            onClick={() => navigate("/")}
          >
            Return Home
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
export default WIP;
