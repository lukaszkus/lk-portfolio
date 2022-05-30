import { Logo, MenuBtn } from "../";

import { TopbarContainer } from "./StyledTopbar";

function Topbar() {
  return (
    <TopbarContainer data-aos="fade-down">
      <Logo />
      <MenuBtn />
    </TopbarContainer>
  );
}

export default Topbar;
