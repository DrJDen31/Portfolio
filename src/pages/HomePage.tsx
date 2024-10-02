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
      <div style={{ flexDirection: "row", display: "flex", marginTop: "2" }}>
        <p className="mx-1">
          Note: This site is a work in progress. My old portfolio through google
          sites can be found
        </p>
        <a href="https://sites.google.com/view/jadentompkins/home?authuser=0">
          here.
        </a>
      </div>
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
        I am currently looking for a full time job for May 2025!
      </p>
      <p className="fs-5 fw-bold">Courses and Skills:</p>
      <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Courses</Accordion.Header>
          <Accordion.Body>
            <Courses />
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
        <Row>
          <h3>Featured Work Experience</h3>
          <Col></Col>
          <Col md="auto">
            <Card className="mt-2" style={{ width: "18rem", height: "24rem" }}>
              <CardImage source={moogpic} />
              <Card.Body>
                <Card.Title>Moog</Card.Title>
                <Card.Text>
                  Fall 2023 Engineering Internship in Buffalo, NY as a part of
                  the ZQuip team for Moog Construction
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigate("/work-experience/moog")}
                >
                  More Information
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs></Col>
          <Col md="auto">
            <Card className="mt-2" style={{ width: "18rem", height: "24rem" }}>
              <CardImage source={troytutors} />
              <Card.Body>
                <Card.Title>Troy Tutors</Card.Title>
                <Card.Text>
                  Part time tutor through Troy Tutors in CS and CSE courses,
                  such as Data Structures and CANOS
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigate("/work-experience/troy-tutors")}
                >
                  More Info
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
        <Row className="mt-4">
          <h3>Featured Project Experience</h3>
          <Col></Col>
          <Col md="auto">
            <Card className="mt-2" style={{ width: "18rem", height: "24rem" }}>
              <CardImage source={robotcar} />
              <Card.Body>
                <Card.Title>Embedded Control: Car Maze</Card.Title>
                <Card.Text>
                  Final project (partner) for Embedded Control
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() =>
                    navigate("/embedded-systems/embedded-controls-maze")
                  }
                >
                  More Info
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs></Col>
          <Col md="auto">
            <Card className="mt-2" style={{ width: "18rem", height: "24rem" }}>
              <CardImage source={iot} />
              <Card.Body>
                <Card.Title>Internet of Things: Verified Clock In</Card.Title>
                <Card.Text>
                  Final project (solo) for Internetworking of Things
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() =>
                    navigate("/internet-of-things/verified-clock-in")
                  }
                >
                  More Info
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs></Col>
          <Col md="auto">
            <Card className="mt-2" style={{ width: "18rem", height: "24rem" }}>
              <CardImage source={module} />
              <Card.Body>
                <Card.Title>Module Zero</Card.Title>
                <Card.Text>
                  Personal project designing an First Person Shooter (FPS) in
                  Unreal Engine 5
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigate("/unreal-engine/module-zero")}
                >
                  More Info
                </Button>
              </Card.Body>
            </Card>
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
