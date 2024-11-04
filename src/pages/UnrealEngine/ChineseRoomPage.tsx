import { useNavigate } from "react-router-dom";
import WIP from "../../components/WIP";
import Tag from "../../components/Tag";
import { Button, Col, Container, Row } from "react-bootstrap";

import menu from "../../content/images/ChineseRoom_mainmenu.png";
import lvl1 from "../../content/images/ChineseRoom_lvl1.png";

function ChineseRoomPage() {
  const navigate = useNavigate();

  return (
    <Container className="my-4">
      <div>
        <h2>Chinese Room</h2>
        <h4 style={{ color: "gray" }} className="pb-2">
          Class Project
        </h4>
        <p style={{ marginTop: "0px" }}>Summer 2023</p>
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
            <Tag text="Extended Cognition" color="#80F9FF" />
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
          <div className="p-1">
            <Tag text="C++" color="orange" />
          </div>
        </div>
        <h6 className="mt-2 mb-0">Overview:</h6>
        <p>
          From the GitHub: "The Chinese Room is a simulation intended for
          showcasing different perspectives on the Chinese Room thought
          experiment proposed by John Searle. The thought experiment imagines an
          enclosed room with a man inside. A sentence in chinese is fed into the
          room to the man. As he doesn't understand chinese, he consults a
          rulebook and is able to produce a reply that is fed back out of the
          room. To an outside observer, the room as a whole seemingly knows
          chinese, but not a single part of the system actually does. So, does
          the room understand chinese? This model has been likened to an AI,
          which takes an input and gives back a seemingly conscious reply, but
          may not truly be sentient. The simulation puts the player in the
          position of the man, as they follow rulebooks in order to produce an
          output. After a variety of situations, the player can get a better
          understanding of the system and it's level of understanding."
        </p>
        <p>
          This project was developed over the summer 2023 semester for Extended
          Cognition, a project based class exploring software projects for
          cognitive science applications. It was developed alongside two other
          students (Ngawang Ghongwatsang, Xenia Khusid) and guidance from
          Professor Bram Van Heuveln. Personally, I focused on the overall
          Unreal Engine implementation, including the UI design through Widget
          Blueprints as well as the underlying C++ logic to handle the character
          swapping.
        </p>
        <p>
          For further information, including the source code, be sure to check
          out the <a href="https://github.com/DrJDen31/ChineseRoom">GitHub!</a>
        </p>
        <p>
          Below is the main menu. The first button either says "Play" if the
          game has not been played before, or "Continue" with the next level the
          player is on. Next is a button to open the level select screen, as
          while levels are sequential within their type, the types can be played
          in any order. Then, there is a button with instructions on how to play
          and another that gives the background of the Chinese Room thought
          experiment. Finally, there is a settings button and a quit to exit the
          app.
        </p>
        <Row>
          <Col></Col>
          <Col md="auto">
            <img
              src={menu}
              alt="Blueprints (2)"
              width="640"
              height="329"
              className="mt-2 mb-4"
            ></img>
          </Col>
          <Col></Col>
        </Row>
        <p>
          Below is an example level. The level name is shown in the top left.
          The top two tan squares are the instruction books, which have buttons
          to switch books (top buttons) and switch pages (bottom buttons), as
          well as icons to display what book and page the player is currently on
          (Book 1, Page 1 in the example). Instruction types are grouped by
          book, and in more complicated rooms, instructions may tell the player
          to switch books. The bottom rectangle is the workspace. This is where
          the player makes character substitutions. The black box is the working
          window, which contains the characters to be modified, and is moved by
          the 4 D-Pad style buttons to the right. There is a button at the
          bottom to make the change. Finally, on the left there is a testing
          button for debugging purposes, a help button to display instructions
          to the player (which is more helpful in more complicated rooms), and a
          quit button in the top left that returns to the main menu.
        </p>
        <Row>
          <Col></Col>
          <Col md="auto">
            <img
              src={lvl1}
              alt="Blueprints (2)"
              width="640"
              height="343"
              className="mt-2"
            ></img>
          </Col>
          <Col></Col>
        </Row>
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

export default ChineseRoomPage;
