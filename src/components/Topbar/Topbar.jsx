import { useContext } from "react";
import Context from "../../context/context";
import { Logo, MenuBtn, Menu, Filter } from "../";
import { useLocation } from "react-router-dom";

import { TopbarContainer } from "./StyledTopbar";

const Topbar = () => {
  const { isMenuOpen } = useContext(Context);

  const location = useLocation();

  return (
    <TopbarContainer>
      <Logo />
      {location.pathname === "/work" ? <Filter /> : null}
      <MenuBtn />
      {isMenuOpen && <Menu />}
    </TopbarContainer>
  );
};

export default Topbar;
