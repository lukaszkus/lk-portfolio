import { NavLink as Link } from "react-router-dom";

import { MenuContainer, MenuList, MenuItem } from "./StyledMenu";

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
