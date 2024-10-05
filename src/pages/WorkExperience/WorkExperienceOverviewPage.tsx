import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CardImage from "../../components/CardImage";
import { useNavigate } from "react-router-dom";

import moogpic from "../../content/images/IMG_7301 (1).jpg";
import troytutors from "../../content/images/tt.png";

function WorkExperienceOverviewPage() {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        <h3 className="my-2">Work Experience</h3>
        <Row>
          <Col></Col>
          <Col md="auto">
            <Card className="mt-2" style={{ width: "18rem", height: "24rem" }}>
              <CardImage source={moogpic} />
              <Card.Body>
                <Card.Title>Moog</Card.Title>
                <Card.Text>
                  Fall 2023 Engineering Internship in Buffalo, NY as a part of
                  the ZQuip team for Moog Construction
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigate("/work-experience/moog")}
                >
                  More Information
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs></Col>
          <Col md="auto">
            <Card className="mt-2" style={{ width: "18rem", height: "24rem" }}>
              <CardImage source={troytutors} />
              <Card.Body>
                <Card.Title>Troy Tutors</Card.Title>
                <Card.Text>
                  Part time tutor through Troy Tutors in CS and CSE courses,
                  such as Data Structures and CANOS
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigate("/work-experience/troy-tutors")}
                >
                  More Info
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </div>
    </Container>
  );
}

export default WorkExperienceOverviewPage;
