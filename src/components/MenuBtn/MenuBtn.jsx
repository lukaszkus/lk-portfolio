import { useContext } from "react";
import Context from "../../context/context";
import { Pivot as Hamburger } from "hamburger-react";

function MenuBtn() {
  const { isOpen, toggle } = useContext(Context);

  const clr = isOpen === true ? "#fff" : "#fff";

  return <Hamburger toggled={isOpen} toggle={toggle} size={28} color={clr} />;
}

export default MenuBtn;
