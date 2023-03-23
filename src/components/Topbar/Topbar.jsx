import { Logo, MenuBtn, Menu } from "../";

import { Wrapper } from "./Topbar.style";

const Topbar = () => {
  return (
    <Wrapper>
      <Logo />
      <MenuBtn />
      <Menu />
    </Wrapper>
  );
};

export default Topbar;
