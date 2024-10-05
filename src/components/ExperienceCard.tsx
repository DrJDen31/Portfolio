import { Button, Card } from "react-bootstrap";
import CardImage from "./CardImage";
import { useNavigate } from "react-router-dom";

import Tag from "./Tag";

function ExperienceCard({ imageSource, title, text, tags, navigationPath }) {
  const navigate = useNavigate();
  return (
    <Card className="mt-2" style={{ width: "18rem", height: "26rem" }}>
      <CardImage source={imageSource} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <div
          style={{
            display: "flex",
            flex: "none",
            flexDirection: "row",
            marginBottom: "8px",
          }}
        >
          {tags.map((tag) => (
            <div className="px-1">
              <Tag text={tag.text} color={tag.color} />
            </div>
          ))}
        </div>
        <Button variant="primary" onClick={() => navigate(`${navigationPath}`)}>
          More Info
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
