// import { NavLink as Link } from "react-router-dom";
import useDeviceSize from "../../hooks/useDeviceSize";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { RxArrowBottomRight } from "react-icons/rx";
import { Avatar } from "../";
import { Wrapper, Content, Title } from "./Header.style";

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
      delay: 0.6,
      ...transition,
    },
  },
};

const arrow = {
  hidden: { x: 0, y: 0 },
  hover: { x: 6, y: 6, transition: { ...transition } },
};

const Header = () => {
  const [width] = useDeviceSize();

  const breakLine = width < 540 ? <br /> : null;

  return (
    <Wrapper>
      <Content>
        <div className="col-1">
          <Avatar />
        </div>
        <div className="col-2">
          <Title variants={container} initial="hidden" animate="show" exit="hidden">
            <motion.p variants={title}>Hi, I'm Łukasz</motion.p>
            <motion.h1 variants={title}>
              I <span>design</span>
              {breakLine} & <span>develop</span>
            </motion.h1>
            <motion.h1 variants={title}>websites{breakLine} and apps</motion.h1>
            <motion.p variants={title}>I'm a frontend developer with a passion for great design and user experience.</motion.p>
            <div className="links">
              <Link to="portfolio" spy={true} smooth={true} offset={-100} duration={500}>
                <motion.button className="projects" variants={btn} animate="show" initial="hidden" whileHover="hover" whileTap="hover" exit="hidden">
                  My projects
                  <motion.span variants={arrow}>
                    <RxArrowBottomRight />
                  </motion.span>
                </motion.button>
              </Link>
              <NavLink to="aboutme">
                <motion.button className="about" variants={btn} animate="show" initial="hidden" whileHover="hover" whileTap="hover" exit="hidden">
                  More About me
                  <motion.span variants={arrow}>
                    <RxArrowBottomRight />
                  </motion.span>
                </motion.button>
              </NavLink>
            </div>
          </Title>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Header;
