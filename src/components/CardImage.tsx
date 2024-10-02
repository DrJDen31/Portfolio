import { Image } from "react-bootstrap";

function CardImage({ source }) {
  return (
    <div
      style={{
        height: "200px",
        width: "287px",
      }}
    >
      <img
        src={source}
        style={{
          height: "190px",
          width: "277px",
          marginTop: "5px",
          marginLeft: "5px",
          objectFit: "cover",
          borderRadius: "5px",
        }}
      />
    </div>
  );
}
export default CardImage;
