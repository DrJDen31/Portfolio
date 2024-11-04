import { useNavigate } from "react-router-dom";
import WIP from "../../components/WIP";
import { Button, Col, Container, Row } from "react-bootstrap";
import Tag from "../../components/Tag";

import bp3 from "../../content/images/Genotype_BP_Player3.png";
import bp2 from "../../content/images/Genotype_BP_Player2.png";
import bp1 from "../../content/images/Genotype_BP_Player1.png";

function GenotypePage() {
  const navigate = useNavigate();

  return (
    <Container className="my-4">
      <Row>
        <div>
          <h2>Genotype</h2>
          <h4 style={{ color: "gray" }} className="pb-2">
            Class Project
          </h4>
          <p style={{ marginTop: "0px" }}>Fall 2022</p>
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
              <Tag text="Introduction to Biology Lab" color="#80F9FF" />
            </div>
            <div className="p-1">
              <Tag text="Student Presentation" color="yellow" />
            </div>
            <div className="p-1">
              <Tag text="UE5" color="orange" />
            </div>
            <div className="p-1">
              <Tag text="Blueprint VSL" color="orange" />
            </div>
          </div>
          <h5 className="mt-2 mb-0">Overview:</h5>
          <p>
            In Genotype, you play as a ribosome working to make proteins. A
            random protein is given to you, and one by one you need to collect
            amino acids to make it. These are added to the protein until the
            entire chain is made and you move on to the next one. Collecting the
            wrong one sticks it to you until you can hold spacebar to remove it.
            This takes away one of your three lives. The goal is to make as many
            proteins as you can.
          </p>
        </div>
      </Row>
      <Row>
        <h5>Player Character:</h5>
        <Col></Col>
        <Col md="auto">
          <img
            src={bp3}
            alt="Player Model"
            width="640"
            height="353"
            className="mt-4"
          ></img>
        </Col>
        <Col></Col>
        <p>
          Most of the implementation is done in the player character, BP_Player.
          A few input actions are used to move the player around by moving the
          mouse, detect when the spacebar is held, and to pause the game.
        </p>
        <p>
          BeginPlay sets up the HUD and gets the first protein going by calling
          BuildProtein.
        </p>
        <p>
          BuildProtein will pick a random protein 1-5 to set as the desired. It
          will then create the mesh for the RNA by connecting codons together,
          updates the HUD based on the new protein using a delegate, and
          monitors the progress of building the protein.
        </p>
        <p>
          On the CapsuleComponentOverlapTriggered, if the player has hit the
          desired Amino Acid, a boolean HasFoundDesiredAminoAcid is set so
          BuildProtein knows to move on to the next one. If an incorrect Amino
          Acid has been hit, the stuck logic is called. This alerts the player
          through a sound and HUD change, and decrements the health. If the
          player is out of health, the game is over. Otherwise, no other acids
          can be picked up until it is unstuck.
        </p>
        <p>
          Unstick counts the amount of time the space bar has been held. Once it
          is the desired amount, the player is allowed to pick up new Amino
          Acids.
        </p>
      </Row>
      <Row>
        <h5>Blueprint General Structure:</h5>
        <Col></Col>
        <Col md="auto">
          <img
            src={bp1}
            alt="Blueprints (1)"
            width="640"
            height="418"
            className="mt-4"
          ></img>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md="auto">
          <img
            src={bp2}
            alt="Blueprints (2)"
            width="640"
            height="272"
            className="mt-4"
          ></img>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <h5>Gamemode Handling:</h5>
        <p>The other logic is handled in a few different classes.</p>
        <p>
          The gamemode EndlessRunner handles the desired classes to use at
          runtime.
        </p>
        <p>
          Actors called the BP_EndZone and BP_MidZone handle the spawning and
          destruction of Amino Acids once the acids reach certain parts of the
          level. Once an Acid crosses the MidZone, a new one is spawned, and
          once it reaches the EndZone (past the player) it is destroyed.
        </p>
        <p>
          A Pawn called BP_AminoAcidBase represents the Amino Acids. They handle
          spawning their replacement by choosing a random Amino Acid to spawn at
          a random location in a designated zone after passing the MidZone. They
          also have a sphere collision component to collide with the player and
          use the Projectile Movement to move in a straight line from the spawn
          point to the endzone, past the player.
        </p>
        <p>
          In addition to BP_AminoAcidBase spawning it's replacement, whenever a
          full protein is built, the flight speed of the Amino Acids is
          increased slightly. This makes the game slightly faster and therefore
          harder as it goes on but still doesn't fill up the screen with Amino
          Acids making it impossible.
        </p>
      </Row>
      <Row>
        <h5>Gameplay Demo:</h5>
        <Col></Col>
        <Col md="auto">
          <div style={{ width: "960px", height: "540px" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://drive.google.com/file/d/1Smb3O00eoF_OO8eAC1IpQzSp-q_uViYY/preview"
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

export default GenotypePage;
