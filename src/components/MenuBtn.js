import React from "react";

function MenuBtn({ isOpen, toggle }) {
  const changeColor = isOpen ? "white" : null;

  return (
    <div className="menu-icon" onClick={toggle}>
      <input className="menu-icon__cheeckbox" type="checkbox" />
      <div>
        <span className={changeColor}></span>
        <span className={changeColor}></span>
      </div>
    </div>
  );
}

export default MenuBtn;
