import { Accordion, Col, Container, Row } from "react-bootstrap";

import Tag from "../../components/Tag";

function CapstonePage() {
  return (
    <Container className="my-4">
      <div>
        <h2>Multiplexer Module for Bioelectrochemical Experiments</h2>
        <h4 style={{ color: "gray" }} className="pb-2">
          Multidisciplinary Capstone
        </h4>
        <p style={{ marginTop: "0px" }}>Fall Semester, 2024</p>
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
            <Tag text="In Class" color="#80FF86" />
          </div>
          <div className="p-1">
            <Tag text="CHD" color="#80F9FF" />
          </div>
          <div className="p-1">
            <Tag text="Assembly" color="orange" />
          </div>
          <div className="p-1">
            <Tag text="SystemVerilog" color="orange" />
          </div>
        </div>
        <p>
          Description
          <ul>
            <li>Ex</li>
          </ul>
        </p>
        <Accordion alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>High Level Logic</Accordion.Header>
            <Accordion.Body>
              <p></p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Bumper Buttons</Accordion.Header>
            <Accordion.Body>
              <p></p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Ultrasonic Sensor</Accordion.Header>
            <Accordion.Body>
              <p></p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Wheel Speed</Accordion.Header>
            <Accordion.Body>
              <p></p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Row>
        <Col></Col>
        <Col md="auto">
          {/* <img
            src={"robotcar"}
            alt="RobotCar"
            width="285"
            height="315"
            className="mt-4"
          ></img> */}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md="auto">
          <p>Here is the car configured to traverse the maze.</p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default CapstonePage;
