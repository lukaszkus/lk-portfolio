import { useContext } from "react";
import Context from "../../context/context";
import { Link } from "react-router-dom";

import { Wrapper, Content } from "./PortfolioNav.style";
import Dividier from "../Divider/Divider";

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
      <Dividier label="Go to" />
      <Content>
        <div className="wrapper">
          <div>
            {prevPath === null ? null : (
              <Link to={prevPath}>
                <h2>Previous</h2>
                <p>{portfolioList[prevIndex].title}</p>
              </Link>
            )}
          </div>
          <div>
            {nextPath === null ? null : (
              <Link to={nextPath}>
                <h2>Next</h2>
                <p>{portfolioList[nextIndex].title}</p>
              </Link>
            )}
          </div>
        </div>
      </Content>
      <Dividier />
    </Wrapper>
  );
};

export default PortfolioNav;
