import { useContext } from "react";
import Context from "../../context/context";
import { NavLink as Link } from "react-router-dom";

import { portfolioItems } from "../../utils";

import {
  PContainer,
  PBoxContainer,
  PBox,
  PBoxImg,
  PBoxOverlay,
  PBoxText,
  PBoxTitle,
  PBoxCat,
} from "./StyledPortfolio";
import { AnimatePresence } from "framer-motion";

function Portfolio() {
  const { portfolioList, setPortfolioList, types, filterPortfolioList } =
    useContext(Context);

  return (
    <div>
      <div>
        {types.map((type, index) => {
          return (
            <button onClick={() => filterPortfolioList(type)} key={index}>
              {type}
            </button>
          );
        })}
        <button onClick={() => setPortfolioList(portfolioItems)}>All</button>
      </div>
      <PContainer
        id="portfolio"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        exit={{ opacity: 0, y: 200 }}
        viewport={{ once: true }}>
        {portfolioList.map((item) => (
          <AnimatePresence exitBeforeEnter>
            <PBoxContainer
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.6,
                },
              }}
              exit={{ opacity: 0 }}>
              <Link to={item.path}>
                <PBox
                  bgColor={item.bgColor}
                  transform={item.transform}
                  height={item.height}>
                  <PBoxImg src={item.cover} alt={item.title}></PBoxImg>
                  <PBoxOverlay overlayColor={item.overlayColor}>
                    <PBoxText>
                      <PBoxTitle>{item.title}</PBoxTitle>
                      <PBoxCat>{item.category}</PBoxCat>
                    </PBoxText>
                  </PBoxOverlay>
                </PBox>
              </Link>
            </PBoxContainer>
          </AnimatePresence>
        ))}
      </PContainer>
    </div>
  );
}

export default Portfolio;
