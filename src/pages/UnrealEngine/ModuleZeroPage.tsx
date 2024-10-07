import { useNavigate } from "react-router-dom";
import WIP from "../../components/WIP";
import { Col, Container, Row } from "react-bootstrap";
import Tag from "../../components/Tag";

function ModuleZeroPage() {
  const navigate = useNavigate();

  return (
    <Container className="my-4">
      <div>
        <h2>Module Zero</h2>
        <h4 style={{ color: "gray" }} className="pb-2">
          Personal Project
        </h4>
        <p style={{ marginTop: "0px" }}>Spring 2022 - Present</p>
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
            <Tag text="Personal Project" color="#80FF86" />
          </div>
          <div className="p-1">
            <Tag text="UE5" color="orange" />
          </div>
          <div className="p-1">
            <Tag text="C++" color="orange" />
          </div>
          <div className="p-1">
            <Tag text="Blueprint VSL" color="orange" />
          </div>
        </div>
        <h6 className="mt-2 mb-0">Overview:</h6>
        <p>
          Module is intended to be a multiplayer game with a campaign mode
          coming eventually. The key idea behind the game is that your entire
          character can be modularly customized piece by piece for a truly
          unique experienced while maintaining balanced gameplay.
        </p>
        <p>
          The source code is currently kept private, but I've made a public wiki
          available to showcase and explain both player-focused gameplay systems
          as well as the developer-focused implementation of these systems:{" "}
          <a href="https://github.com/DrJDen31/ModuleWiki/wiki">Github Wiki</a>
        </p>

        <p></p>
        <p>
          This project is a combination of Blueprint Visual Scripting Language,
          Unreal Engine's built in VSL, and C++. At first, while I was getting
          familiar with the engine, I solely used Blueprints. Then, after about
          a year, I started transitioning functionality to C++. The benefit of
          this is that C++ provides a great performance boost over Blueprint,
          but the engine is designed for a hybrid approach, and so ultimately
          that is what I use. It allows for much quicker testing of the code
          while keeping functionality that should be high performance in C++.
        </p>
        <p>
          While this is being transitioned to a new implementation style, key
          features in C++ involve a custom extension of Unreal Engine's built in
          Character Movement Component (CMC) that adds custom flags to replicate
          custom movement properly as well as the implementation of Unreal
          Engine's Gameplay Ability System (GAS) to allow for replicated
          abilities.
        </p>
        <p>
          This is being replaced by a plug-in which will handle all replication
          logic and expose it to Blueprint. The creator of the plug-in has much
          more experience than me and has put a lot of time into the plug-in, so
          I can feel confident it is an effecient solution and focus my time on
          the unique aspects of my game.
        </p>
        <p>
          This plug in is the{" "}
          <a href="https://grimtec.net/gmcv2-doc-contents/">
            General Movement Component (GMC)
          </a>{" "}
          as well as an extension of it called the{" "}
          <a href="https://github.com/reznok/GMCAbilitySystem">
            General Movement Component Ability System (GMAS).
          </a>{" "}
          These replace the CMC and GMS respectively while having additional
          support for multiplayer replication built in, allowing me to code
          abilities without having to focus as much on replication.
        </p>
        <p>
          While this page is now outdated, information about the past
          implementation without GMC can be found{" "}
          <a href="https://sites.google.com/view/jadentompkins/module-systems?authuser=0">
            here.
          </a>
        </p>
        <p>
          Additionally, here is a video outlining and demonstrating some of
          these systems:
        </p>
        <Row>
          <Col></Col>
          <Col md="auto">
            <div style={{ width: "960px", height: "540px" }}>
              <iframe
                width="100%"
                height="100%"
                src="https://drive.google.com/file/d/1wrjmCW09uIdDyVNbc7H-4UJyjvRCteen/preview"
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
        <p>
          I will be updating this page and providing further demonstrations as
          more progress is made with GMC.
        </p>
      </div>
    </Container>
  );
}

export default ModuleZeroPage;
