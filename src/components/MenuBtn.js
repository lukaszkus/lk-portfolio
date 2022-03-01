import React from "react";

function MenuBtn({ toggle }) {
  return (
    <div className="menu-icon" onClick={toggle}>
      <input className="menu-icon__cheeckbox" type="checkbox" />
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default MenuBtn;
