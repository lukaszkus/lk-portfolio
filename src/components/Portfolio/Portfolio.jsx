import { useContext } from "react";
import Context from "../../context/context";
import useToggle from "../../hooks/useToggle";
import { NavLink as Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { COLORS, portfolioItems } from "../../utils";

import { Icon } from "../../subcomponents";

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

  const [showFilters, setShowFilters] = useToggle();

  return (
    <>
      <Filter
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.8,
            duration: 0.6,
          },
        }}
        exit={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
      >
        {showFilters && (
          <div>
            {types.map((type, index) => {
              return (
                <Button
                  click={() => filterPortfolioList(type)}
                  key={index}
                  label={type}
                />
              );
            })}
            <Button
              click={() => setPortfolioList(portfolioItems)}
              label="all"
            />
          </div>
        )}
        <button onClick={setShowFilters}>
          <Icon
            icon="filter"
            width="30px"
            height="30px"
            color={COLORS.accentSecondary}
          />
        </button>
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
        viewport={{ once: true }}
      >
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
              exit={{ opacity: 0 }}
            >
              <Link to={item.path}>
                <PBox
                  bgColor={item.bgColor}
                  transform={item.transform}
                  height={item.height}
                >
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
