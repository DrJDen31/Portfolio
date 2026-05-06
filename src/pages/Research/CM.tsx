import { Accordion, Col, Container, Row } from "react-bootstrap";

import Tag from "../../components/Tag";
import RelatedProjects from "../../components/RelatedProjects";
import cm from "../../content/images/Cognitive_Modeling_Final_Report.pdf";
import dist from "../../content/images/our_tetrachromatic.png";
import flower from "../../content/images/flower_25.png";
function CMPage() {
  return (
    <Container className="my-4">
      <div>
        <h2>Cone Cell Modeling</h2>
        <h4 style={{ color: "gray" }} className="pb-2">
          Cognitive Modeling
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
            <Tag text="Cognitive Modeling" color="#80F9FF" />
          </div>
          <div className="p-1">
            <Tag text="Python" color="orange" />
          </div>
          <div className="p-1">
            <Tag text="Keras/Tensorflow" color="orange" />
          </div>
        </div>
        <h6 className="mt-3 mb-1">Problem</h6>
        <p>
          Model how cone cell signals could be interpreted into a color
          perception result, using the course project as a bridge between
          cognitive science and machine learning.
        </p>
        <h6 className="mt-3 mb-1">Implementation</h6>
        <p>
          My partner and I trained a Python model with Keras and TensorFlow to
          approximate the brain's interpretation of cone-cell inputs.
        </p>
        <h6 className="mt-3 mb-1">Result</h6>
        <p>
          The report documents the modeling choices, visualizations, and limits
          of the approach, making the page useful as a compact research case
          study rather than only a PDF link.
        </p>
      </div>
      <Row>
        <Col></Col>
        <Col md="auto">
          <a href={cm} target="_blank" rel="noopener noreferrer">
            Final Report PDF
          </a>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md="auto">
          <img
            src={dist}
            alt="Cone Cell Coverage"
            width="783"
            height="410"
            className="mt-4"
          ></img>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md="auto">
          <img
            src={flower}
            alt="Flower"
            width="400"
            height="400"
            className="mt-4"
          ></img>
        </Col>
        <Col></Col>
      </Row>
      <RelatedProjects currentSlug="cone-cell-model" />
    </Container>
  );
}

export default CMPage;
