import { Pivot as Hamburger } from "hamburger-react";

function MenuBtn({ isOpen, toggle }) {
  // const clr = isOpen === true ? "#c3cfe2" : "#000";
  const clr = isOpen === true ? "#c3cfe2" : "#c3cfe2";

  return <Hamburger toggled={isOpen} toggle={toggle} size={28} color={clr} />;
}

export default MenuBtn;
