import { useNavigate } from "react-router-dom";
import WIP from "../../components/WIP";

function MoogPage() {
  const navigate = useNavigate();

  return (
    <div>
      <WIP />
    </div>
  );
}

export default MoogPage;
