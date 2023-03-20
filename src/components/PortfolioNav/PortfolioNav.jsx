import { useContext } from "react";
import Context from "../../context/context";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";

import { Wrapper, Content } from "./PortfolioNav.style";
import { Divider } from "../";

const PortfolioNav = ({ id }) => {
  const { portfolioList } = useContext(Context);

  let currentIndex = portfolioList.findIndex((item) => {
    return item.id === id;
  });

  let prevIndex = currentIndex - 1;
  let nextIndex = currentIndex + 1;

  const getPrevPath = (portfolioList) => {
    let prev;

    if (prevIndex < 0) {
      return null;
    } else prev = portfolioList[prevIndex].path;
    return prev;
  };

  const getNextPath = (portfolioList) => {
    let next;

    if (nextIndex > portfolioList.length - 1) {
      return null;
    } else next = portfolioList[nextIndex].path;
    return next;
  };

  let prevPath = getPrevPath(portfolioList);
  let nextPath = getNextPath(portfolioList);

  return (
    <Wrapper>
      <Divider label="Go to project" />
      <Content>
        <div className="wrapper">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: "easeInOut",
                duration: 0.8,
                delay: 0.2,
              },
            }}
            exit={{ opacity: 0, x: 10 }}
            viewport={{ once: true }}>
            {prevPath === null ? null : (
              <Link to={prevPath}>
                <VscArrowLeft size="1.5em" />
                <h2>Previous</h2>
                <p>{portfolioList[prevIndex].title}</p>
              </Link>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: "easeInOut",
                duration: 0.8,
                delay: 0.2,
              },
            }}
            exit={{ opacity: 0, x: -10 }}
            viewport={{ once: true }}>
            {nextPath === null ? null : (
              <Link to={nextPath}>
                <VscArrowRight size="1.5em" />
                <h2>Next</h2>
                <p>{portfolioList[nextIndex].title}</p>
              </Link>
            )}
          </motion.div>
        </div>
      </Content>
      <Divider />
    </Wrapper>
  );
};

export default PortfolioNav;
