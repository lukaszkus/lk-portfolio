import { useContext } from "react";
import Context from "../../context/context";
import { useNavigate } from "react-router-dom";

import { Wrapper, Content } from "./PortfolioNav.style";

const PortfolioNav = ({ id }) => {
  const { portfolioList } = useContext(Context);
  const navigate = useNavigate();

  const currentIndex = portfolioList.findIndex((item) => {
    return item.id === id;
  });

  let prevIndex = currentIndex - 1;
  let nextIndex = currentIndex + 1;

  const handlePrev = () => {
    navigate(`${portfolioList[prevIndex].path}`);
  };

  const handleNext = () => {
    navigate(`${portfolioList[nextIndex].path}`);
  };

  const prevItem =
    prevIndex < 0 ? null : (
      <div onClick={handlePrev} className="item">
        <h2>Previous</h2>
        <p>{portfolioList[prevIndex].title}</p>
      </div>
    );

  const nextItem =
    nextIndex > portfolioList.length - 1 ? null : (
      <div onClick={handleNext} className="item">
        <h2>Next</h2>
        <p>{portfolioList[nextIndex].title}</p>
      </div>
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
