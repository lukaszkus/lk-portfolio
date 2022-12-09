import { createContext, useState, useEffect } from "react";
import AOS from "aos";

import { portfolioItems } from "../utils";
const Context = createContext();

export function ContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState(0);
  const [portfolioList, setPortfolioList] = useState(portfolioItems);

  //Animate On Scroll
  useEffect(() => {
    AOS.init();
  }, []);

  //Menu toggle
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //Filter porfolio items
  const types = [...new Set(portfolioItems.map((item) => item.type))];

  const filterPortfolioList = (type) => {
    const newPortfolioList = portfolioItems.filter((item) => {
      return item.type === type;
      // comparing category for displaying data
    });
    setPortfolioList(newPortfolioList);
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
        portfolioList,
        setPortfolioList,
        types,
        filterPortfolioList,
      }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
