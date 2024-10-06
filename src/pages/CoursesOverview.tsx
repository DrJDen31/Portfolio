import {
  Container,
  Row,
  Col,
  Accordion,
  Tabs,
  Tab,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Tag from "../components/Tag";

function CoursesOverview() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="mt-2" style={{ border: "2px" }}>
        <p>
          All descriptions from RPI's{" "}
          <a href="https://catalog.rpi.edu/">catalog.</a>
        </p>
        <Tabs
          defaultActiveKey="freshman"
          id="courses-overview-tab"
          className="mb-1"
        >
          <Tab eventKey="freshman" title="Freshman Year">
            <h2 className="mb-2">Freshman Year</h2>
            <Row>
              <Col>
                <div className="mb-4">
                  <h4 className="mb-2">Fall 2021</h4>
                  <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        [CSCI-1100] - Computer Science I
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Computer Science I</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "An introduction to computer programming algorithm
                            design and analysis. Additional topics include basic
                            computer organization; internal representation of
                            scalar and array data; use of top-down design and
                            subprograms to tackle complex problems; abstract
                            data types. Enrichment material as time allows.
                            Interdisciplinary case studies, numerical and
                            nonnumerical applications."
                          </p>
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
                              <Tag text="Python" color="orange" />
                            </div>
                          </div>
                          <Button
                            variant="primary"
                            onClick={() =>
                              navigate("/work-experience/troy-tutors")
                            }
                            className="mt-2"
                          >
                            See Experience: Troy Tutors
                          </Button>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        [ECSE-1010] - Introduction to Electrical, Computer, &
                        Systems Engineering
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>
                            Introduction to Electrical, Computer, and Systems
                            Engineering
                          </h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "An experiment-centric development of the basic
                            analysis tools of Electrical, Computer, and Systems
                            Engineering, emphasizing the concepts and
                            mathematics of analog and digital circuits and
                            electronics, programming, data generation and
                            analysis, and system model development using paper
                            and pencil analysis, simulation, and experiment.
                            Problems, applications, and projects are chosen to
                            lay a solid foundation for core EE and CSE courses."
                          </p>
                        </div>
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
                            <Tag text="Group Projects" color="yellow" />
                          </div>
                          <div className="p-1">
                            <Tag text="Breadboard Circuits" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag text="Circuit Analysis" color="orange" />
                          </div>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/work-experience/troy-tutors")
                          }
                          className="mt-2"
                        >
                          See Experience: Troy Tutors
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        [ENGR-1400] - Engineering Communications
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Engineering Communications</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "This is an undergraduate introductory course
                            covering basic concepts and skills in engineering
                            communication. Topics include technical writing,
                            project planning and proposal writing, data
                            visualization, system modeling and simulation,
                            engineering graphics and CAD, and effective uses of
                            software tools."
                          </p>
                        </div>
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
                            <Tag text="Siemens NX" color="orange" />
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        [MATH-1010] - Calculus I
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Calculus I</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "Functions, limits, continuity, derivatives,
                            implicit differentiation, related rates, maxima and
                            minima, elementary transcendental functions,
                            introduction to definite integral with applications
                            to area and volumes of revolution."
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        [IHSS-1700] - Songwriting Workshop
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Songwriting Workshop</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "A course designed for students to develop their own
                            voice as a songwriter. The course surveys the
                            methods of successful songwriters, highlighting
                            aspects of melody, lyrics, harmonic progression,
                            story-telling, audience, and social context.
                            Students develop a portfolio of their own original
                            songs and lyrics, presented weekly and performed in
                            a studio or live setting at the end of the term."
                          </p>
                        </div>
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
                            <Tag text="Group Projects" color="yellow" />
                          </div>
                          <div className="p-1">
                            <Tag text="Student Presentations" color="yellow" />
                          </div>
                          <div className="p-1">
                            <Tag text="FL Studio" color="orange" />
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
              <Col>
                <div className="mb-4">
                  <h4 className="mb-2">Spring 2022</h4>
                  <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        [CSCI-1200] - Data Structures
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Data Structures</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "Programming concepts: functions, parameter passing,
                            pointers, arrays, strings, structs, classes,
                            templates. Mathematical tools: sets, functions, and
                            relations, order notation, complexity of algorithms,
                            proof by induction. Data structures and their
                            representations: data abstraction and internal
                            representation, sequences, trees, binary search
                            trees, associative structures. Algorithms: searching
                            and sorting, generic algorithms, iterative and
                            recursive algorithms. Methods of testing correctness
                            and measuring performance."
                          </p>
                        </div>
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
                            <Tag text="C++" color="orange" />
                          </div>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/work-experience/troy-tutors")
                          }
                          className="mt-2"
                        >
                          See Experience: Troy Tutors
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        [ECSE-2610] - Computer Components and Operations
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Computer Components and Operations</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "Design-oriented introduction to computer components
                            and operations. Standard codes, number systems, base
                            conversions, and computer arithmetic. Boolean
                            algebra, minimization and synthesis techniques for
                            combinational and sequential logic. Races, hazards,
                            and asynchronous behavior. Registers, arithmetic
                            logic units, memory structure, buses, and control
                            units. Machine language programming, instruction
                            fetch and execution, input-output devices,
                            interrupts, and microprogram sequencers. Software
                            and hardware tools."
                          </p>
                        </div>
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
                            <Tag text="Group Projects" color="yellow" />
                          </div>
                          <div className="p-1">
                            <Tag text="VHDL" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag text="Boolean Logic" color="orange" />
                          </div>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/work-experience/troy-tutors")
                          }
                          className="mt-2"
                        >
                          See Experience: Troy Tutors
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        [MATH-1020] - Calculus II
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Calculus II</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "Techniques and applications of integration, polar
                            coordinates, parametric equations, infinite
                            sequences and series, vector functions and curves in
                            space, functions of several variables, and partial
                            derivatives."
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        [PHYS-1100] - Physics I
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Physics I</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "The first semester of a two-semester sequence of
                            interactive courses. Topics include linear and
                            angular kinematics and dynamics, work and energy,
                            momentum and collisions, forces and fields,
                            gravitation, oscillatory motion, waves, sound, and
                            interference. This course includes a lab component
                            that is intended to provide students with hand-on as
                            well as data analysis experience."
                          </p>
                        </div>
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
                            <Tag text="Group Projects" color="yellow" />
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="sophomore" title="Sophomore Year">
            <Row>
              <h2 className="mb-2">Sophomore Year</h2>
              <Col>
                <div className="mb-4">
                  <h4 className="mb-2">Fall 2022</h4>
                  <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        [CSCI-2200] - Foundations of Computer Science
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Foundations of Computer Science</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "This course introduces important mathematical and
                            theoretical tools for computer science, including
                            topics from set theory, combinatorics, and
                            probability theory, and then proceeds to automata
                            theory, the Turing Machine model of computation, and
                            notions of computational complexity. The course will
                            emphasize formal reasoning and proof techniques."
                          </p>
                        </div>
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
                            <Tag text="Group Projects" color="yellow" />
                          </div>
                          <div className="p-1">
                            <Tag text="Boolean Logic" color="orange" />
                          </div>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/work-experience/troy-tutors")
                          }
                          className="mt-2"
                        >
                          See Experience: Troy Tutors
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        [ENGR-2350] - Embedded Control
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Embedded Control</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "Engineering laboratory introduction to the
                            microprocessor as an embedded element of engineering
                            systems. Students simultaneously develop the
                            hardware and software of one or more target systems
                            during the semester. Topics include concepts and
                            practices of microcontroller hardware and software
                            for command, sensing, control, and display.
                            Specifically, this includes control of dynamic
                            systems and sensor interfaces; analog-digital
                            conversion; parallel input/output; driver circuits,
                            modular programming, and subsystem integration."
                          </p>
                        </div>
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
                            <Tag text="Group Projects" color="yellow" />
                          </div>
                          <div className="p-1">
                            <Tag text="Embedded Systems" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag text="C" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag text="Timers" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag text="Encoders" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag text="I2C" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag text="GPIO" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag text="ADC" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag text="Interrupts" color="orange" />
                          </div>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/work-experience/troy-tutors")
                          }
                          className="mt-2"
                        >
                          See Experience: Troy Tutors
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/embedded-systems/embedded-controls-maze")
                          }
                          className="mt-2 mx-2"
                        >
                          See Experience: Car Maze
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        [MATH-2400] - Introduction to Differential Equations
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Introduction to Differential Equations</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "First-order differential equations, second-order
                            linear equations, eigenvalues and eigenvectors of
                            matrices, systems of first-order equations,
                            stability and qualitative properties of nonlinear
                            autonomous systems in the plane, Fourier series,
                            separation of variables for partial differential
                            equations."
                          </p>
                        </div>
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
                            <Tag text="Differential Equations" color="orange" />
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        [BIOL-1010] - Introduction to Biology
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Introduction to Biology</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "Introduction to biological systems. Discussion of
                            problems associated with biological organization,
                            scaling, and hierarchy. Major topics covered include
                            evolution, genetics and medicine, and ecology. The
                            course considers the biological components of
                            various environmental, social, and individual
                            problems. Course is taught using both traditional
                            and research-based pedagogical methods."
                          </p>
                        </div>
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
                            <Tag text="Student Presentations" color="yellow" />
                          </div>
                          <div className="p-1">
                            <Tag text="Group Projects" color="yellow" />
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        [BIOL-1015] - Introduction to Biology Laboratory
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Introduction to Biology Laboratory</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "The goal of this laboratory course is to learn
                            about biology through hands-on, project-based lab
                            activities that engage students in actual biology
                            experiments and procedures - learning biology by
                            actually doing biology."
                          </p>
                        </div>
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
                            <Tag text="Student Presentations" color="yellow" />
                          </div>
                          <div className="p-1">
                            <Tag text="UE5" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag text="Blueprint VSL" color="orange" />
                          </div>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() => navigate("/unreal-engine/genotype")}
                          className="mt-2 mx-2"
                        >
                          See Experience: Genotype
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
              <Col>
                <div className="mb-4">
                  <h4 className="mb-2">Spring 2023</h4>
                  <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        [MATH-2010] - Multivariable Calculus & Matrix Algebra
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Course Title</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "Directional derivatives, maxima and minima, double
                            integrals, line integrals, div and curl, and Green’s
                            Theorem; matrix algebra and systems of linear
                            equations, vectors and linear transformations in
                            R^n, eigenvectors and eigenvalues, applications in
                            engineering and science."
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        [ECSE-2010] - Electric Circuits
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Electric Circuits</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "Techniques for the analysis and simulation of
                            linear electric circuits and measurements of their
                            properties. Topics include resistive and
                            energy-storage elements, controlled sources and
                            operational amplifiers, systematic analysis methods,
                            AC steady state, power and three-phase systems,
                            magnetic coupling and transformers, transients,
                            s-plane representation and analysis, frequency
                            response, and Laplace transform and computer-aided
                            methods."
                          </p>
                        </div>
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
                            height: "fit-content",
                          }}
                        >
                          <div className="p-1">
                            <Tag text="Student Presentations" color="yellow" />
                          </div>
                          <div className="p-1">
                            <Tag text="Group Projects" color="yellow" />
                          </div>
                          <div className="p-1">
                            <Tag text="Breadboard Circuits" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag
                              text="Circuit Design & Analysis"
                              color="orange"
                            />
                          </div>
                          <div className="p-1">
                            <Tag text="Filter Design" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag text="Differential Equations" color="orange" />
                          </div>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/work-experience/troy-tutors")
                          }
                          className="mt-2"
                        >
                          See Experience: Troy Tutors
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/circuit-design/heartbeat-sensor")
                          }
                          className="mt-2 mx-2"
                        >
                          See Experience: Heartbeat Sensor
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        [PHYS-1200] - Physics II
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Physics II</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "The second semester of the two-semester sequence of
                            interactive courses. Topics include electric and
                            magnetic forces and fields, Gauss’s Law, dc and ac
                            circuits, Ampere’s Law and Faraday’s Law,
                            electromagnetic radiation, physical optics, and
                            quantum physics. This course includes a lab
                            component that is intended to provide students with
                            hand-on as well as data analysis experience."
                          </p>
                        </div>
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
                            <Tag
                              text="Waveform Analysis through Scoping"
                              color="orange"
                            />
                          </div>
                          <div className="p-1">
                            <Tag text="Circuit Analysis" color="orange" />
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        [ECSE-2900] - ECSE Enrichment Seminar
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>ECSE Enrichment Seminar</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "This seminar course addresses a range of issues
                            involving engineering and public policy, innovation
                            systems and economic development, and the National
                            Academy’s Engineering Grand Challenges for the 21st
                            Century."
                          </p>
                        </div>
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
                            <Tag text="Student Presentations" color="yellow" />
                          </div>
                          <div className="p-1">
                            <Tag text="Group Projects" color="yellow" />
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="junior" title="Junior Year">
            <Row>
              <h2 className="mb-2">Junior Year</h2>
              <Col>
                <div className="mb-4">
                  <h4 className="mb-2">Summer 2023</h4>
                  <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        [ECSE-2660] - Computer Architechture, Networks, &
                        Operating Systems
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>
                            Computer Architechture, Networks, & Operating
                            Systems
                          </h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "Quantitative basis of modern computer architecture,
                            processor design, memory hierarchy, and input/output
                            methods. Layered operating system structures,
                            process and storage management. Layered network
                            organization, network protocols, switching, local
                            and wide area networks. Examples from Unix and the
                            Internet."
                          </p>
                        </div>
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
                            <Tag text="Assembly" color="orange" />
                          </div>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/work-experience/troy-tutors")
                          }
                          className="mt-2"
                        >
                          See Experience: Troy Tutors
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        [ENGR-2050] - Introduction to Engineering Design
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Introduction to Engineering Design</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "A first course in engineering design which
                            emphasizes creativity, teamwork, communication, and
                            work across engineering disciplines. Students are
                            introduced to the design process through a
                            semester-long project which provides a
                            design-build-test experience. Oral and written
                            communication are important elements of the course."
                          </p>
                        </div>
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
                            <Tag text="Student Presentations" color="yellow" />
                          </div>
                          <div className="p-1">
                            <Tag text="Group Projects" color="yellow" />
                          </div>
                          <div className="p-1">
                            <Tag text="Embedded Systems" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag text="C++" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag text="Blender" color="orange" />
                          </div>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/embedded-systems/ied-handy-helper")
                          }
                          className="mt-2"
                        >
                          See Experience: Handy Helper
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        [CSCI-2600] - Principles of Software
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Principles of Software</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "A study of important concepts in software design,
                            implementation, and testing. Topics include
                            specification, abstraction with classes, design
                            principles and patterns, testing, refactoring, the
                            software development process, GUI and event-driven
                            programming, and cloud-based programming. The course
                            also introduces implementation and testing tools,
                            including IDEs, revision control systems, and other
                            frameworks. The overarching goal of the course is
                            for students to learn how to write correct and
                            maintainable software."
                          </p>
                        </div>
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
                            <Tag text="Java" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag text="Git" color="orange" />
                          </div>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/work-experience/troy-tutors")
                          }
                          className="mt-2"
                        >
                          See Experience: Troy Tutors
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        [ECSE-2500] - Engineering Probability
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Engineering Probability</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "Axioms of probability, joint and conditional
                            probability, random variables, probability density,
                            mass, and distribution functions, functions of one
                            and two random variables, characteristic functions,
                            sequences of independent random variables, central
                            limit theorem, and laws of large numbers.
                            Applications to electrical and computer engineering
                            problems."
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        [COGS-4960] - Extended Cognition
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Extended Cognition</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>{" "}
                            An advanced course concerned with selected topics in
                            cognitive science.
                          </p>
                        </div>
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
                            <Tag text="Group Projects" color="yellow" />
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
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/unreal-engine/chinese-room")
                          }
                          className="mt-2"
                        >
                          See Experience: Chinese Room
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
              <Col>
                <div className="mb-4">
                  <h4 className="mb-2">Spring 2024</h4>
                  <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        [ECSE-2050] - Introduction to Electronics
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Introduction to Electronics</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "The physics and operation of semiconductor diodes,
                            bipolar junction transistors, and field-effect
                            transistors in elementary analog circuits. Non-ideal
                            operational amplifier characteristics. Amplifier
                            biasing, small-signal analysis, and frequency
                            response. Elementary bipolar and MOSFET digital
                            circuits."
                          </p>
                        </div>
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
                            <Tag text="Group Projects" color="yellow" />
                          </div>
                          <div className="p-1">
                            <Tag text="Circuit Analysis" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag
                              text="Waveform Analysis through Scoping"
                              color="orange"
                            />
                          </div>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/work-experience/troy-tutors")
                          }
                          className="mt-2"
                        >
                          See Experience: Troy Tutors
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        [CSCI-2300] - Introduction to Algorithms
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Introduction to Algorithms</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "Data structures and algorithms, and the
                            mathematical techniques necessary to design and
                            analyze them. Basic data structures: lists,
                            associative structures, trees. Mathematical
                            techniques for designing algorithms and analyzing
                            worst-case and expected-case algorithm efficiency.
                            Advanced data structures: balanced trees, tries,
                            heaps, priority queues, graphs. Searching, sorting.
                            Algorithm design techniques: dynamic programming,
                            greedy algorithms, divide-and-conquer, backtracking.
                            Example graph, string, geometric, and numeric
                            algorithms."
                          </p>
                        </div>
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
                            <Tag text="Python" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag
                              text="Algorithm Design & Analysis"
                              color="orange"
                            />
                          </div>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/work-experience/troy-tutors")
                          }
                          className="mt-2"
                        >
                          See Experience: Troy Tutors
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        [COGS-2120] - Introduction to Cognitive Science
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Introduction to Cognitive Science</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "This course is an introduction to the new and
                            quickly growing field of cognitive science.
                            Cognitive Science is a highly interdisciplinary
                            field of study of mind at the intersection of
                            philosophy, psychology, computer science,
                            neuroscience, linguistics, and anthropology."
                          </p>
                        </div>
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
                            <Tag text="UE5" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag text="Blueprint VSL" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag text="UE5 AI Tools" color="orange" />
                          </div>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/unreal-engine/npc-analysis")
                          }
                          className="mt-2"
                        >
                          See Experience: NPC Analysis
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        [PSYC-1200] - Introduction to Psychology
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Introduction to Psychology</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "This course embraces the science of psychology. The
                            aim is for students to learn how using the
                            scientific method provides important insights about
                            mind, brain, and behavior. This course integrates
                            research on neuroscience throughout all the standard
                            topics in an introductory course in psychology. The
                            course presents advances across all subfields of
                            psychology. In addition to standard exams, there are
                            online assignments for each chapter and online
                            laboratory experiences."
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        [ECSE-4660] - Internetworking of Things
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Internetworking of Things</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "In-depth hands-on study of the technologies and
                            protocols involved in building the
                            Internet-of-Things (IoT), with specific focus on
                            networking at the edge of the Internet. Topics
                            include wireless communication and link layer
                            technologies, multi-access and scheduling
                            mechanisms, mobility models, routing in disconnected
                            networks, energy-efficient edge networking, loss
                            tolerant transport protocols, IoT security, data
                            aggregation, and their applications to emerging
                            areas such as vehicular networks, RFID systems and
                            smart buildings."
                          </p>
                        </div>
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
                            <Tag text="Student Presentations" color="yellow" />
                          </div>
                          <div className="p-1">
                            <Tag text="Python" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag text="HTTP" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag text="Zigbee" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag text="TShark" color="orange" />
                          </div>
                        </div>
                        <Button
                          variant="primary"
                          onClick={() =>
                            navigate("/internet-of-things/verified-clock-in")
                          }
                          className="mt-2"
                        >
                          See Experience: Verified Clock In
                        </Button>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="senior" title="Senior Year">
            <Row>
              <h2 className="mb-2">Senior Year</h2>
              <Col>
                <div className="mb-4">
                  <h4 className="mb-2">Fall 2024</h4>
                  <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        [ENGR-4010] - Professional Development: Leadership
                        Competencies
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>
                            Professional Development: Leadership Competencies
                          </h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "Students will study issues associated with working
                            in teams in a modern work environment. Various
                            styles of leadership, the definitions of power and
                            empowerment and their applications in industry and
                            team settings will be studied. Additionally, other
                            topics to be explored include vision, values and
                            attitudes, and organizational culture. The course
                            format will include small and large group
                            discussions, case studies, experiential exercises,
                            and participation from industry guests."
                          </p>
                        </div>
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
                            <Tag text="Student Presentations" color="yellow" />
                          </div>
                          <div className="p-1">
                            <Tag text="Group Projects" color="yellow" />
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        [STSO-4100] - Professional Development: Technical Issues
                        & Solutions
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>
                            Professional Development: Technical Issues &
                            Solutions
                          </h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "This course focuses on increasing students’
                            knowledge concerning the impact of non-technical
                            issues on the viability of technical (engineering)
                            designs and solutions. The non-technical issues to
                            be considered include the cognitive and physical
                            strengths and limitations of people in the chain
                            spanning from product/equipment
                            designers/manufacturers to end users, as well as
                            economic, environmental, cultural, political,
                            ethical, health and safety, and societal influences.
                            During the course, students will read and discuss
                            articles and case studies in which the technical
                            solution pursued did not have the desired effect, or
                            led to disaster. Possible explanations include a
                            failure to take into account the environmental,
                            economic, socio-cultural, and/or political issues
                            associated with the technology’s ultimate usage."
                          </p>
                        </div>
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
                            <Tag text="Student Presentations" color="yellow" />
                          </div>
                          <div className="p-1">
                            <Tag text="Group Projects" color="yellow" />
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        [ECSE-4900] - Multidisciplinary Capstone Design
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Multidisciplinary Capstone Design</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "A capstone design experience that engages students
                            from biomedical, computer and systems, electrical,
                            industrial, materials, and mechanical engineering on
                            teams in an open-ended engineering design problem in
                            preparation for professional practice. With the
                            guidance of a multidisciplinary team of faculty
                            members and instructional support staff, students
                            apply knowledge and skills from prior coursework.
                            This is a communication-intensive course."
                          </p>
                        </div>
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
                            <Tag text="Student Presentations" color="yellow" />
                          </div>
                          <div className="p-1">
                            <Tag text="Group Projects" color="yellow" />
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        [ECSE-4770] - Computer Hardware Design
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Computer Hardware Design</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "Digital design methodologies including timing chain
                            and counter based “hardwired” microprogram design,
                            modules, and modular design. The course bridges LSI
                            and MSI design treating microprocessors, and I/O
                            interfacing. Bus protocol standards, interrupts,
                            direct memory access, priority arbitration,
                            asynchronous timing, and overlap or double
                            buffering. Specific examples of design include
                            controllers for disks, cassettes, video systems, and
                            stepping motors. Course includes a laboratory with
                            access to FPGAs and microprocessors."
                          </p>
                        </div>
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
                            <Tag text="Assembly" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag text="SystemVerilog" color="orange" />
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        [ECSE-4790] - Microprocessor Systems
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Microprocessor Systems</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "Hardware and software for real-time
                            microprocessor-based digital systems. Basic concepts
                            and operations of on-chip components related to
                            digital system functionality. Architectures,
                            instructions sets, and interfacing with peripherals
                            through serial or parallel ports. Introduction to
                            32-bit machines with in-depth treatment of 16- and
                            8-bit machines. Emphasis on C language
                            cross-compilers. Laboratory exercises are included
                            to demonstrate hardware and software development
                            techniques practiced in industry."
                          </p>
                        </div>
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
                            <Tag text="Group Projects" color="yellow" />
                          </div>
                          <div className="p-1">
                            <Tag text="Embedded Systems" color="orange" />
                          </div>
                          <div className="p-1">
                            <Tag text="C" color="orange" />
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        [CSCI-4430] - Programming Languages
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Programming Languages</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "This course is a study of the important concepts
                            found in current programming languages. Topics
                            include language processing (lexical analysis,
                            parsing, type-checking, interpretation and
                            compilation, run-time environment), the role of
                            abstraction (data abstraction and control
                            abstraction), programming paradigms (procedural,
                            functional, object-oriented, logic-oriented,
                            generic), and formal language definition."
                          </p>
                        </div>
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
                            <Tag text="Group Projects" color="yellow" />
                          </div>
                          <div className="p-1">
                            <Tag text="Haskell" color="orange" />
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
              <Col>
                <div className="mb-4">
                  <h4 className="mb-2">Spring 2025</h4>
                  <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        [ECSE-2410] - Signals & Systems
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Signals & Systems</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "Time and frequency-domain representation of
                            continuous- and discrete-time signals and systems.
                            Response of linear, time-invariant systems.
                            Convolution, Fourier series, Fourier transform,
                            Laplace transform, and z-transform. Applications in
                            communication, feedback control, and filtering."
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        [COGS-4640] - Intelligent Virtual Agents
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Intelligent Virtual Agents</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "This course introduces various computational
                            approaches for creating intelligent conversational
                            agents. This course will take the form of a
                            combination of lectures, presentations by students,
                            class discussions, and independent study."
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        [COGS-4210] - Cognitive Modeling
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Cognitive Modeling</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "Recent advances in Cognitive Science, Computer
                            Science and Mathematics, have resulted in the
                            ability to develop computer programs that implement
                            Probabilistic Cognitive Models (PCMs). The cognitive
                            models that this course covers are based on
                            approximate Bayesian Inference implemented by Markov
                            Chain Monte Carlo and Variational techniques that
                            have made this approach tractable. The objective of
                            this course is to enable the student to develop
                            models of cognition in a Bayesian framework."
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        [CSCI-4470] - Open Source Software
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Open Source Software</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "Open source communities are proven development
                            engines for creating large diverse user-focused
                            software; however, these communities are not easily
                            supported by traditional models of software
                            development. Expected behaviors, tools, and
                            licensing are uniquely adapted to the needs of an
                            often volunteer workforce, distributed and
                            asynchronous development, and meritocracy. In this
                            course, students use and develop open source
                            software, create open source repositories, and
                            participate in open source communities."
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        [CSCI-4210] - Operating Systems
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <h5>Operating Systems</h5>
                          <p style={{ marginBottom: "4px" }}>
                            <h6 style={{ marginBottom: "0px" }}>
                              Course Description From RPI's Course Catalog:
                            </h6>
                            "Discussion of various aspects of computer operating
                            systems design and implementation. Topics include
                            I/O programming, concurrent processes and
                            synchronization problems, process management and
                            scheduling of processes, virtual memory management,
                            device management, file systems, deadlock problems,
                            system calls, and interprocess communication.
                            Programming projects are required."
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
}

export default CoursesOverview;
