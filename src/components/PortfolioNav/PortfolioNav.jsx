import { useContext } from "react";
import Context from "../../context/context";

import { Wrapper, Content } from "./PortfolioNav.style";

const PortfolioNav = ({ id }) => {
  const { portfolioList } = useContext(Context);

  return (
    <Wrapper>
      <Content>{id}</Content>
    </Wrapper>
  );
};

export default PortfolioNav;
