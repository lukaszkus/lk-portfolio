import { createContext, useState } from "react";
import { useCycle } from "framer-motion";
import useMousePosition from "../hooks/useMousePosition";

import { portfolioItems } from "../utils";
const Context = createContext();

export function ContextProvider({ children }) {
  const [open, cycleOpen] = useCycle(false, true);
  const [portfolioList, setPortfolioList] = useState(portfolioItems);
  //mousePosition for CustomCursor
  const { mouseX, mouseY } = useMousePosition();
  const [cursor, setCursor] = useState({ active: false });

  const toggleCursor = () => {
    setCursor(({ active }) => ({ active: !active }));
  };

  //Filter porfolio items
  // const types = [...new Set(portfolioItems.map((item) => item.type))];

  // const filterPortfolioList = (type) => {
  //   const newPortfolioList = portfolioItems.filter((item) => {
  //     return item.type === type;
  //     // comparing category for displaying data
  //   });
  //   setPortfolioList(newPortfolioList);
  // };

  return (
    <Context.Provider
      value={{
        open,
        cycleOpen,
        portfolioList,
        setPortfolioList,
        // types,
        // filterPortfolioList,
        mouseX,
        mouseY,
        cursor,
        toggleCursor,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
