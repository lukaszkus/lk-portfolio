import { createContext, useState } from "react";
import useToggle from "../hooks/useToggle";
import { useCycle } from "framer-motion";

import { portfolioItems } from "../utils";
const Context = createContext();

export function ContextProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useToggle();
  const [open, cycleOpen] = useCycle(false, true);
  const [offset, setOffset] = useState(0);
  const [portfolioList, setPortfolioList] = useState(portfolioItems);

  //Filter porfolio items
  const types = [...new Set(portfolioItems.map((item) => item.type))];

  const filterPortfolioList = (type) => {
    const newPortfolioList = portfolioItems.filter((item) => {
      return item.type === type;
      // comparing category for displaying data
    });
    setPortfolioList(newPortfolioList);
  };

  return (
    <Context.Provider
      value={{
        open,
        cycleOpen,
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
