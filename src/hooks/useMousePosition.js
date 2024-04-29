import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({
    mouseX: window.innerWidth / 2,
    mouseY: window.innerHeight / 2,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({
        mouseX: e.clientX,
        mouseY: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return position;
};

export default useMousePosition;
