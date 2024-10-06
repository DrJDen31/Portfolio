import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";

function Skills() {
  return (
    <div style={{ height: "350px" }}>
      <Tabs defaultActiveKey="general" id="courses-tab" className="mb-3">
        <Tab eventKey="general" title="General Skills">
          <Container>
            <Row>
              <Col>
                <h6 style={{ marginBottom: "0px" }}>Miscellaneous:</h6>
                <ul>
                  <li>CAN (J1939 and CANOpen)</li>
                  <li>Lambda Calculus</li>
                  <li>Algorithm Design & Analysis</li>
                  <li>Unreal Engine AI (NPC) Tools</li>
                  <li>Mobile App Development</li>
                  <li>Web Development (React)</li>
                </ul>
              </Col>
              <Col>
                <h6 style={{ marginBottom: "0px" }}>Programming:</h6>
                <ul>
                  <li>Python</li>
                  <li>C/C++</li>
                  <li>Java</li>
                  <li>Bash</li>
                  <li>JavaScript/TypeScript (React/React Native)</li>
                  <li>SystemVerilog</li>
                  <li>VHDL</li>
                  <li>Assembly</li>
                  <li>Blueprints Visual Scripting Language</li>
                  <li>Git/GitHub</li>
                  <li>Haskell</li>
                </ul>
              </Col>
              <Col>
                <h6 style={{ marginBottom: "0px" }}>Software:</h6>
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
                <h6 style={{ marginBottom: "0px" }}>Embedded:</h6>
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
                <h6 style={{ marginBottom: "0px" }}>
                  Circuit Design & Analysis:
                </h6>
                <ul>
                  <li>Breadboard Circuit Design & Analysis</li>
                  <li>Waveform Analysis through Scoping</li>
                  <li>Filter Design</li>
                  <li>Boolean Logic</li>
                  <li>Differential Equations</li>
                </ul>
              </Col>
              <Col>
                <h6 style={{ marginBottom: "0px" }}>Internet of Things:</h6>
                <ul>
                  <li>HTTP</li>
                  <li>Zigbee</li>
                  <li>TShark</li>
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
