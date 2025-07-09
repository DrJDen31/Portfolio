import { Accordion, Col, Container, Row } from "react-bootstrap";

import Tag from "../../components/Tag";
import acg from "../../content/images/ACG_Snow_Final_Project_Report (1).pdf";
import snow from "../../content/images/sparkle.png";

function ACGPage() {
  return (
    <Container className="my-4">
      <div>
        <h2>Realistic Snow Rendering and Simulation</h2>
        <h4 style={{ color: "gray" }} className="pb-2">
          Advanced Computer Graphics
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
          For the final project of Advanced Computer Graphics my partner and I
          decided to look into the rendering and simulation of realistic snow
          (or at least a few key visual and physical effects). This is done in
          C++ and OpenGL, with most of the rendering done through Volumetric
          Bidirection Path Tracing and using MPM for the physical simulation.
        </p>
      </div>
      <Row>
        <Col></Col>
        <Col md="auto">
          <a href={acg} target="_blank" rel="noopener noreferrer">
            Final Report
          </a>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md="auto">
          <img
            src={snow}
            alt="Snow"
            width="796"
            height="433"
            className="mt-4"
          ></img>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default ACGPage;
