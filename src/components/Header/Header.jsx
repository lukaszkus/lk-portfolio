// import { NavLink as Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { RxArrowBottomRight } from "react-icons/rx";
import { Wrapper, Content, Title } from "./StyledHeader";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Header = () => {
  const motionArrow = {
    initial: { x: 0, y: 0 },
    hover: { x: 6, y: 6, transition: { duration: 0.6 } },
  };

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
            transition={{ delay: 0.8, ...transition }}
          >
            I <span>design</span> & <span>develop</span>
          </motion.h1>
          <motion.h1
            animate={{ x: [-150, 0], opacity: [0, 1] }}
            transition={{ delay: 0.9, ...transition }}
          >
            websites and apps.
          </motion.h1>
          <motion.p
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ delay: 1.3, ...transition }}
          >
            I design and develop web pages and applications.
          </motion.p>
          <motion.div
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ delay: 1.5, ...transition }}
            initial="initial"
            whileHover="hover"
            whileTap="hover"
          >
            <Link
              className="link"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              View my projects
              <motion.span variants={motionArrow}>
                <RxArrowBottomRight />
              </motion.span>
            </Link>
          </motion.div>
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
