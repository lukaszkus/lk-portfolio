import useDocumentTitle from "../../hooks/useDocumentTitle";
import { NavLink as Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RxArrowBottomRight } from "react-icons/rx";

import { Divider, Header, Portfolio } from "../../components";

import { Wrapper, Content, Quote } from "./Home.style";
// import { images } from "../../utils";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const btn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ...transition,
    },
  },
};

const arrow = {
  hidden: { x: 0, y: 0 },
  hover: { x: 6, y: 6, transition: { ...transition } },
};

const Home = ({ titleSuffix }) => {
  useDocumentTitle(`${titleSuffix}`);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Header />
      <Divider label="Latest projects" />
      <Portfolio showItems={4} />
      <Divider label="About me" />
      <Wrapper>
        <Content>
          <Quote>
            I am a frontend developer with a passion for creating amazing user
            interfaces and user experience. I have experience in creating web
            and mobile applications especially in React technology. I create
            websites that are fast, easy to use and built with best practices.
          </Quote>
          <Link to="aboutme">
            <motion.button
              type="submit"
              variants={btn}
              animate="show"
              initial="hidden"
              whileHover="hover"
              whileTap="hover">
              More about me
              <motion.span variants={arrow}>
                <RxArrowBottomRight />
              </motion.span>
            </motion.button>
          </Link>
        </Content>
      </Wrapper>
    </motion.div>
  );
};

export default Home;
