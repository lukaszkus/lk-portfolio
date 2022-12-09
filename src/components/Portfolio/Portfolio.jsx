import { useContext } from "react";
import Context from "../../context/context";
import { NavLink as Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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
  Filter,
  // Heading,
} from "./StyledPortfolio";

import { Button } from "../";

function Portfolio() {
  const { portfolioList, setPortfolioList, types, filterPortfolioList } =
    useContext(Context);

  return (
    <>
      <Filter
        initial={{ opacity: 0, y: 200 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
          },
        }}
        exit={{ opacity: 0, y: 200 }}
        viewport={{ once: true }}>
        {types.map((type, index) => {
          return (
            <Button
              click={() => filterPortfolioList(type)}
              key={index}
              label={type}
            />
          );
        })}
        <Button click={() => setPortfolioList(portfolioItems)} label="all" />
      </Filter>
      <PContainer
        id="portfolio"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
          },
        }}
        exit={{ opacity: 0, y: 200 }}
        viewport={{ once: true }}>
        {/* <Heading>Projects</Heading> */}

        {portfolioList.map((item) => (
          <AnimatePresence exitBeforeEnter>
            <PBoxContainer
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 1,
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
    </>
  );
}

export default Portfolio;
