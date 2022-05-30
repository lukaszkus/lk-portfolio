import { createContext, useState, useEffect } from "react";
import AOS from "aos";

const Context = createContext();

export function ContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState(0);

  //Animate On Scroll
  useEffect(() => {
    AOS.init();
  }, []);

  //Menu toggle
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //Parallax effect
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);
  return (
    <Context.Provider
      value={{
        isOpen,
        setIsOpen,
        offset,
        setOffset,
        toggle,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
