import { useContext } from "react";
import Context from "../../context/context";
import { NavLink as Link } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";

import { Wrapper, Content, Grid, Box, Text } from "./StyledPortfolio";

function Portfolio() {
  const { portfolioList } = useContext(Context);

  return (
    <>
      <Wrapper>
        <Content>
          <Grid>
            {portfolioList.map((item) => (
              <Box
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    ease: "easeIn",
                    duration: 0.6,
                    delay: 0.2,
                  },
                }}
                exit={{ opacity: 0 }}
                bgColor={item.bgColor}
                overlayColor={item.overlayColor}>
                <Link to={item.path}>
                  <div>
                    <img
                      src={item.cover}
                      alt=""
                      // alt={item.title}
                    />
                  </div>
                </Link>
                <Text>
                  <h2>{item.title}</h2>
                  <p>{item.category}</p>
                </Text>
              </Box>
            ))}
          </Grid>
        </Content>
      </Wrapper>
    </>
  );
}

export default Portfolio;
