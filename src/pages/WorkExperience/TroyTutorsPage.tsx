import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";

function TroyTutorsPage() {
  const navigate = useNavigate();

  return (
    <Container className="mb-4">
      <div>
        <h2>Troy Tutors</h2>
        <h4 style={{ color: "gray" }} className="pb-2">
          Tutor
        </h4>
        <p>Part Time: August 2024 - Present</p>
        <p>
          This semester I started working part time for{" "}
          <a href="https://www.troytutors.com/">Troy Tutors.</a> I've always
          thought of myself as a good teacher, helping classmates to understand
          the material throughout high school and even some in college. I've
          thought some about teaching eventually, so this is a good opportunity
          to try it out small scale and in between classes.
        </p>
        <p>
          For many of my classes, I performed well academically and felt I have
          a good grip of the material, so I am currently offering tutoring for
          the following classes:
          <ul>
            <li>
              Computer Science:
              <ul>
                <li>Computer Science 1 (Python)</li>
                <li>Data Structures (C++)</li>
                <li>Foundations of Computer Science (Theoretical)</li>
                <li>Principles of Software (Java)</li>
                <li>Intro to Algorithms (Theoretical)</li>
              </ul>
            </li>
            <li>
              Electrical, Computer, & Systems Engineering [ECSE]:
              <ul>
                <li>Intro to ECSE</li>
                <li>Electric Circuits</li>
                <li>Intro to Electronics</li>
                <li>Embedded Control (C)</li>
                <li>Computer Components & Operations [CoCO]</li>
                <li>
                  Computer Architecture, Networks, & Operating Systems [CANOS]
                </li>
              </ul>
            </li>
          </ul>
          I intend on remaining a tutor through the rest of my senior year, and
          I will consider tutoring beyond that depending on my schedule.
        </p>
      </div>
      <Row>
        <Col></Col>
        <Col md="auto">
          <Button
            variant="primary"
            onClick={() => navigate("/work-experience/overview")}
            className="mt-2"
          >
            See All Work Experience
          </Button>
        </Col>
        <Col md="auto">
          <Button
            variant="primary"
            onClick={() => navigate("/courses-overview")}
            className="mt-2"
          >
            See Overview of All Courses
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default TroyTutorsPage;
