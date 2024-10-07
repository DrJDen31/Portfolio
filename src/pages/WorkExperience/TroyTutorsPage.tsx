import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import Tag from "../../components/Tag";

function TroyTutorsPage() {
  const navigate = useNavigate();

  return (
    <Container className="mb-4">
      <div>
        <h2>Troy Tutors</h2>
        <h4 style={{ color: "gray" }} className="pb-2">
          Tutor
        </h4>
        <p style={{ marginTop: "0px" }}>Part Time: August 2024 - Present</p>
        <div
          style={{
            display: "flex",
            flex: "none",
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: "8px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "#AAAAAA",
            borderRadius: "5px",
            width: "fit-content",
          }}
        >
          <div className="p-1">
            <Tag text="Work" color="#80FF86" />
          </div>
          <div className="p-1">
            <Tag text="Data Structures" color="#80F9FF" />
          </div>
          <div className="p-1">
            <Tag text="CANOS" color="#80F9FF" />
          </div>
        </div>
        <p>
          This semester I started working part time for{" "}
          <a href="https://www.troytutors.com/">Troy Tutors.</a> I've always had
          some experience teaching, helping classmates to understand the
          material throughout high school and even some in college. This is a
          good opportunity to try it out small scale and in between classes as
          well as keep the skills I learned from each class fresh in my memory.
        </p>
        <p>
          I initially applied as a CANOS tutor, but expanded to the following
          classes after getting hired:
          <ul>
            <li>
              Computer Science:
              <ul>
                <li>
                  <HashLink to="/courses-overview#computerScience">
                    Computer Science 1 (Python)
                  </HashLink>
                </li>
                <li>Data Structures (C++)</li>
                <li>Foundations of Computer Science</li>
                <li>Principles of Software (Java)</li>
                <li>Intro to Algorithms</li>
              </ul>
            </li>
            <li>
              Electrical, Computer, & Systems Engineering [ECSE]:
              <ul>
                <li>Intro to ECSE</li>
                <li>Electric Circuits</li>
                <li>Intro to Electronics</li>
                <li>Embedded Control (C)</li>
                <li>Computer Components & Operations</li>
                <li>
                  <HashLink to="/courses-overview#CANOS">
                    Computer Architecture, Networks, & Operating Systems [CANOS]
                  </HashLink>
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
