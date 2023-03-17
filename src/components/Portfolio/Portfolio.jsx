import { useContext } from "react";
import Context from "../../context/context";
import { NavLink as Link } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";

import { Wrapper, Content, Grid, Box, Text } from "./Portfolio.style";
import { Divider } from "../";

function Portfolio() {
  const { portfolioList } = useContext(Context);

  return (
    <Wrapper id="portfolio">
      <Divider label="Projects" />
      <Content>
        <Grid>
          {portfolioList.map((item) => (
            <Box
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  ease: "easeIn",
                  duration: 0.8,
                  delay: 0.2,
                },
              }}
              exit={{ opacity: 0, y: 10 }}
              viewport={{ once: true }}>
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
      <Divider />
    </Wrapper>
  );
}

export default Portfolio;
