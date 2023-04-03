import { useContext } from "react";
import Context from "../../context/context";
import { NavLink as Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";

import { Wrapper, Content } from "./Menu.style";

const transition = { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] };

const container = {
  hidden: {
    // opacity: 0,
    x: "100%",
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
      delay: 0.5,
      duration: 0.3,
    },
  },
  show: {
    // opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
      delayChildren: 0.2,
      duration: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const list = {
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

const item = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { ...transition } },
};

const line = {
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: {
      ease: "easeInOut",
      delay: 0.8,
      duration: 0.4,
    },
  },
};

const link = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { ...transition, delay: 1.1 } },
};

function Menu() {
  const { open, cycleOpen } = useContext(Context);

  return (
    <AnimatePresence>
      {open && (
        <Wrapper onClick={cycleOpen}>
          <Content
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden">
            <motion.ul variants={list}>
              <motion.li variants={item}>
                <Link to="/">Home</Link>
              </motion.li>
              <motion.li variants={item}>
                <Link to="work">Work</Link>
              </motion.li>
              <motion.li variants={item}>
                <Link to="about">About me</Link>
              </motion.li>
              <motion.li variants={item}>
                <Link to="contact">Contact</Link>
              </motion.li>
            </motion.ul>

            <motion.div className="line" variants={line}></motion.div>
            <motion.div variants={list}>
              <motion.a href="https://github.com/lukaszkus" variants={link}>
                <VscGithubAlt size="2em" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/lukasz-kus/"
                variants={link}>
                <SlSocialLinkedin size="1.8em" />
              </motion.a>
            </motion.div>
          </Content>
        </Wrapper>
      )}
    </AnimatePresence>
  );
}

export default Menu;
