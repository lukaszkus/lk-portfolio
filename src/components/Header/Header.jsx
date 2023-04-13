// import { NavLink as Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { RxArrowBottomRight } from "react-icons/rx";
import { Wrapper, Content, Title } from "./Header.style";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Header = () => {
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
    hidden: { x: -50, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        ...transition,
      },
    },
  };

  const arrow = {
    hidden: { x: 0, y: 0 },
    hover: { x: 6, y: 6, transition: { ...transition } },
  };

  return (
    <Wrapper>
      <Content>
        <Title
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden">
          <motion.p variants={title}>Hi, I'm Łukasz</motion.p>
          <motion.h1 variants={title}>
            I <span>design</span> & <span>develop</span>
          </motion.h1>
          <motion.h1 variants={title}>websites and apps.</motion.h1>
          <motion.p variants={title}>
            I'm a frontend developer with a passion for great design and user
            experience.
          </motion.p>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            <motion.button
              variants={btn}
              animate="show"
              initial="hidden"
              whileHover="hover"
              whileTap="hover"
              exit={{ opacity: 0, y: 20 }}>
              View my projects
              <motion.span variants={arrow}>
                <RxArrowBottomRight />
              </motion.span>
            </motion.button>
          </Link>
        </Title>
      </Content>
      {/* <div className="spin">
        <svg viewBox="0 0 100 100" width="100" height="100">
          <defs>
            <path
              id="circle"
              d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text font-size="12">
            <textPath href="#circle">SCROLL-DOWN-</textPath>
          </text>
        </svg>
      </div> */}
    </Wrapper>
  );
};

export default Header;
