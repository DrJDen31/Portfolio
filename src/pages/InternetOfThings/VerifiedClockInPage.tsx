import { Col, Container, Row } from "react-bootstrap";

import methodology from "../../content/images/IoTVerifiedClockIn.jpg";
import circuit from "../../content/images/IoT.png";
import Tag from "../../components/Tag";

function VerifiedClockInPage() {
  return (
    <Container className="my-4">
      <div>
        <h2>Verified Clock In</h2>
        <h4 style={{ color: "gray" }} className="pb-2">
          Internetworking of Things
        </h4>
        <p style={{ marginTop: "0px" }}>Spring Semester, 2024</p>
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
            <Tag text="IoT" color="#80F9FF" />
          </div>
          <div className="p-1">
            <Tag text="Python" color="orange" />
          </div>
          <div className="p-1">
            <Tag text="HTTP" color="orange" />
          </div>
        </div>
        <h6>Objective:</h6>
        <p>
          This project allows people to clock in/out at work easily and
          consistently by simply scanning an Radio Frequency Identification
          (RFID) tag on a reader. This requires them to be a valid user, so the
          framework for setting up a new user as well as determining if a user
          is valid also exists.
        </p>
        <h6>Methodology:</h6>
        <p>
          RFID tags and a reader are used to tell when a worker is attempting to
          clock in/out and asks the server to determine who it is. If it is a
          valid user, this confirmation could then be sent to the person through
          email. If the correct data is known, a person can clock in online as
          well by performing the HTTP request, although this website hasn't been
          created yet.
        </p>
        <Row>
          <Col></Col>
          <Col md="auto">
            <img
              src={methodology}
              style={{
                height: "354px",
                width: "442px",
                marginTop: "5px",
                marginLeft: "5px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            ></img>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col md="auto">
            <p style={{ fontStyle: "italic" }}>Methodology Diagram</p>
          </Col>
          <Col></Col>
        </Row>
        <h6>Hardware/Software Used:</h6>
        <p>
          A Rasberry Pi (RPi) is used along with an RFID sensor to read an RFID
          tag and send clock in/out requests to the server, which itself is
          running on a laptop. The logic is programmed in Python, using flask
          for the server. The server has two endpoints, one for checking users
          and one for adding new users. Two LEDs are used to visually
          demonstrate to the user if they have successfully clocked in or if
          they were not recognized, with a red LED indicating an invalid and a
          green LED indicating a valid user. HTTP is used to make a request to
          the server, which then responds with the user’s status. The RPi GPIO
          library is used to interface with the RFID reader and the output LEDs.
        </p>
        <Row>
          <Col></Col>
          <Col md="auto">
            <img
              src={circuit}
              style={{
                height: "378px",
                width: "504px",
                marginTop: "5px",
                marginLeft: "5px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            ></img>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col md="auto">
            <p style={{ fontStyle: "italic" }}>Circuit Setup</p>
          </Col>
          <Col></Col>
        </Row>
        <h6>Demo and Deliverable:</h6>
        <p>
          Clocking in is demonstrated using the RFID and RPi, as well as the
          visual feedback for both an invalid user and a valid user. The
          addition of a valid user is also shown, which then attempts to clock
          in again and is successful. The contents of the database file are
          shown as they update live.
        </p>
        <Row>
          <Col></Col>
          <Col md="auto">
            <div style={{ width: "960px", height: "540px" }}>
              <iframe
                width="100%"
                height="100%"
                src="https://drive.google.com/file/d/1WCxY49KW_3GppL_7nP4L5n_BFDrOF4xT/preview"
              ></iframe>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col md="auto">
            <p style={{ fontStyle: "italic" }}>Demonstration Video</p>
          </Col>
          <Col></Col>
        </Row>
      </div>
    </Container>
  );
}

export default VerifiedClockInPage;
