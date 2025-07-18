import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LinkGroup from "../components/HomePage/LinkGroup";
import Courses from "../components/HomePage/Courses";
import Skills from "../components/HomePage/Skills";
import Bio from "../components/HomePage/Bio";

import moogpic from "../content/images/IMG_7301 (1).jpg";
import troytutors from "../content/images/tt.png";
import wd from "../content/images/western-digital.png";
import robotcar from "../content/images/robotcar.png";
import iot from "../content/images/IoT.png";
import module from "../content/images/Module.png";
import grad from "../content/images/grad.jpg";
import rpi from "../content/images/rensselaer-polytechnic-institute_209.png";
import moog from "../content/images/moog.png";
import chd from "../content/images/chd_lab9.png";
import snow from "../content/images/sparkle.png";
import cm from "../content/images/our_tetrachromatic.png";
import buckshot from "../content/images/buckshot.png";
import capstone from "../content/images/capstone.png";
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
      {/* <Accordion className="pb-4">
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
      </Accordion> */}
      <p className="fs-5 pt-2">
        Hi! My name is Jaden Tompkins and I am a graduate student at Rensselaer
        Polytechnic Institute in Troy, NY pursuing a M.S. in Computer & Systems
        Engineering with an expected graduation of May 2026.
      </p>
      <Row>
        <Col></Col>
        <Col md="auto">
          <img src={rpi} alt="RPI Logo" width="200" height="200"></img>
        </Col>
        <Col></Col>
      </Row>
      <p className="fs-5 pt-2">
        I graduated with a B.S. in Computer & Systems and a B.S. in Computer
        Science with a minor in Cognitive Science for Artificial Intelligence in
        May 2025.
      </p>
      <Row>
        <Col></Col>
        <Col md="auto">
          <img
            src={grad}
            alt="Graduation Picture"
            width="307"
            height="250"
          ></img>
        </Col>
        <Col></Col>
      </Row>
      <p className="fs-5 pt-2">
        I have past intern experience as a software engineer at Moog
        Construction, where I developed a full stack Python app, and Western
        Digital as a firmware/embedded software engineer.
      </p>
      <Row>
        <Col></Col>
        <Col md="auto">
          <img src={moog} alt="Moog Logo" width="290" height="290"></img>
        </Col>
        <Col></Col>
        <Col md="auto">
          <img
            src={wd}
            alt="Western Digital Logo"
            width="400"
            height="270"
          ></img>
        </Col>
        <Col></Col>
      </Row>
      <p className="fs-5 pb-4 ">
        I am currently looking for a full time role starting May 2026!
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
              imageSource={wd}
              title="Western Digital"
              text="Summer 2025 firmware/embedded software intern at Western Digital in Rochester, Minnesota"
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
                  text: "Go",
                  color: "orange",
                },
              ]}
              navigationPath="/work-experience/western-digital"
            />
          </Col>
          <Col></Col>
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
        </Row>
        <Row className="mt-4">
          <h3>Featured Project Experience:</h3>
          <Col xs></Col>
          <Col md="auto">
            <ExperienceCard
              imageSource={chd}
              title="Computer Hardware Design: RISC-V Processors"
              text="Multiple labs culminating in the simulation of RISC-V processors"
              tags={[
                {
                  text: "In Class",
                  color: "#80FF86",
                },
                {
                  text: "CHD",
                  color: "#80F9FF",
                },
                {
                  text: "SystemVerilog",
                  color: "orange",
                },
              ]}
              navigationPath="/computer-engineering/risc-v"
            />
          </Col>
          <Col></Col>
          <Col md="auto">
            <ExperienceCard
              imageSource={snow}
              title="Advanced Computer Graphics: Realistic Snow"
              text="Investigation into the realistic rendering and simulation of snow"
              tags={[
                {
                  text: "In Class",
                  color: "#80FF86",
                },
                {
                  text: "ACG",
                  color: "#80F9FF",
                },
                {
                  text: "C++",
                  color: "orange",
                },
              ]}
              navigationPath="/research/realistic-snow"
            />
          </Col>
          <Col></Col>
          <Col md="auto">
            <ExperienceCard
              imageSource={buckshot}
              title="Microprocessor Systems: Buckshot Roulette"
              text="Recreation of the game Buckshot Roulette on a microcontroller"
              tags={[
                {
                  text: "In Class",
                  color: "#80FF86",
                },
                {
                  text: "MpS",
                  color: "#80F9FF",
                },
                {
                  text: "C",
                  color: "orange",
                },
              ]}
              navigationPath="/embedded-systems/buckshot"
            />
          </Col>
          <Col></Col>
          <Col md="auto">
            <ExperienceCard
              imageSource={cm}
              title="Cognitive Modeling: Cone Cell Modeling"
              text="A model of the brain's interpretation from cone cell signals"
              tags={[
                {
                  text: "In Class",
                  color: "#80FF86",
                },
                {
                  text: "CM",
                  color: "#80F9FF",
                },
                {
                  text: "Python",
                  color: "orange",
                },
              ]}
              navigationPath="/research/cone-cell-model"
            />
          </Col>
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
          <Col md="auto">
            <ExperienceCard
              imageSource={capstone}
              title="Capstone"
              text="Multidisciplinary Capstone: Multiplexer Module for Bioelectrochemical Experiments"
              tags={[
                {
                  text: "In Class",
                  color: "#80FF86",
                },
                {
                  text: "Capstone",
                  color: "#80F9FF",
                },
                {
                  text: "C++",
                  color: "orange",
                },
                {
                  text: "SPI",
                  color: "orange",
                },
              ]}
              navigationPath="/embedded-systems/capstone"
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
