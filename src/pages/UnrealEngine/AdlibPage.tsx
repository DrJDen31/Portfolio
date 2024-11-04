import { useNavigate } from "react-router-dom";
import WIP from "../../components/WIP";
import {
  Accordion,
  Button,
  Col,
  Container,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import Tag from "../../components/Tag";

function AdlibPage() {
  const navigate = useNavigate();

  return (
    <Container className="my-4">
      <div>
        <h2>Adlib</h2>
        <h4 style={{ color: "gray" }} className="pb-2">
          Personal Project
        </h4>
        <p style={{ marginTop: "0px" }}>Spring 2024 - Present</p>
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
            <Tag text="Personal" color="#80FF86" />
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
          Adlib is a single person parody/horror game to test out some gameplay
          mechanics. In adlib, you are trying to survive while trapped in a
          stadium with a monster that manifests itself as a popular rapper.
          There isn't a definite victory, rather, you go for the highest score
          possible, attempting to break your record each time. Points are scored
          by interacting with the monster, such as near misses, simply by
          surviving, or by stealing the monster's mixtape. The player has to
          navigate the stadium, avoiding the monster by hearing its adlibs,
          looking for its mixtapes.
        </p>
        <Tabs defaultActiveKey="player" id="courses-tab" className="mb-3">
          <Tab eventKey="player" title="Player Mechanics">
            <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Camera System</Accordion.Header>
                <Accordion.Body>
                  <p>
                    The player carries around their phone while livestreaming on
                    a social media service. Upon reaching the security room, the
                    player is able to hack into the security cameras and view
                    them from their phone. This allows the player to scope out
                    the map, keep tabs on the monster, and freeze the monster,
                    as described in the Freezes When Recorded section of Enemy
                    Mechanics.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Camouflage</Accordion.Header>
                <Accordion.Body>
                  <p>
                    The player can escape the monster's detection by activating
                    a sequence. First, they must reach the control room. Here,
                    they will have access to the light and sound systems. If
                    they decide to play the monster's music, they will then have
                    the ability to rap/sing/dance along. This is done through an
                    ongoing quick time event, gaining them points and preventing
                    the monster from seeing them. However, if they fail with the
                    monster nearby, they will be detected.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Tab>
          <Tab eventKey="enemy" title="Enemy Mechanics">
            {" "}
            <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Adlibs</Accordion.Header>
                <Accordion.Body>
                  <p>
                    The adlib ability is the namesake of the game and the
                    inspiration for it. While wandering the stadium, the monster
                    will be constantly yelling out adlibs from their songs. If
                    you are unaware, adlibs are the noises rappers often make in
                    between lines, such as "yeah". They range from random noises
                    to very simple words, to words that play off of the lyrics
                    and add to the meaning (as Eminem often does with his). For
                    adlib, the monster mainly sticks to random noises and simple
                    words, with its adlibs heavily reverbed and echoed, and
                    while they can be heard from afar, the volume and direction
                    of the sound can be used to tell where the monster is and
                    where it's going.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Freezes When Recorded</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Another key mechanic is that the monster needs to uphold
                    it's public image and can't be seen attacking the player
                    live on stream. Therefore it will freeze whenever at the
                    dead center of a camera, whether it is the player's phone or
                    one of the security cameras. However, the monster has the
                    ability of decreasing the quality of cameras, so, this
                    mechanic only works by having the monster at the dead center
                    of the camera. Otherwise, the feed is too blurry and the
                    monster will be able to get away with attacking the player
                    without being caught on camera.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Tab>
        </Tabs>
      </div>
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

export default AdlibPage;
