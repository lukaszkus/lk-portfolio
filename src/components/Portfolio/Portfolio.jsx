import { useContext } from "react";
import Context from "../../context/context";
import { NavLink as Link } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";

import { Wrapper, Content, Grid, Box } from "./StyledPortfolio";

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
        <Content>
          <Grid
            variants={showContainer}
            whileInView="show"
            initial="hidden"
            // animate="show"
            exit="exit"
          >
            {portfolioList.map((item) => (
              <Box
                key={item.id}
                variants={showBox}
                bgColor={item.bgColor}
                overlayColor={item.overlayColor}
              >
                <Link to={item.path}>
                  <div>
                    <img src={item.cover} alt={item.title} />
                    <div className="overlay">
                      <div className="text">
                        <h2>{item.title}</h2>
                        <p>{item.category}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Box>
            ))}
          </Grid>
        </Content>
      </Wrapper>
    </>
  );
}

export default Portfolio;
