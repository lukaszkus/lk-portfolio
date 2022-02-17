import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Menu from "./Menu";

const TopbarContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 600px) {
    padding: 1.25rem 2rem;
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
