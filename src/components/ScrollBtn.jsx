import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import breakpoint from "../utils/breakpoints";
import chevron from "../assets/chevron.svg";

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}`;

const ScrollButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 1.2rem;
  padding: 5px;
  background: none;
  border: none;
  animation: ${fadeIn} 700ms ease-in-out 0.2s both;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  transform: rotate(180deg);
  z-index: 1000;
  &:hover {
    transform: rotate(180deg) scale(1.1);
  }

  @media ${breakpoint.tablet} {
    bottom: 2rem;
    right: 2.2rem;
  }
`;

const Arrow = styled.img.attrs({
  src: `${chevron}`,
})`
  width: 30px;
`;

function ScrollBtn() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <ScrollButton onClick={scrollToTop}>
          <Arrow />
        </ScrollButton>
      )}
    </>
  );
}

export default ScrollBtn;
