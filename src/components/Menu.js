import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import breakpoint from "../utils/breakpoints";

const MenuContainer = styled.nav`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(-135deg, #6a11cb 0%, #2575fc 100%);
  display: flex;
  align-items: center;
  padding: 2rem;
  font-size: 2.5rem;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};

  a {
    color: #c3cfe2;
    text-decoration: none;
  }

  @media ${breakpoint.device.tablet} {
    justify-content: center;
    font-size: 3.5rem;
  }

  @media ${breakpoint.device.desktop} {
    font-size: 4.5rem;
  }
`;

const MenuList = styled.ul`
  list-style: none;
`;

const MenuItem = styled.li``;

function Menu({ isOpen, toggle }) {
  return (
    <MenuContainer isOpen={isOpen} onClick={toggle}>
      <MenuList>
        <MenuItem data-aos="fade-up" data-aos-duration="300">
          <Link to="/">Work</Link>
        </MenuItem>
        <MenuItem data-aos="fade-up" data-aos-duration="600">
          <Link to="about">About</Link>
        </MenuItem>
      </MenuList>
    </MenuContainer>
  );
}

export default Menu;
