import {
  Container,
  Row,
  Col,
  Accordion,
  Tabs,
  Tab,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CoursesOverview() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="mt-4" style={{ border: "2px" }}>
        <Tabs
          defaultActiveKey="freshman"
          id="courses-overview-tab"
          className="mb-1"
        >
          <Tab eventKey="freshman" title="Freshman Year">
            <h2 className="mb-2">Freshman Year</h2>
            <Row>
              <Col>
                <div className="mb-4">
                  <h4 className="mb-2">Fall 2021</h4>
                  <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        [CSCI-1100] - Computer Science I
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>CSCI 1100 - Computer Science I</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            An introduction to computer programming algorithm
                            design and analysis. Additional topics include basic
                            computer organization; internal representation of
                            scalar and array data; use of top-down design and
                            subprograms to tackle complex problems; abstract
                            data types. Enrichment material as time allows.
                            Interdisciplinary case studies, numerical and
                            nonnumerical applications. Students who have passed
                            CSCI 1200 cannot register for this course.
                          </p>
                          <Button
                            variant="primary"
                            onClick={() =>
                              navigate("/work-experience/troy-tutors")
                            }
                            className="mt-2"
                          >
                            See Experience: Troy Tutors
                          </Button>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        [ECSE-1010] - Introduction to Electrical, Computer, &
                        Systems Engineering
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/work-experience/troy-tutors")
                          }
                          className="mt-2"
                        >
                          See Experience: Troy Tutors
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        [ENGR-1400] - Engineering Communications
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        [MATH-1010] - Calculus I
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        [IHSS-1700] - Songwriting Workshop
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
              <Col>
                <div className="mb-4">
                  <h4 className="mb-2">Spring 2022</h4>
                  <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        [CSCI-1200] - Data Structures
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/work-experience/troy-tutors")
                          }
                          className="mt-2"
                        >
                          See Experience: Troy Tutors
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        [ECSE-2610] - Computer Components and Operations
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/work-experience/troy-tutors")
                          }
                          className="mt-2"
                        >
                          See Experience: Troy Tutors
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        [MATH-1020] - Calculus II
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        [PHYS-1100] - Physics I
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="sophomore" title="Sophomore Year">
            <Row>
              <h2 className="mb-2">Sophomore Year</h2>
              <Col>
                <div className="mb-4">
                  <h4 className="mb-2">Fall 2022</h4>
                  <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        [CSCI-2200] - Foundations of Computer Science
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/work-experience/troy-tutors")
                          }
                          className="mt-2"
                        >
                          See Experience: Troy Tutors
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        [ENGR-2350] - Embedded Control
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/work-experience/troy-tutors")
                          }
                          className="mt-2"
                        >
                          See Experience: Troy Tutors
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/embedded-systems/embedded-controls-maze")
                          }
                          className="mt-2 mx-2"
                        >
                          See Experience: Car Maze
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        [MATH-2400] - Introduction to Differential Equations
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        [BIOL-1010] - Introduction to Biology
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        [BIOL-1015] - Introduction to Biology Lab
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() => navigate("/unreal-engine/genotype")}
                          className="mt-2 mx-2"
                        >
                          See Experience: Genotype
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
              <Col>
                <div className="mb-4">
                  <h4 className="mb-2">Spring 2023</h4>
                  <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        [MATH-2010] - Multivariable Calculus & Matrix Algebra
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        [ECSE-2010] - Electric Circuits
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/work-experience/troy-tutors")
                          }
                          className="mt-2"
                        >
                          See Experience: Troy Tutors
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/circuit-design/heartbeat-sensor")
                          }
                          className="mt-2 mx-2"
                        >
                          See Experience: Heartbeat Sensor
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        [PHYS-1200] - Physics II
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        [ECSE-2900] - Enrichment Seminar
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="junior" title="Junior Year">
            <Row>
              <h2 className="mb-2">Junior Year</h2>
              <Col>
                <div className="mb-4">
                  <h4 className="mb-2">Summer 2023</h4>
                  <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        [ECSE-2660] - Computer Architechture, Networks, &
                        Operating Systems
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/work-experience/troy-tutors")
                          }
                          className="mt-2"
                        >
                          See Experience: Troy Tutors
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        [ENGR-2050] - Introduction to Engineering Design
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/embedded-systems/ied-handy-helper")
                          }
                          className="mt-2"
                        >
                          See Experience: Handy Helper
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        [CSCI-2600] - Principles of Software
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/work-experience/troy-tutors")
                          }
                          className="mt-2"
                        >
                          See Experience: Troy Tutors
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        [ECSE-2500] - Engineering Probability
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        [COGS-4960] - Extended Cognition
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/unreal-engine/chinese-room")
                          }
                          className="mt-2"
                        >
                          See Experience: Chinese Room
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
              <Col>
                <div className="mb-4">
                  <h4 className="mb-2">Spring 2024</h4>
                  <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        [ECSE-2050] - Introduction to Electronics
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/work-experience/troy-tutors")
                          }
                          className="mt-2"
                        >
                          See Experience: Troy Tutors
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        [CSCI-2300] - Introduction to Algorithms
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/work-experience/troy-tutors")
                          }
                          className="mt-2"
                        >
                          See Experience: Troy Tutors
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        [COGS-2120] - Introduction to Cognitive Science
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/unreal-engine/npc-analysis")
                          }
                          className="mt-2"
                        >
                          See Experience: NPC Analysis
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        [PSYC-1200] - Introduction to Psychology
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        [ECSE-4660] - Internetworking of Things
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/internet-of-things/verified-clock-in")
                          }
                          className="mt-2"
                        >
                          See Experience: Verified Clock In
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="senior" title="Senior Year">
            <Row>
              <h2 className="mb-2">Senior Year</h2>
              <Col>
                <div className="mb-4">
                  <h4 className="mb-2">Fall 2024</h4>
                  <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        [ENGR-4010] - Professional Development: Leadership
                        Competencies
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        [STSO-4100] - Professional Development: Technical Issues
                        & Solutions
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        [ECSE-4900] - Multidisciplinary Capstone Design
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        [ECSE-4770] - Computer Hardware Design
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        [ECSE-4790] - Microprocessor Systems
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        [CSCI-4430] - Programming Languages
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
              <Col>
                <div className="mb-4">
                  <h4 className="mb-2">Spring 2025</h4>
                  <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        [ECSE-2410] - Signals & Systems
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        [COGS-4640] - Intelligent Virtual Agents
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        [COGS-4210] - Cognitive Modeling
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        [CSCI-4470] - Open Source Software
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        [CSCI-4210] - Operating Systems
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            Description
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
}

export default CoursesOverview;
