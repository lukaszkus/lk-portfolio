import { useContext } from "react";
import Context from "../../context/context";
import { Pivot as Hamburger } from "hamburger-react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HamburgerWrapper = styled(motion.div)`
  position: relative;
  z-index: 999;
`;

const MenuBtn = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(Context);

  const clr = isMenuOpen ? "#fff" : "#fff";

  return (
    <HamburgerWrapper
      animate={{ x: [100, 0], opacity: [0, 1] }}
      transition={{ delay: 1.5, duration: 0.4 }}>
      <Hamburger
        toggled={isMenuOpen}
        toggle={setIsMenuOpen}
        size={28}
        color={clr}
      />
    </HamburgerWrapper>
  );
};

export default MenuBtn;
