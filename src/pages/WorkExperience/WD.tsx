import { Accordion, Button, Col, Container, Row } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import wd from "../../content/images/western-digital.png";
import Tag from "../../components/Tag";

function WDPage() {
  const navigate = useNavigate();
  return (
    <Container className="pb-4">
      <div className="mt-2">
        <h2>Western Digital</h2>
        <h4 style={{ color: "gray" }} className="pb-2">
          Firmware/Embedded Software Engineer
        </h4>
        <p style={{ marginTop: "0px" }}>Internship: May 2025 - August 2025</p>
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
            <Tag text="Work" color="#80FF86" />
          </div>
          <div className="p-1">
            <Tag text="Go" color="orange" />
          </div>
          <div className="p-1">
            <Tag text="Python" color="orange" />
          </div>
        </div>
        <p className="pt-2">
          I worked at Western Digital in Rochester, Minnesota as a
          firmware/embedded software engineering intern on the Out-of-Box team.
          This team acts as a final review point before code enters the official
          codebase to help ensure changes are desirable and correct. My role
          involved improving and testing tools used to analyze long-term
          codebase behavior, repository health, and supporting engineering
          workflows. The main project involved improving a Go tool that gathers
          and reports repository trend data.
        </p>
      </div>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Optimization</Accordion.Header>
          <Accordion.Body>
            <p>
              The main task involves the optimization of the tool. Initially,
              the tool ran sequentially, doing a check over many repos. This
              took a little over 20 minutes to complete one cycle of it's
              execution. After implementing concurrency using goroutines and
              channel communication, the runtime has been brought down to around
              2.5 minutes. Additional improvements were made to add a save file
              that tracks the tools progress, allowing it to avoid repeating
              work on additional executions, bringing successive executions to
              as short as 30 seconds. Limitations on resources can be set
              throuhg a command line flag to limit the tools resource usage if
              too many child processes are being created, at the expense of some
              runtime.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Database</Accordion.Header>
          <Accordion.Body>
            <p>
              The tool was initially configured to store useful information in a
              MySQL database running in a Docker Container. I extended this
              functionality to parse additional desired information and store it
              in the database. Due to the repetition of similar logic for each
              data type, a higher order function was used to gather and store
              this data. Dashboards were then created in Grafana to visualize
              trends over time.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Logging</Accordion.Header>
          <Accordion.Body>
            <p>
              The tool is run in the background, occasionally running and
              updating the database and dashboards. However, unforseen events
              may occur, throwing an error and halting the execution of the
              tool. It would be useful to be notified of these issues.
              Additionally, as the tool is run in the background, logging to
              stdout in the terminal isn't very helpful. Therefore, info,
              debugging, and error logs are captured and uploaded to a Grafana
              Loki Docker container using Grafana Alloy. Grafana can then be
              used to inspect logs and set up automatic alerts for when errors
              are detected, sending a Slack message to the proper people.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Row>
        <Col></Col>
        <Col md="auto">
          <img
            src={wd}
            alt="Western Digital Logo"
            width="400"
            height="270"
            className="mt-4"
          ></img>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md="auto">
          <Button
            variant="primary"
            onClick={() => navigate("/work-experience/overview")}
            className="mt-2"
          >
            See All Work Experience
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default WDPage;
