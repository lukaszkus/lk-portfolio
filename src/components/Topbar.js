import React from "react";
import styled from "styled-components";
import breakpoint from "../utils/breakpoints";

import Logo from "./Logo";
import Menu from "./Menu";

const TopbarContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${breakpoint.device.tablet} {
    padding: 2rem;
  }
`;

function Topbar() {
  return (
    <TopbarContainer>
      <Logo />
      <Menu />
    </TopbarContainer>
  );
}

export default Topbar;
