import { useContext } from "react";
import Context from "../../context/context";
import { NavLink as Link } from "react-router-dom";

import { MenuContainer, MenuList, MenuItem, Wrapper } from "./StyledMenu";

function Menu() {
  const { setIsMenuOpen } = useContext(Context);

  return (
    <MenuContainer onClick={setIsMenuOpen}>
      <Wrapper
        initial={{ opacity: 0, width: 0, height: 0 }}
        animate={{
          opacity: 1,
          width: "100%",
          height: "100%",
          transition: { ease: "easeInOut" },
        }}
      >
        <MenuList>
          <MenuItem>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to="work">Work</Link>
          </MenuItem>
          <MenuItem>
            <Link to="about">About me</Link>
          </MenuItem>
          <MenuItem>
            <Link to="contact">Contact</Link>
          </MenuItem>
        </MenuList>
      </Wrapper>
    </MenuContainer>
  );
}

export default Menu;
