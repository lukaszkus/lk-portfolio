import { useContext } from "react";
import Context from "../../context/context";
import { NavLink as Link } from "react-router-dom";

import { MenuContainer, MenuList, MenuItem, Wrapper } from "./StyledMenu";

function Menu() {
  const { setIsMenuOpen } = useContext(Context);

  const slide = {
    initial: { y: "-100%", opacity: 0 },
    slideIn: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <MenuContainer onClick={setIsMenuOpen}>
      <Wrapper
        // initial={{ opacity: 0 }}
        // animate={{
        //   opacity: 1,
        //   transition: { ease: "easeInOut" },
        // }}
        variants={slide}
        initial="initial"
        animate="slideIn">
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
