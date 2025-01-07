import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LinkGroup from "../components/HomePage/LinkGroup";
import Courses from "../components/HomePage/Courses";
import Skills from "../components/HomePage/Skills";
import Bio from "../components/HomePage/Bio";

import moogpic from "../content/images/IMG_7301 (1).jpg";
import troytutors from "../content/images/tt.png";
import robotcar from "../content/images/robotcar.png";
import iot from "../content/images/IoT.png";
import module from "../content/images/Module.png";
import CardImage from "../components/CardImage";
import ExperienceCard from "../components/ExperienceCard";

function Home() {
  const navigate = useNavigate();
  const styles = {
    cardImage: {
      objectFit: "cover",
      height: "200px",
      width: "282px",
      borderRadius: "20px",
      margin: "2px",
    },
  };
  //Links:
  //Github
  //LinkedIn
  //Email
  //Intro Paragraph
  //
  //Objective Statement
  //Accordian:
  //Courses:
  //Taken
  //Prospective
  //Coterm (?)
  //Skills:
  //Programming
  //Software Applications
  //Technical
  //Carousel:
  //Work Experience
  //Carousel:
  //Featured Projects - top couple projects
  //Bio:
  //Contact Info:
  //Email
  //Phone
  //Picture
  //Paragraph
  //About Me
  return (
    <Container className="pt-1 pb-4 my-auto">
      <LinkGroup />
      <Accordion className="pb-4">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Note:</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                This site was not designed for mobile browsers, so for the best
                experience, use a desktop.
              </li>
              <li>
                This site is a work in progress. My old portfolio through google
                sites can be found here:{" "}
                <a href="https://sites.google.com/view/jadentompkins/home?authuser=0">
                  Google Sites Portfolio
                </a>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <p className="fs-5">
        Hi! My name is Jaden Tompkins and I am a senior at Rensselaer
        Polytechnic Institute in Troy, NY dual majoring in Computer & Systems
        Engineering and Computer Science. I have past intern experience working
        at Moog Construction, where my main task was to develop a full stack
        Python app. I have focused on embedded systems and computer hardware
        design when selecting my courses, and I am minoring in Cognitive Science
        for Artificial Intelligence.
      </p>
      <p className="fs-5 pb-4">
        I am currently looking for a summer 2025 internship!
      </p>
      <p className="fs-5 fw-bold">Courses and Skills:</p>
      <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Featured Courses</Accordion.Header>
          <Accordion.Body>
            <Courses />
            <Row>
              <Col></Col>
              <Col md="auto">
                <Button
                  variant="primary"
                  onClick={() => navigate("/courses-overview")}
                  className="mt-2"
                >
                  See Overview of All Courses
                </Button>
              </Col>
              <Col></Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Skills</Accordion.Header>
          <Accordion.Body>
            <Skills />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Container className="my-4">
        <Row className="mt-4">
          <h3>All Experience:</h3>
          <Col md="auto">
            <Button
              variant="primary"
              onClick={() => navigate("/work-experience/overview")}
              className="mt-2"
            >
              See All Work Experience
            </Button>
          </Col>
          <Col md="auto">
            <Button
              variant="primary"
              onClick={() => navigate("/unreal-engine/overview")}
              className="mt-2"
            >
              See All Unreal Engine Projects
            </Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <h3>Featured Work Experience:</h3>
          <Col></Col>
          <Col md="auto">
            <ExperienceCard
              imageSource={moogpic}
              title="Moog"
              text="Fall 2023 Engineering Internship in Buffalo, NY as a part of
                  the ZQuip team for Moog Construction"
              tags={[
                {
                  text: "Work",
                  color: "#80FF86",
                },
                {
                  text: "Python",
                  color: "orange",
                },
                {
                  text: "Bash",
                  color: "orange",
                },
                {
                  text: "CODESYS",
                  color: "orange",
                },
              ]}
              navigationPath="/work-experience/moog"
            />
          </Col>
          <Col xs></Col>
          <Col md="auto">
            <ExperienceCard
              imageSource={troytutors}
              title="Troy Tutors"
              text="Part time tutor through Troy Tutors in CS and CSE courses,
                  such as Data Structures and CANOS"
              tags={[
                {
                  text: "Work",
                  color: "#80FF86",
                },
                {
                  text: "Data Structures",
                  color: "#80F9FF",
                },
                {
                  text: "CANOS",
                  color: "#80F9FF",
                },
              ]}
              navigationPath="/work-experience/troy-tutors"
            />
          </Col>
          <Col></Col>
        </Row>
        <Row className="mt-4">
          <h3>Featured Project Experience:</h3>
          <Col></Col>
          <Col md="auto">
            <ExperienceCard
              imageSource={robotcar}
              title="Embedded Control: Car Maze"
              text="Final project (partner) for Embedded Control"
              tags={[
                {
                  text: "In Class",
                  color: "#80FF86",
                },
                {
                  text: "Embedded Control",
                  color: "#80F9FF",
                },
                {
                  text: "C",
                  color: "orange",
                },
              ]}
              navigationPath="/embedded-systems/embedded-controls-maze"
            />
          </Col>
          <Col xs></Col>
          <Col md="auto">
            <ExperienceCard
              imageSource={iot}
              title="Internet of Things: Verified Clock In"
              text="Final project (solo) for Internetworking of Things"
              tags={[
                {
                  text: "In Class",
                  color: "#80FF86",
                },
                {
                  text: "IoT",
                  color: "#80F9FF",
                },
                {
                  text: "Python",
                  color: "orange",
                },
                {
                  text: "HTTP",
                  color: "orange",
                },
              ]}
              navigationPath="/internet-of-things/verified-clock-in"
            />
          </Col>
          <Col xs></Col>
          <Col md="auto">
            <ExperienceCard
              imageSource={module}
              title="Module Zero"
              text="Personal project designing an First Person Shooter (FPS) in
                  Unreal Engine 5"
              tags={[
                {
                  text: "Personal",
                  color: "#80FF86",
                },
                {
                  text: "UE5",
                  color: "orange",
                },
                {
                  text: "C++",
                  color: "orange",
                },
                {
                  text: "Blueprint VSL",
                  color: "orange",
                },
              ]}
              navigationPath="/unreal-engine/module-zero"
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Container className="py-4">
        <Bio />
      </Container>
    </Container>
  );
}

export default Home;
