import { Accordion, Col, Container, Row } from "react-bootstrap";

import Tag from "../../components/Tag";

import l6 from "../../content/images/chd_lab6.png";
import l7 from "../../content/images/chd_lab7.png";
import l8 from "../../content/images/chd_lab8.png";
import l9 from "../../content/images/chd_lab9.png";
import a from "../../content/images/chd_assembly.png";
import v from "../../content/images/chd_valid_zoom.png";

function CHDPage() {
  return (
    <Container className="my-4">
      <div>
        <h2>RISC-V Processor Design</h2>
        <h4 style={{ color: "gray" }} className="pb-2">
          Computer Hardware Design
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
          Over the course of a few labs throughout the semester, SystemVerilog
          was used to build up a RISC-V processor. Initial designs were
          provided, alongside some new requirements. From there, a diagram was
          constructed with the required new control signals, and that diagram
          was then implemented in code. The processors were simulated in Quartus
          Prime and were validated using ModelSim by passing in binary Assembly
          code and evaluating the resulting signals.
        </p>
        <Accordion alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Single-Cycle Processor</Accordion.Header>
            <Accordion.Body>
              <p>
                The first step in the process involved the implementation of a
                single cycle RISC-V processor. Below is the diagram.
              </p>
              <Row>
                <Col>
                  <img
                    src={l6}
                    alt="Lab 6"
                    width="984"
                    height="550"
                    className="mt-4"
                  ></img>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Multicycle Controller</Accordion.Header>
            <Accordion.Body>
              <p>
                Next the controller for a multicycle controller was implemented.
                This was done through a state machine that dictated the flow of
                the processor. Below is the state machine layout
              </p>
              <Row>
                <Col>
                  <img
                    src={l7}
                    alt="Lab 7"
                    width="888"
                    height="365"
                    className="mt-4"
                  ></img>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Multicycle Processor</Accordion.Header>
            <Accordion.Body>
              <p>
                Then, the rest of the processor that interfaced with the
                controller was implemented. Below is a quick sketch of all
                control signal routing.
              </p>
              <Row>
                <Col>
                  <img
                    src={l8}
                    alt="Lab 8"
                    width="950"
                    height="949"
                    className="mt-4"
                  ></img>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Pipelined Processor</Accordion.Header>
            <Accordion.Body>
              <p>
                Finally, a pipelined processor was implemented, containing a
                hazard unit. Below is the final diagram.
              </p>
              <Row>
                <Col>
                  <img
                    src={l9}
                    alt="Lab 9"
                    width="994"
                    height="610"
                    className="mt-4"
                  ></img>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Assembly Validation</Accordion.Header>
            <Accordion.Body>
              <p>
                The processors were validated by analyzing the waveforms of the
                control and data signals. Below is the assembly code used to
                verify new instructions added to the pipelined processor. The
                line inserted at the red arrow uses the new instruction, lui
                (load upper immediate), to modify a value that will be stored
                into a data register.
              </p>
              <Row>
                <Col>
                  <img
                    src={a}
                    alt="Assembly"
                    width="865"
                    height="670"
                    className="pb-8"
                  ></img>
                </Col>
              </Row>
              <p className="mt-4">
                This register can then be checked to validate the behavior:
              </p>
              <Row>
                <Col>
                  <img src={v} alt="Validation" width="573" height="142"></img>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </Container>
  );
}

export default CHDPage;
