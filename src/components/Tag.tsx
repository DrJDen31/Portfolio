import getTagColorByCategory from "../lib/getTagColorByContainer";

function Tag({ text, color }) {
  return (
    <div
      style={{
        height: "fit-content",
        maxHeight: "25px",
        width: "fit-content",
        maxWidth: "150px",
        background: `${color}`,
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "self-start",
        borderRadius: "10px",
        textOverflow: "clip",
        overflow: "hidden",
      }}
    >
      <p className="text-black mx-1">{text}</p>
    </div>
  );
}

export default Tag;
