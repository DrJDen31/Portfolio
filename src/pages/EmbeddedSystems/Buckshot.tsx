import { Accordion, Col, Container, Row } from "react-bootstrap";

import Tag from "../../components/Tag";
import br from "../../content/images/Microprocessor_Systems_Final_Report (1).pdf";
import gameplay from "../../content/images/buckshot.png";

function BuckshotPage() {
  return (
    <Container className="my-4">
      <div>
        <h2>Buckshot Roulette</h2>
        <h4 style={{ color: "gray" }} className="pb-2">
          Microprocessor Systems
        </h4>
        <p style={{ marginTop: "0px" }}>Spring Semester, 2025</p>
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
            <Tag text="Advanced Computer Graphics" color="#80F9FF" />
          </div>
          <div className="p-1">
            <Tag text="C++" color="orange" />
          </div>
        </div>
        <p>
          For the final project of Microprocessor Systems, my partner and I
          decided to recreate a simplified version of the game Buckshot Roulette
          on a microcontroller. Two microcontrollers were required for the
          multiplayer game, communicating through UART, with one acting as host
          and the other as client. Below is the full final report.
        </p>
      </div>
      <Row>
        <Col></Col>
        <Col md="auto">
          <a href={br} target="_blank" rel="noopener noreferrer">
            Final Report
          </a>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md="auto">
          <img
            src={gameplay}
            alt="Snow"
            width="519"
            height="696"
            className="mt-4"
          ></img>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default BuckshotPage;
