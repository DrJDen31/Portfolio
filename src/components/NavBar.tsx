import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="xxl" bg="secondary">
      <Container>
        <Navbar.Brand className="text-white" href="/">
          Jaden Tompkins
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="/">
              Home
            </Nav.Link>
            {/*
            <Nav.Link className="text-white" as={Link} to="/experience-overview">
              Experience Overview
            </Nav.Link>
            */}

            <NavDropdown
              title={
                <span className="text-white my-auto">Work Experience</span>
              }
              id="nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/work-experience/overview">
                Overview
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/work-experience/moog">
                Moog
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/work-experience/troy-tutors">
                Troy Tutors
              </NavDropdown.Item>
            </NavDropdown>

            {/*
            <NavDropdown
              title={
                <span className="text-white my-auto">Embedded Systems</span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/embedded-systems/overview">
                Overview
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/embedded-systems/embedded-controls-maze">
                Car Maze
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/embedded-systems/ied-handy-helper">
                Handy Helper
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/embedded-systems/vtol-drone">
                VTOL Drone
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <span className="text-white my-auto">Mobile Development</span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/mobile-development/overview">
                Overview
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mobile-development/aora">
                Aora
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mobile-development/smart-cal">
                SmartCal
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mobile-development/feature-ring">
                FeatureRing
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mobile-development/my-fellow-americans">
                MyFellowAmericans
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<span className="text-white my-auto">Unreal Engine</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/unreal-engine/overview">
                Overview
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/unreal-engine/npc-analysis">
                NPC Analysis
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/unreal-engine/module-zero">
                Module Zero
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/unreal-engine/adlib">
                Adlib
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <span className="text-white my-auto">Internet Of Things</span>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/internet-of-things/overview">
                Overview
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/internet-of-things/verified-clock-in">
                Verified Clock In
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<span className="text-white my-auto">Circuit Design</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/circuit-design/overview">
                Overview
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/circuit-design/heartbeat-sensor">
                Heartbeat Sensor
              </NavDropdown.Item>
            </NavDropdown>
            */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
