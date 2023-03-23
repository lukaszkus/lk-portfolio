import { useContext } from "react";
import Context from "../../context/context";
import { NavLink as Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Wrapper, Content } from "./Menu.style";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function Menu() {
  const { setIsMenuOpen } = useContext(Context);

  const container = {
    hidden: {
      opacity: 0,
      x: "100%",
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        duration: 0.4,
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

  const email = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { delay: 1.1, ...transition } },
  };

  return (
    <Wrapper onClick={setIsMenuOpen}>
      <Content variants={container} initial="hidden" animate="show" exit="">
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
        <motion.a
          href="mailto:hello.kusiu@gmail.com"
          className="email"
          variants={email}>
          hello.kusiu@gmail.com
        </motion.a>
      </Content>
    </Wrapper>
  );
}

export default Menu;
