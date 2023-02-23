import { NavLink as Link } from "react-router-dom";
import { motion } from "framer-motion";

import { BtnWrapper, Wrapper, Content, Title, Subtitle } from "./StyledHeader";

import { Button } from "../";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Title>
          <motion.h1
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ delay: 0.2, ...transition }}
          >
            Hi, I'm Łukasz
          </motion.h1>
          <Subtitle>
            <motion.h2
              animate={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ delay: 1, ...transition }}
            >
              FRONT-END DEVELOPER
            </motion.h2>
            <motion.h2
              animate={{ x: [-150, 0], opacity: [0, 1] }}
              transition={{ delay: 1.1, ...transition }}
            >
              & GRAPHIC DESIGNER
            </motion.h2>
          </Subtitle>
          <motion.p
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ delay: 0.2, ...transition }}
          >
            I design and develop web pages and applications.
          </motion.p>
          <BtnWrapper
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ delay: 1.2, ...transition }}
          >
            <Button size={16}>
              <Link to="#portfolio">View My Projects</Link>
            </Button>
          </BtnWrapper>
        </Title>
      </Content>
    </Wrapper>
  );
};

export default Header;
