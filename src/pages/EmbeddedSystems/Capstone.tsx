import { Accordion, Col, Container, Row } from "react-bootstrap";

import Tag from "../../components/Tag";

function CapstonePage() {
  return (
    <Container className="my-4">
      <div>
        <h2>Multiplexer Module for Bioelectrochemical Experiments</h2>
        <h4 style={{ color: "gray" }} className="pb-2">
          Multidisciplinary Capstone
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
            <Tag text="Capstone" color="#80F9FF" />
          </div>
          <div className="p-1">
            <Tag text="C++" color="orange" />
          </div>
          <div className="p-1">
            <Tag text="SPI" color="orange" />
          </div>
        </div>
        <p>(Work in progress...)</p>
      </div>
    </Container>
  );
}

export default CapstonePage;
