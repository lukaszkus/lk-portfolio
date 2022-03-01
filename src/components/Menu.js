import React from "react";
import styled from "styled-components";

const MenuContainer = styled.nav`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: 0.5s ease;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
`;

function Menu({ isOpen, toggle }) {
  return (
    <MenuContainer onClick={toggle} isOpen={isOpen}>
      Menu
    </MenuContainer>
  );
}

export default Menu;
