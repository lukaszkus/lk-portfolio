import { useContext, useState, useEffect } from "react";
import Context from "../../context/context";
import { animateScroll as scroll } from "react-scroll";
import { VscArrowUp } from "react-icons/vsc";

import { ScrollButton } from "./ScrollBtn.style";

const transition = { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] };

function ScrollBtn() {
  const { toggleCursor } = useContext(Context);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
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

  const slide = {
    hidden: { opacity: 0, y: 72, transition: { ...transition } },
    show: { opacity: 1, y: 0, transition: { ...transition } },
    hover: { y: -6, transition: { ...transition } },
  };

  return (
    <ScrollButton onClick={scrollToTop} variants={slide} initial="hidden" animate={isVisible ? "show" : "hidden"} whileHover="hover" whileTap="hover" exit="hidden" onMouseEnter={toggleCursor} onMouseLeave={toggleCursor}>
      <VscArrowUp size="2em" color="white" />
    </ScrollButton>
  );
}

export default ScrollBtn;
