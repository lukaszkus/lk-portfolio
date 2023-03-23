import { useContext } from "react";
import Context from "../../context/context";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { AnimatePresence } from "framer-motion";

import { Wrapper, Content, Grid, Box, Text } from "./Portfolio.style";
import { Divider } from "../";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function Portfolio() {
  const { portfolioList } = useContext(Context);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
        ...transition,
        delay: 0.6,
      },
    },
  };

  const box = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { ...transition } },
  };

  const img = {
    hover: {
      scale: 1.07,
      transition: { ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  return (
    <Wrapper id="portfolio">
      <Divider label="Projects" />
      <Content>
        <Grid
          variants={container}
          initial="hidden"
          whileInView="show"
          exit="hidden"
          viewport={{ once: true }}>
          {portfolioList.map((item) => (
            <Box key={item.id} variants={box} whileInView="show">
              <Link to={item.path}>
                <div>
                  <motion.img
                    variants={img}
                    whileHover="hover"
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
