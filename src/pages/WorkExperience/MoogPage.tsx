import { Accordion, Button, Col, Container, Row } from "react-bootstrap";

import moogpic from "../../content/images/IMG_7301 (1).jpg";
import { useNavigate } from "react-router-dom";
import Tag from "../../components/Tag";

function MoogPage() {
  const navigate = useNavigate();
  return (
    <Container className="pb-4">
      <div className="mt-2">
        <h2>Moog Construction</h2>
        <h4 style={{ color: "gray" }} className="pb-2">
          Intern, Engineering
        </h4>
        <p style={{ marginTop: "0px" }}>
          Full Time: August 2023 - December 2023
          <br />
          Part Time (Remote): December 2023 - April 2024
        </p>
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
            <Tag text="Python" color="orange" />
          </div>
          <div className="p-1">
            <Tag text="Bash" color="orange" />
          </div>
          <div className="p-1">
            <Tag text="CODESYS" color="orange" />
          </div>
        </div>
        <p className="pt-2">
          My work at Moog was primarily software development, which can be
          classified into three cases:
        </p>
        <ul>
          <li>Full stack Python desktop application</li>
          <li>Bash network monitoring scripts</li>
          <li>CODESYS setup, deployment, and testing</li>
        </ul>
      </div>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Python Application</Accordion.Header>
          <Accordion.Body>
            <p>
              The main task assigned to me at Moog was to develop a full stack
              application that interfaced with sites of electrified construction
              vehicles. This app would allow a person to easily manage a
              construction site that utilized EVs and get live updates on the
              status of the vehicles.
            </p>
            <p>Development of the app had 6 main stages:</p>
            <ol>
              <li>
                <h6>Brainstorming:</h6>
                <p>
                  After the task was described to me, I first brainstormed with
                  pen and paper. I designed a system of data structures and
                  custom classes that would make up the functionality of the
                  app. I sketched possible UI layouts and described how the
                  backend would control them. I got feedback on these ideas and
                  made tweaks along the way to properly capture the desired
                  functionality.
                </p>
              </li>
              <li>
                <h6>UI Prototyping:</h6>
                <p>
                  Next, I created a prototype of the UI in MATLAB's code editing
                  software. This had very limited backend implemented, only
                  enough to showcase the front end was dynamic. MATLAB allowed
                  me to quickly get the look of the app outlined with easy to
                  use components. Again, feedback was given on the layout and
                  extents of functionality.
                </p>
              </li>
              <li>
                <h6>UI Implementation:</h6>
                <p>
                  Then, the design was moved into Python to allow for a greater
                  flexibility of backend. The starting outline was expanded upon
                  to give the app greater capabilities and the general structure
                  described in the brainstorming section was laid out.
                </p>
              </li>
              <li>
                <h6>Backend Connection:</h6>
                <p>
                  After that, I worked on connecting the existing backend to the
                  app. This involved implementing OAuth 2 authentication to
                  allow access to the database and interfacing with the database
                  to get live information from the vehicles.
                </p>
              </li>
              <li>
                <h6>Testing:</h6>
                <p>
                  Finally, the app was ready to test. This involved launching
                  the app and monitoring a battery powered excavator as it drove
                  around. The information from the machine was properly read and
                  interpreted by the app, so the general functionality was
                  successful. The results of the testing was shown to the team
                  in an End of Block presentation.
                </p>
              </li>
              <li>
                <h6>Optimization:</h6>
                <p>
                  The above steps led up to the end of my time at the
                  internship. However, I continued working part-time remotely
                  for the following semester. During this time, I primarily
                  focused on implementing additional backend functionality as
                  well as working on optimizing the app. This was done by
                  analyzing and attempting to reduce the memory used by the app
                  and implementing threading to allow different events, such as
                  network polling and UI updates, to happen simultaneously.
                </p>
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Bash Scripts</Accordion.Header>
          <Accordion.Body>
            <p>
              Developing the bash scripts was a secondary task during the
              internship for when I had available time. The problem to be solved
              involved some issues on the network that the autonomous vehicles
              would communicate on. The purpose of my scripts was to monitor the
              state of the network when these issues occur to give a greater
              insight on what might have went wrong.
            </p>
            <p>
              To do so, my script would read from a yaml config file to
              determine which ip addresses to watch for as well as output
              configuration, then execute 2 main tasks.
            </p>
            <ol>
              <li>
                Ping valid ip addresses to get a picture of latency on the
                network
              </li>
              <li>
                Use tshark to monitor the packets sent on the network to look
                for the undesired addresses
              </li>
            </ol>
            <p>
              By the end of the internship, I got the polling functional and
              deployed the script to the network computer using ssh, as well as
              making some progress on the tshark network monitoring.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>CODESYS</Accordion.Header>
          <Accordion.Body>
            <p>
              The third task involved getting familiar with documentation of
              various products and IoT communications. I assisted the team in
              writing files in CODESYS to handle communication between the
              internal components of the electric vehicles using CAN. This
              involved identifying the important variables/signals with another
              engineer, finding the documentation on these in the manual, and
              properly adding them to the file for that component. The updated
              code was then deployed to the vehicle's controller and tested to
              verify the proper handling of the communications.
            </p>
            <p>
              This also involved testing the signals by manually setting their
              values. This, for example, allowed us to walk through the state
              machines of the components to verify the process.
            </p>
            <p>
              By the end of the internship, I was able to use the existing code
              as a template to write a new CODESYS program to interface with and
              control a caster motor for another project. This included a UI
              dashboard that allowed the user to set the speed and direction of
              the steering and driving motors independently, as well as turn on
              and off the motors.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Row>
        <Col></Col>
        <Col md="auto">
          <img
            src={moogpic}
            alt="MoogPic"
            width="285"
            height="315"
            className="mt-4"
          ></img>
        </Col>
        <Col></Col>
      </Row>
      <h6 className="mt-2" style={{ textAlign: "center" }}>
        In conclusion, my internship at Moog was a great opportunity to grow as
        an engineer. It allowed me to practice learning new languages and
        software programs, work as part of an engineering team, and explore the
        extents of what type of software engineering I may want to focus on in
        the future. It allowed me to realize my interest in IoT, which I took
        the next semester, as well as app design, which I now pursue in my free
        time.
      </h6>
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

export default MoogPage;
