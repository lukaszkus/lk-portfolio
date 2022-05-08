import { NavLink as Link } from "react-router-dom";

import { LogoLight } from "./StyledLogo";

function Logo() {
  return (
    <Link to="/">
      <LogoLight />
    </Link>
  );
}

export default Logo;
