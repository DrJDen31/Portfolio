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
                  <li>Programming Languages (Haskell, Erlang, Prolog)</li>
                  <li>Operating Systems (C)</li>
                  <li>Advanced Computer Graphics (C++)</li>
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
                  <li>Computer Hardware Design (SystemVerilog)</li>
                  <li>Microprocessor Systems (C)</li>
                  <li>Multidisciplinary Capstone (Arduino, Explain, SPI)</li>
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
                  <li>Intelligent Virtual Agents (Python)</li>
                  <li>Cognitive Modeling (Python - Keras/TensorFlow)</li>
                </ul>
              </Col>
            </Row>
          </Row>
        </Container>
      </Tab>
      {
        <Tab eventKey="coterm" title="Coterm Plan">
          <Container>
            <Row>
              <Col>
                <p className="fw-bold" style={{ marginBottom: "0px" }}>
                  Senior Spring Semester (Spring 2025)
                </p>
                <ul>
                  <li>Advanced Computer Graphics</li>
                </ul>
              </Col>
              <Col>
                <p className="fw-bold" style={{ marginBottom: "0px" }}>
                  Fall Semester (Fall 2025)
                </p>
                <ul>
                  <li>
                    Advanced Materials, Metrology. & Equipment for Semiconductor
                    Manufacturing
                  </li>
                  <li>Advanced Computer Systems</li>
                  <li>Numerical Computing</li>
                  <li>Master's Project</li>
                </ul>
              </Col>
              <Col>
                <p className="fw-bold" style={{ marginBottom: "0px" }}>
                  Spring Semester (Spring 2026)
                </p>
                <ul>
                  <li>Computer Architecture Prototyping with FPGAs</li>
                  <li>Parallel Programming</li>
                  <li>Intro to Deep Learning</li>
                  <li>Master's Project</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Tab>
      }
    </Tabs>
  );
}

export default Courses;
