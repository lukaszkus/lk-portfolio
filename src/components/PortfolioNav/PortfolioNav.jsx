import { useContext } from "react";
import Context from "../../context/context";

import { Wrapper, Content } from "./PortfolioNav.style";

const PortfolioNav = ({ id }) => {
  const { portfolioList } = useContext(Context);

  const currentIndex = portfolioList.findIndex((item) => {
    return item.id === id;
  });

  let prevIndex = currentIndex - 1;
  let nextIndex = currentIndex + 1;

  const prevItem =
    prevIndex < 0 ? null : (
      <a href={portfolioList[prevIndex].path}>
        <h2>Previous</h2>
        <p>{portfolioList[prevIndex].title}</p>
      </a>
    );

  const nextItem =
    nextIndex > portfolioList.length - 1 ? null : (
      <a href={portfolioList[nextIndex].path}>
        <h2>Next</h2>
        <p>{portfolioList[nextIndex].title}</p>
      </a>
    );

  return (
    <Wrapper>
      <Content>
        <div className="wrapper">
          <div>{prevItem}</div>
          <div>{nextItem}</div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default PortfolioNav;
