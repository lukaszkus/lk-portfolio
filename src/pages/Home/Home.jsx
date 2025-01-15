import useDocumentTitle from "../../hooks/useDocumentTitle";
import { NavLink as Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RxArrowBottomRight } from "react-icons/rx";

import { Divider, Header, Portfolio, Stack } from "../../components";

import {
  Wrapper,
  Content,
  // About,
  Contact,
} from "./Home.style";
// import { images } from "../../utils";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ...transition,
    },
  },
};

const title = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { ...transition } },
};

const btn = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Header />
      <Divider label="Latest projects" />
      <Portfolio
      // showItems={4}
      />
      {/* <Divider label="About me" />
      <Wrapper>
        <Content>
          <About>
            <p>
              Get a brief look at who I am and what I do. If you would like to
              know more about me and my interests, you can.
            </p>
            <Link to="aboutme">
              <motion.button
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
          </About>
        </Content>
      </Wrapper> */}
      <Divider label="Tech stack & tools" />
      <Wrapper>
        <Content>
          <Stack />
        </Content>
      </Wrapper>
      <Divider label="Contact" />
      <Wrapper>
        <Content>
          <Contact>
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} exit="hidden">
              <motion.h3 variants={title}>Get in touch</motion.h3>
              <motion.p variants={title}>Want to discuss a project, collaborate or say hello?</motion.p>
            </motion.div>
            <Link to="contact">
              <motion.button variants={btn} whileInView="show" viewport={{ once: true }} initial="hidden" whileHover="hover" whileTap="hover">
                Contact me
                <motion.span variants={arrow}>
                  <RxArrowBottomRight />
                </motion.span>
              </motion.button>
            </Link>
          </Contact>
        </Content>
      </Wrapper>
    </motion.div>
  );
};

export default Home;
