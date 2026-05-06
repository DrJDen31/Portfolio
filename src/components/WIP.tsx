import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function WIP() {
  const navigate = useNavigate();
  return (
    <Container className="p-4">
      <Row className="pt-4">
        <Col></Col>
        <Col md="auto">
          <h3>Lab note queued</h3>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md="auto" className="pt-2">
          <p>
            This project is being kept as an archive candidate until there is
            enough useful context to turn it into a proper technical note.
          </p>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md="auto" className="pt-2">
          <Button variant="primary" onClick={() => navigate("/projects")}>
            View Project Archive
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default WIP;
