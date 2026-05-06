import { Accordion, Col, Container, Row } from "react-bootstrap";

import Tag from "../../components/Tag";
import RelatedProjects from "../../components/RelatedProjects";
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
        <h6 className="mt-3 mb-1">Problem</h6>
        <p>
          Investigate how realistic snow can be rendered and simulated by
          combining visual and physical effects instead of relying on a simple
          surface shader.
        </p>
        <h6 className="mt-3 mb-1">Implementation</h6>
        <p>
          My partner and I built the project in C++ and OpenGL. The rendering
          work focused on volumetric bidirectional path tracing, while the
          simulation work used MPM to model physical snow behavior.
        </p>
        <h6 className="mt-3 mb-1">Result</h6>
        <p>
          The final report captures the research path, implementation tradeoffs,
          and the parts of snow rendering that were most technically important
          for the scope of the class project.
        </p>
      </div>
      <Row>
        <Col></Col>
        <Col md="auto">
          <a href={acg} target="_blank" rel="noopener noreferrer">
            Final Report PDF
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
      <RelatedProjects currentSlug="realistic-snow" />
    </Container>
  );
}

export default ACGPage;
