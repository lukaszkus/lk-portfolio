import { useContext } from "react";
import Context from "../../context/context";

import { Circle, Dot } from "./CustomCursor.style";

const CustomCursor = () => {
  const { mouseX, mouseY, cursor } = useContext(Context);

  const circle = {
    default: {
      x: mouseX - 60,
      y: mouseY - 60,
    },
    hover: {
      x: mouseX - 60,
      y: mouseY - 60,
      scale: 0,
      opacity: 0,
    },
  };

  const dot = {
    default: {
      x: mouseX - 4,
      y: mouseY - 4,
    },
    hover: {
      x: mouseX - 4,
      y: mouseY - 4,
      scale: 5,
      // border: "0.5px solid #ffffff",
    },
  };

  return (
    <>
      <Circle variants={circle} animate={cursor.active ? "hover" : "default"} />
      <Dot variants={dot} animate={cursor.active ? "hover" : "default"} />
    </>
  );
};

export default CustomCursor;
