import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { VscArrowUp } from "react-icons/vsc";

import { ScrollButton } from "./ScrollBtn.style";

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
          <VscArrowUp size="2em" color="white" />
        </ScrollButton>
      )}
    </>
  );
}

export default ScrollBtn;
