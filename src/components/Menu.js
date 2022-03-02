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

const MenuLink = styled.a`
  color: #c3cfe2;
`;

function Menu({ isOpen, toggle }) {
  return (
    <MenuContainer isOpen={isOpen}>
      <MenuList>
        <MenuItem data-aos="fade-up">
          <MenuLink>Work</MenuLink>
        </MenuItem>
        <MenuItem data-aos="fade-up" data-aos-duration="500">
          <MenuLink>About</MenuLink>
        </MenuItem>
        <MenuItem data-aos="fade-up" data-aos-duration="1000">
          <MenuLink>Contact</MenuLink>
        </MenuItem>
      </MenuList>
    </MenuContainer>
  );
}

export default Menu;
