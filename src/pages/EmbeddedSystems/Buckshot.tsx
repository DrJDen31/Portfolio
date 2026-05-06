import { Accordion, Col, Container, Row } from "react-bootstrap";

import Tag from "../../components/Tag";
import RelatedProjects from "../../components/RelatedProjects";
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
        <h6 className="mt-3 mb-1">Problem</h6>
        <p>
          Recreate the turn-based structure of Buckshot Roulette on constrained
          embedded hardware while supporting two-player interaction.
        </p>
        <h6 className="mt-3 mb-1">Implementation</h6>
        <p>
          My partner and I used two microcontrollers, with one acting as host
          and the other as client. The devices communicated through UART while
          the game logic coordinated player state, item behavior, and display
          updates.
        </p>
        <h6 className="mt-3 mb-1">Result</h6>
        <p>
          The project became a compact embedded systems case study around
          protocol design, hardware constraints, and translating a desktop game
          loop into firmware.
        </p>
      </div>
      <Row>
        <Col></Col>
        <Col md="auto">
          <a href={br} target="_blank" rel="noopener noreferrer">
            Final Report PDF
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
      <RelatedProjects currentSlug="buckshot" />
    </Container>
  );
}

export default BuckshotPage;
