import { useEffect, useState } from "react";

function getTagColorByCategory({ category }) {
  const [color, setColor] = useState("#ABCABC");

  useEffect(() => {
    console.log(`${category}`);
    switch (category) {
      case "experience-type":
        setColor("#123123");
      case "skill":
        setColor("#AAAAAA");
    }
  }, []);

  return color;
}

export default getTagColorByCategory;
