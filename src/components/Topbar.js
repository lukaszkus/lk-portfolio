import styled from "styled-components";
import breakpoint from "../utils/breakpoints";

import Logo from "./Logo";
import MenuBtn from "./MenuBtn";

const TopbarContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${breakpoint.device.desktop} {
    padding: 2rem;
  }
`;

function Topbar({ isOpen, toggle }) {
  return (
    <TopbarContainer data-aos="fade-down">
      <Logo isOpen={isOpen} />
      <MenuBtn isOpen={isOpen} toggle={toggle} />
    </TopbarContainer>
  );
}

export default Topbar;
