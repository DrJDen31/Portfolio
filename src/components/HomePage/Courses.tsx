import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";

function Courses() {
  return (
    <Tabs defaultActiveKey="taken" id="courses-tab" className="mb-3">
      <Tab eventKey="taken" title="Classes I've Taken">
        <Container>
          <Row>
            <Row>
              <Col>
                <p className="fw-bold">Computer Science:</p>
                <ul>
                  <li>Computer Science 1</li>
                  <li>Data Structures</li>
                  <li>Foundations of Computer Science</li>
                  <li>Principles of Software</li>
                  <li>Intro to Algorithms</li>
                </ul>
              </Col>
              <Col>
                <p className="fw-bold">Computer & Systems Engineering:</p>
                <ul>
                  <li>Computer Components & Operations</li>
                  <li>Embedded Control</li>
                  <li>
                    Computer Architecture, Networking, & Operating Systems
                  </li>
                  <li>Internetworking of Things</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="fw-bold">Electrical Engineering:</p>
                <ul>
                  <li>Intro to Electrical, Computer, & Systems Engineering</li>
                  <li>Electric Circuits</li>
                  <li>Intro to Electronics</li>
                </ul>
              </Col>
              <Col>
                <p className="fw-bold">Artificial Intelligence:</p>
                <ul>
                  <li>Extended Cognition</li>
                  <li>Intro to Cognitive Science</li>
                </ul>
              </Col>
            </Row>
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="prospective" title="Prospective Classes">
        <Container>
          <Row>
            <Col>
              <p className="fw-bold">This Semester (Fall 2024)</p>
              <ul>
                <li>Computer Hardware Design</li>
                <li>Microprocessor Systems</li>
                <li>Programming Languages</li>
                <li>Multidisciplinary Capstone</li>
                <li>Professional Development - Technical Issues & Solutions</li>
                <li>Professional Development - Leadership Competencies</li>
              </ul>
            </Col>
            <Col>
              <p className="fw-bold">Next Semester (Spring 2025)</p>
              <ul>
                <li>Signals & Systems</li>
                <li>Operating Systems</li>
                <li>Open Source Software</li>
                <li>Intelligent Virtual Agents</li>
                <li>Cognitive Modeling</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Tab>
      {/*
        <Tab eventKey="coterm" title="Coterm Plan">
          <Container>
            <Row>
              <Col>
                <p>Fall Semester (Fall 2025)</p>
                <ul>
                  <li></li>
                </ul>
              </Col>
              <Col>
                <p>Spring Semester (Spring 2026)</p>
                <ul>
                  <li></li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Tab>
      */}
    </Tabs>
  );
}

export default Courses;
