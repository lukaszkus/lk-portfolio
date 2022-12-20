import { useContext } from "react";
import Context from "../../context/context";
import { NavLink as Link } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";

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
  Wrapper,
} from "./StyledPortfolio";

function Portfolio() {
  const { portfolioList } = useContext(Context);

  const showContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: "easeInOut",
      },
    },
    exit: { opacity: 0 },
  };

  const showBox = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 200,
    },
  };

  return (
    <>
      <Wrapper>
        <Filter />
        <Container
          variants={showContainer}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {portfolioList.map((item) => (
            <BoxContainer key={item.id} variants={showBox}>
              <Link to={item.path}>
                <Box
                  bgColor={item.bgColor}
                  transform={item.transform}
                  height={item.height}
                >
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
          ))}
        </Container>
      </Wrapper>
    </>
  );
}

export default Portfolio;
