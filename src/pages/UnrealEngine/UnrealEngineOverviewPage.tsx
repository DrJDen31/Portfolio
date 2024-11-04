import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import ExperienceCard from "../../components/ExperienceCard";

import module from "../../content/images/Module.png";
import adlib from "../../content/images/adlib_chase.png";
import genotype from "../../content/images/Genotype_BP_Player3.png";
import chineseroom from "../../content/images/ChineseRoom_lvl1.png";
import npc from "../../content/images/npc_behavior_tree.png";

function UnrealEngineOverviewPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <h3 className="my-2">Unreal Engine 5 Projects</h3>
        <Row>
          <h5 className="my-2 mx-4">Personal Projects:</h5>
        </Row>
        <Row>
          <Col></Col>
          <Col md="auto">
            <ExperienceCard
              imageSource={module}
              title="Module Zero"
              text="Personal project designing an First Person Shooter (FPS) in Unreal Engine 5"
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
                  text: "Blueprint",
                  color: "orange",
                },
              ]}
              navigationPath="/unreal-engine/module-zero"
            />
          </Col>
          <Col></Col>
          <Col md="auto">
            <ExperienceCard
              imageSource={adlib}
              title="Adlib"
              text="Personal project designing a creative horror game in Unreal Engine 5"
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
                  text: "Blueprint",
                  color: "orange",
                },
              ]}
              navigationPath="/unreal-engine/adlib"
            />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <h5 className="my-2 mx-4">Class Projects:</h5>
        </Row>
        <Row>
          <Col></Col>
          <Col md="auto">
            <ExperienceCard
              imageSource={genotype}
              title="Genotype"
              text="Class project, endless runner to demonstrate protein creation of ribosomes"
              tags={[
                {
                  text: "Intro to Bio Lab",
                  color: "#80F9FF",
                },
                {
                  text: "UE5",
                  color: "orange",
                },
                {
                  text: "Blueprint",
                  color: "orange",
                },
              ]}
              navigationPath="/unreal-engine/genotype"
            />
          </Col>
          <Col></Col>
          <Col md="auto">
            <ExperienceCard
              imageSource={chineseroom}
              title="Chinese Room"
              text="Class project, 2D game to demonstrate the Chinese Room thought experiment"
              tags={[
                {
                  text: "ExCog",
                  color: "#80F9FF",
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
                  text: "Blueprint",
                  color: "orange",
                },
              ]}
              navigationPath="/unreal-engine/chinese-room"
            />
          </Col>
          <Col></Col>
          <Col md="auto">
            <ExperienceCard
              imageSource={npc}
              title="NPC Analysis"
              text="Class project, demonstrates the cognition level of AI NPCs in Unreal Engine"
              tags={[
                {
                  text: "Intro To Cog Sci",
                  color: "#80F9FF",
                },
                {
                  text: "UE5",
                  color: "orange",
                },
                {
                  text: "Blueprint",
                  color: "orange",
                },
              ]}
              navigationPath="/unreal-engine/npc-analysis"
            />
          </Col>
          <Col></Col>
        </Row>
      </div>
    </Container>
  );
}

export default UnrealEngineOverviewPage;
