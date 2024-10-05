import { Col, Container, Row } from "react-bootstrap";

import moogpic from "../../content/images/IMG_7301 (1).jpg";
import troytutors from "../../content/images/tt.png";
import ExperienceCard from "../../components/ExperienceCard";

function WorkExperienceOverviewPage() {
  return (
    <Container>
      <div>
        <h3 className="my-2">Work Experience</h3>
        <Row>
          <Col></Col>
          <Col md="auto">
            <ExperienceCard
              imageSource={moogpic}
              title="Moog"
              text="Fall 2023 Engineering Internship in Buffalo, NY as a part of
                  the ZQuip team for Moog Construction"
              tags={[
                {
                  text: "Work",
                  color: "#80FF86",
                },
                {
                  text: "Python",
                  color: "orange",
                },
                {
                  text: "Bash",
                  color: "orange",
                },
                {
                  text: "CODESYS",
                  color: "orange",
                },
              ]}
              navigationPath="/work-experience/moog"
            />
          </Col>
          <Col></Col>
          <Col md="auto">
            <ExperienceCard
              imageSource={troytutors}
              title="Troy Tutors"
              text="Part time tutor through Troy Tutors in CS and CSE courses,
                  such as Data Structures and CANOS"
              tags={[
                {
                  text: "Work",
                  color: "#80FF86",
                },
                {
                  text: "DS",
                  color: "#80F9FF",
                },
                {
                  text: "CANOS",
                  color: "#80F9FF",
                },
              ]}
              navigationPath="/work-experience/troy-tutors"
            />
          </Col>
          <Col></Col>
        </Row>
      </div>
    </Container>
  );
}

export default WorkExperienceOverviewPage;
