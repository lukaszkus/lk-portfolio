import { Logo, MenuBtn } from "../";

import { TopbarContainer } from "./StyledTopbar";

function Topbar({ isOpen, toggle }) {
  return (
    <TopbarContainer data-aos="fade-down">
      <Logo isOpen={isOpen} />
      <MenuBtn isOpen={isOpen} toggle={toggle} />
    </TopbarContainer>
  );
}

export default Topbar;
