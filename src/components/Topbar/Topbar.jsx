import { useContext } from "react";
import Context from "../../context/context";
import { Logo, MenuBtn, Menu } from "../";

import { Wrapper } from "./Topbar.style";

const Topbar = () => {
  const { isMenuOpen } = useContext(Context);

  return (
    <Wrapper>
      <Logo />
      <MenuBtn />
      {isMenuOpen && <Menu />}
    </Wrapper>
  );
};

export default Topbar;
