import { useContext } from "react";
import Context from "../../context/context";
import { NavLink as Link } from "react-router-dom";

import { MenuContainer, MenuList, MenuItem } from "./StyledMenu";

function Menu() {
  const { setIsMenuOpen } = useContext(Context);

  return (
    <MenuContainer onClick={setIsMenuOpen}>
      <MenuList>
        <MenuItem data-aos="fade-up" data-aos-duration="200">
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem data-aos="fade-up" data-aos-duration="400">
          <Link to="work">Work</Link>
        </MenuItem>
        <MenuItem data-aos="fade-up" data-aos-duration="600">
          <Link to="about">About me</Link>
        </MenuItem>
        <MenuItem data-aos="fade-up" data-aos-duration="800">
          <Link to="contact">Contact</Link>
        </MenuItem>
      </MenuList>
    </MenuContainer>
  );
}

export default Menu;
