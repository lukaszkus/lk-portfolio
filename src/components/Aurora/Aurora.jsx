import { useEffect } from "react";
import { useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { Wrapper } from "./Aurora.style";

const COLORS_TOP = ["#ae49dd", "#228fe8", "#e84589", "#1ad8e9"];

const Aurora = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 15,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(170% 115% at 25% 100%, #242930 45%, ${color})`;

  return <Wrapper style={{ backgroundImage }} />;
};

export default Aurora;
