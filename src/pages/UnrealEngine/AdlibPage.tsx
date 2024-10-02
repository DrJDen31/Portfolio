import { useNavigate } from "react-router-dom";
import WIP from "../../components/WIP";

function AdlibPage() {
  const navigate = useNavigate();

  return (
    <div>
      <WIP />
    </div>
  );
}

export default AdlibPage;
