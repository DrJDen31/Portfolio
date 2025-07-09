import { Accordion, Col, Container, Row } from "react-bootstrap";

import Tag from "../../components/Tag";
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
        <p>
          For the final project of Cognitive Modeling, we were asked to utilize
          the skills we acquired to model something of our choice. My partner
          and I decided to train a model to act as the brain interpreting
          information from cone cells. This was implemented in Python using
          Keras with Tensorflow as the underlying framework. Below is the full
          final report.
        </p>
      </div>
      <Row>
        <Col></Col>
        <Col md="auto">
          <a href={cm} target="_blank" rel="noopener noreferrer">
            Final Report
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
    </Container>
  );
}

export default CMPage;
