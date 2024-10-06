import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";

function Courses() {
  return (
    <Tabs defaultActiveKey="taken" id="courses-tab" className="mb-3">
      <Tab eventKey="taken" title="Key Classes I've Taken">
        <Container>
          <Row>
            <Row>
              <Col>
                <p className="fw-bold" style={{ marginBottom: "0px" }}>
                  Computer Science:
                </p>
                <ul>
                  <li>Computer Science 1 [CS 1] (Python)</li>
                  <li>Data Structures (C++)</li>
                  <li>Foundations of Computer Science [FOCS]</li>
                  <li>Principles of Software (Java)</li>
                  <li>Intro to Algorithms</li>
                </ul>
              </Col>
              <Col>
                <p className="fw-bold" style={{ marginBottom: "0px" }}>
                  Computer & Systems Engineering:
                </p>
                <ul>
                  <li>Computer Components & Operations [CoCO]</li>
                  <li>Embedded Control (C)</li>
                  <li>
                    Computer Architecture, Networking, & Operating Systems
                    [CANOS]
                  </li>
                  <li>Internetworking of Things [IoT]</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="fw-bold" style={{ marginBottom: "0px" }}>
                  Electrical Engineering:
                </p>
                <ul>
                  <li>
                    Intro to Electrical, Computer, & Systems Engineering [ECSE]
                  </li>
                  <li>Electric Circuits</li>
                  <li>Intro to Electronics</li>
                </ul>
              </Col>
              <Col>
                <p className="fw-bold" style={{ marginBottom: "0px" }}>
                  Artificial Intelligence:
                </p>
                <ul>
                  <li>Extended Cognition (C++)</li>
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
              <p className="fw-bold" style={{ marginBottom: "0px" }}>
                This Semester (Fall 2024)
              </p>
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
              <p className="fw-bold" style={{ marginBottom: "0px" }}>
                Next Semester (Spring 2025)
              </p>
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
