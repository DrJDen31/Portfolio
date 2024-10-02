import { useNavigate } from "react-router-dom";
import WIP from "../components/WIP";
import { useState } from "react";
import { ToggleButton } from "react-bootstrap";

function ExperienceOverview() {
  const navigate = useNavigate();

  const [activeTags, setActiveTags] = useState([]);
  const allTags = [
    "work",
    "project",
    "rpi",
    "software",
    "hardware",
    "embedded",
    "iot",
    "unreal_engine",
    "app_development",
    "mobile",
    "web",
    "c",
    "c++",
    "python",
    "typescript",
  ];

  //Cards for all experiences, sorted by topic
  //Cards have a thumbnail, an title, a short description, are links to the pages, and have associated tags
  //Have additional controls to filter experiences by tags

  return (
    <div>
      <WIP />
      {/*allTags.map((tag) => (
        <ToggleButton></ToggleButton>
      ))*/}
    </div>
  );
}

export default ExperienceOverview;
