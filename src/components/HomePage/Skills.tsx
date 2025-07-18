import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";

function Skills() {
  return (
    <div>
      <Tabs defaultActiveKey="general" id="courses-tab" className="mb-3">
        <Tab eventKey="general" title="General Skills">
          <Container>
            <Row>
              <Col>
                <p className="fw-bold" style={{ marginBottom: "0px" }}>
                  Miscellaneous:
                </p>
                <ul>
                  <li>CAN (J1939 and CANOpen)</li>
                  <li>Lambda Calculus</li>
                  <li>Algorithm Design & Analysis</li>
                  <li>Unreal Engine AI (NPC) Tools</li>
                  <li>Mobile App Development (React Native)</li>
                  <li>Web Development (React)</li>
                  <li>Docker</li>
                  <li>Grafana</li>
                </ul>
              </Col>
              <Col>
                <p className="fw-bold" style={{ marginBottom: "0px" }}>
                  Programming:
                </p>
                <ul>
                  <li>Python</li>
                  <li>C/C++</li>
                  <li>Go</li>
                  <li>Java</li>
                  <li>Bash</li>
                  <li>JavaScript/TypeScript (React/React Native)</li>
                  <li>SystemVerilog</li>
                  <li>VHDL</li>
                  <li>Assembly</li>
                  <li>Blueprints Visual Scripting Language</li>
                  <li>Git/GitHub</li>
                  <li>MySQL</li>
                  <li>Haskell</li>
                  <li>Erlang</li>
                  <li>Prolog</li>
                </ul>
              </Col>
              <Col>
                <p className="fw-bold" style={{ marginBottom: "0px" }}>
                  Software:
                </p>
                <ul>
                  <li>Unreal Engine</li>
                  <li>Blender</li>
                  <li>LTSpice</li>
                  <li>MATLAB</li>
                  <li>CODESYS</li>
                  <li>FL Studio</li>
                  <li>Siemens NX</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="specific" title="By Topic">
          <Container>
            <Row>
              <Col>
                <p className="fw-bold" style={{ marginBottom: "0px" }}>
                  Embedded:
                </p>
                <ul>
                  <li>Embedded Systems</li>
                  <li>Timers</li>
                  <li>Encoders</li>
                  <li>I2C</li>
                  <li>UART</li>
                  <li>SPI</li>
                  <li>GPIO</li>
                  <li>ADC</li>
                  <li>Interrupts</li>
                </ul>
              </Col>
              <Col>
                <p className="fw-bold" style={{ marginBottom: "0px" }}>
                  Circuit Design & Analysis:
                </p>
                <ul>
                  <li>Breadboard Circuit Design & Analysis</li>
                  <li>Waveform Analysis through Scoping</li>
                  <li>Filter Design</li>
                  <li>Boolean Logic</li>
                  <li>Differential Equations</li>
                </ul>
              </Col>
              <Col>
                <p className="fw-bold" style={{ marginBottom: "0px" }}>
                  Internet of Things:
                </p>
                <ul>
                  <li>HTTP</li>
                  <li>Zigbee</li>
                  <li>TShark</li>
                  <li>TCP</li>
                  <li>UDP</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Skills;
