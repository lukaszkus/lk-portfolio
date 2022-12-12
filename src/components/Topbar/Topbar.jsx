import { useContext } from "react";
import Context from "../../context/context";
import { Logo, MenuBtn, Menu } from "../";

import { TopbarContainer } from "./StyledTopbar";

const Topbar = () => {
  const { isMenuOpen } = useContext(Context);

  return (
    <TopbarContainer>
      <Logo />
      <MenuBtn />
      {isMenuOpen && <Menu />}
    </TopbarContainer>
  );
};

export default Topbar;
