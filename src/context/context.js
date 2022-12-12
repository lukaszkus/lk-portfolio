import { createContext, useState, useEffect } from "react";
import useToggle from "../hooks/useToggle";
import AOS from "aos";

import { portfolioItems } from "../utils";
const Context = createContext();

export function ContextProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useToggle();
  const [offset, setOffset] = useState(0);
  const [portfolioList, setPortfolioList] = useState(portfolioItems);

  //Animate On Scroll
  useEffect(() => {
    AOS.init();
  }, []);

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
        isMenuOpen,
        setIsMenuOpen,
        offset,
        setOffset,
        portfolioList,
        setPortfolioList,
        types,
        filterPortfolioList,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
