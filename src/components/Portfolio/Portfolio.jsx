import { useContext } from "react";
import Context from "../../context/context";
import { NavLink as Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Filter } from "../";

import {
  Container,
  BoxContainer,
  Box,
  BoxImg,
  BoxOverlay,
  BoxText,
  BoxTitle,
  BoxCat,
} from "./StyledPortfolio";

function Portfolio() {
  const { portfolioList } = useContext(Context);

  return (
    <>
      <Filter />
      <Container
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
        {portfolioList.map((item) => (
          <AnimatePresence exitBeforeEnter>
            <BoxContainer
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: "easeInOut",
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeInOut",
                },
              }}>
              <Link to={item.path}>
                <Box
                  bgColor={item.bgColor}
                  transform={item.transform}
                  height={item.height}>
                  <BoxImg src={item.cover} alt={item.title}></BoxImg>
                  <BoxOverlay overlayColor={item.overlayColor}>
                    <BoxText>
                      <BoxTitle>{item.title}</BoxTitle>
                      <BoxCat>{item.category}</BoxCat>
                    </BoxText>
                  </BoxOverlay>
                </Box>
              </Link>
            </BoxContainer>
          </AnimatePresence>
        ))}
      </Container>
    </>
  );
}

export default Portfolio;
