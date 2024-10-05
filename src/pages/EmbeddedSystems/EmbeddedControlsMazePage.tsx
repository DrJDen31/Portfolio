import { Accordion, Col, Container, Row } from "react-bootstrap";

import robotcar from "../../content/images/robotcar.png";

function EmbeddedControlsMazePage() {
  return (
    <Container className="my-4">
      <div>
        <h2>Robotic Car Maze Traversal</h2>
        <h4 style={{ color: "gray" }} className="pb-2">
          Embedded Control
        </h4>
        <p>Fall Semester, 2022</p>
        <p>
          The final project for Embedded Control was to use the concepts we've
          learned and implemented so far, such as the ultrasonic sensor, to
          implement any strategy for traversing a maze. Both the solution and
          the implementation of the solution were left up to us. This was a team
          project where I worked with one other partner. I suggested we can use
          a simple strategy to traverse the maze; if you hug the left (or right)
          wall of a maze, due to it's topology, you will eventually find the
          exit. So, all we need to do is find a way to program the car to hug
          the left wall. We did this using two methods:
          <ul>
            <li>
              A left facing ultrasonic sensor to keep the car hugging the left
              wall
            </li>
            <li>
              Front bumper buttons to detect any collisions into the walls in
              front
            </li>
          </ul>
          Together, this, along with some control logic, allows the car to hug
          the left wall and find the exit.
        </p>
        <Accordion alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>High Level Logic</Accordion.Header>
            <Accordion.Body>
              <p>
                The main control logic has to handle two main cases:
                <ol>
                  <li>Failure to hug the left wall</li>
                  <li>Collision with wall in front</li>
                </ol>
                When either of these cases occurs, the car needs to adjust its
                heading. Otherwise, it can continue straight.
              </p>
              <p>
                When the car no longer is hugging the left wall, we know that
                the maze turns left. Since the left wall used to be present but
                no longer is, a passage has opened up to the left. In order to
                hug the left wall, the car must make a 90 degree left turn in
                place and continue straight. Some offset is added as the car
                won't detect the wall at first (as there is a passage that we
                had just been taking), and so the car will continue straight for
                some distance before resuming its left wall checking.
              </p>
              <p>
                When a front end collision has occured, we know the maze takes a
                right turn. This is true as there is no passage to the left (as
                the wall is still detected), and there is no passage forward. In
                this case, the car must reverse to the desired distance from
                wall (explained more in the ultrasonic sensor section), and make
                a 90 degree right turn in place. The car may then continue
                straight again.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Bumper Buttons</Accordion.Header>
            <Accordion.Body>
              <p>
                The front facing bumper buttons are used to detect when the car
                has hit a wall. These buttons are read in as GPIO pins, which is
                done through periodic polling. Once a pin is read as high, the
                turn right in place routine will begin.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Ultrasonic Sensor</Accordion.Header>
            <Accordion.Body>
              <p>
                The ultrasonic sensor is configured to read the distance from
                the car to the wall to its left. A desired distance is set as
                well. If the car is too far away from the wall (distance +
                acceptable_offset &gt; desired distance), the car should
                slightly steer to the left. If the car is too close to the wall
                (distance - acceptable_offset &lt; desired distance), the car
                should slightly steer to the right. This steering is done by
                varying the wheel speed. The sensor communicates the data with
                the car using I2C.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Wheel Speed</Accordion.Header>
            <Accordion.Body>
              <p>
                Each wheel is controlled using Pulse Width Modulation (PWM). By
                setting the duty cycle, the speed of the wheel is set. Each
                wheel is controlled independently, allowing the car to steer by
                setting the wheels to different speeds. If the left wheel is
                going slower, the car turns to the left, and vice-versa.
                Additionally, the car can turn in place by setting the wheels to
                the same speed, but setting one to drive in the reverse
                direction. Setting the left wheel into reverse causes a left
                turn, and vice-versa.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Row>
        <Col></Col>
        <Col md="auto">
          <img
            src={robotcar}
            alt="RobotCar"
            width="285"
            height="315"
            className="mt-4"
          ></img>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col md="auto">
          <p>Here is the car configured to traverse the maze.</p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default EmbeddedControlsMazePage;
