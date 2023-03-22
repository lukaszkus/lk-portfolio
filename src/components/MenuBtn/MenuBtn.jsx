import { useContext } from "react";
import Context from "../../context/context";
import { Pivot as Hamburger } from "hamburger-react";

import { Wrapper } from "./MenuBtn.style";

const MenuBtn = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(Context);

  const clr = isMenuOpen ? "#3f4856" : "#fff";

  return (
    <Wrapper
      animate={{ x: [100, 0], opacity: [0, 1] }}
      transition={{ delay: 1.5, duration: 0.4 }}
    >
      <Hamburger
        toggled={isMenuOpen}
        toggle={setIsMenuOpen}
        size={28}
        color={clr}
      />
    </Wrapper>
  );
};

export default MenuBtn;
