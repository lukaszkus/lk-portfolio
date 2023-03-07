import { useContext } from "react";
import Context from "../../context/context";
// import { useLocation } from "react-router-dom";

import { Wrapper, Content } from "./PortfolioNav.style";

const PortfolioNav = ({ id }) => {
  const { portfolioList } = useContext(Context);
  // const location = useLocation();

  const currentIndex = portfolioList.findIndex((item) => {
    return item.id === id;
  });

  let prevIndex = currentIndex - 1;
  let nextIndex = currentIndex + 1;

  const prev =
    prevIndex < 0 ? null : (
      <div>
        <a href={portfolioList[prevIndex].path}>
          <h2>Prev</h2>
          <p>{portfolioList[prevIndex].title}</p>
        </a>
      </div>
    );

  const next =
    nextIndex > portfolioList.length - 1 ? null : (
      <div>
        <a href={portfolioList[nextIndex].path}>
          <h2>Next</h2>
          <p>{portfolioList[nextIndex].title}</p>
        </a>
      </div>
    );

  return (
    <Wrapper>
      <Content>
        <div>
          {prev}
          {next}
        </div>
      </Content>
    </Wrapper>
  );
};

export default PortfolioNav;
