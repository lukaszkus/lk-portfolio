import { useState, useEffect } from "react";
import styled from "styled-components";

import todo from "../assets/todo.png";

const Hero = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  // background-image: linear-gradient(45deg, #b721ff 0%, #21d4fd 100%);
`;

const Img = styled.img.attrs({
  src: `${todo}`,
  alt: "test",
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: -1;
  transform: translateY(${(props) => props.offset * 1}px);
`;

function TodoApp() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  // const transY = `translateY(${offset * 0.5}px)`;
  // console.log(transY);

  return (
    <Hero>
      <Img offset={offset} alt="test" />
      {/* <img
        src="../images/todo.png"
        alt="test"
        className="parallax"
        style={{
          filter: `blur(4px)`,
          transform: `translateY(${offset * 0.5}px)`,
        }}
      /> */}
      <div className="text-wrapper">
        <h1 className="headline">Parallax</h1>
        <h2 className="sub-headline">Scrolling effect</h2>
      </div>
    </Hero>
  );
}

export default TodoApp;
