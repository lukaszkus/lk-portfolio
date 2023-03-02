// import { NavLink as Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Wrapper, Content, Title } from "./StyledHeader";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Title>
          <motion.p
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ delay: 0.2, ...transition }}
          >
            Hi, I'm Łukasz
          </motion.p>
          <motion.h1
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ delay: 1, ...transition }}
          >
            I <span>design</span> & <span>develop</span>
          </motion.h1>
          <motion.h1
            animate={{ x: [-150, 0], opacity: [0, 1] }}
            transition={{ delay: 1.1, ...transition }}
          >
            websites and applications.
          </motion.h1>
          <motion.p
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ delay: 0.2, ...transition }}
          >
            I design and develop web pages and applications.
          </motion.p>
        </Title>
      </Content>
    </Wrapper>
  );
};

export default Header;
