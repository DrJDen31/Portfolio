import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";

function Skills() {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col md="auto">
          <p>Programming:</p>
          <ul>
            <li>Python</li>
            <li>C/C++</li>
            <li>Java</li>
            <li>Bash</li>
            <li>JavaScript/TypeScript (React/React Native)</li>
            <li>SystemVerilog</li>
            <li>Assembly</li>
          </ul>
        </Col>
        <Col xs></Col>
        <Col md="auto">
          <p>Software:</p>
          <ul>
            <li>Unreal Engine</li>
            <li>Blender</li>
            <li>LTSpice</li>
            <li>MATLAB</li>
            <li>Codesys</li>
            <li>FL Studio</li>
          </ul>
        </Col>
        <Col xs></Col>
        <Col md="auto">
          <p>Technical:</p>
          <ul>
            <li>Breadboard Circuit Design</li>
            <li>CAN (J1939 and CANOpen)</li>
          </ul>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Skills;
