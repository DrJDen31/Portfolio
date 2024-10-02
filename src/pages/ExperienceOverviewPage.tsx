import { useNavigate } from "react-router-dom";
import WIP from "../components/WIP";

function ExperienceOverview() {
  const navigate = useNavigate();

  //Cards for all experiences, sorted by topic
  //Cards have a thumbnail, an title, a short description, are links to the pages, and have associated tags
  //Have additional controls to filter experiences by tags

  return (
    <div>
      <WIP />
    </div>
  );
}

export default ExperienceOverview;
