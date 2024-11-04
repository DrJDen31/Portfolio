import { useNavigate } from "react-router-dom";
import WIP from "../../components/WIP";
import Tag from "../../components/Tag";
import { Button, Col, Container, Row } from "react-bootstrap";

function NPCAnalysisPage() {
  const navigate = useNavigate();

  return (
    <Container className="my-4">
      <div>
        <h2>NPC Analysis</h2>
        <h4 style={{ color: "gray" }} className="pb-2">
          Class Project
        </h4>
        <p style={{ marginTop: "0px" }}>Spring 2024</p>
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
            <Tag text="Introduction to Cognitive Science" color="#80F9FF" />
          </div>
          <div className="p-1">
            <Tag text="UE5" color="orange" />
          </div>
          <div className="p-1">
            <Tag text="Blueprint VSL" color="orange" />
          </div>
        </div>
        <h6 className="mt-2 mb-0">Overview:</h6>
        <p>
          The NPC Analysis was a final project for Introduction to Cognitive
          Science. It involved analyzing the level of intelligence and cognition
          present with common video game NPCs. I looked at a few different
          types, including a dialogue tree, AI behavior in the Madden video
          games, and how NPCs can be implemented in Unreal Engine 5 using AI
          Perception, Blackboards, Behavior Trees, and more. Due to class size
          and scheduling, presentations were recorded and submitted rather than
          performed in person. Therefore, below is the entire presentation. Some
          timestamps include:
          <ul>
            <li>Unreal Engine AI Implementation at 0:50</li>
            <li>Simple dialogue AI demo at 6:43</li>
            <li>Complex chase AI demo at 10:16</li>
            <li>
              General takeaways about cognition level in game design and
              development at 20:22
            </li>
          </ul>
          The presentation first goes over what AI is in games and what NPCs
          are. Then, it explains how AI NPCs can be created in Unreal Engine.
          Next, a few demos of example NPCs I implemented are shown. After that,
          I touch on "smart" systems that aren't necessarily NPCs. Finally, I
          give my takeaways on the cognition level of in-game NPCs and how AI
          should be used in games and game development.
        </p>
      </div>
      <Row>
        <Col></Col>
        <Col md="auto">
          <div style={{ width: "960px", height: "540px" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://drive.google.com/file/d/1OD5vWZl_Slezunr6WYoyPRKVgUD4SOgm/preview"
            ></iframe>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md="auto">
          <Button
            variant="primary"
            onClick={() => navigate("/unreal-engine/overview")}
            className="mt-2"
          >
            See All Unreal Engine Projects
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default NPCAnalysisPage;
