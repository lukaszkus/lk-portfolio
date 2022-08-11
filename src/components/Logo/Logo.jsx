import { NavLink as Link } from "react-router-dom";

import { LogoLight } from "./StyledLogo";

const Logo = () => {
  return (
    <Link to="/">
      <LogoLight
        animate={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ delay: 1.5, duration: 0.4 }}
      />
    </Link>
  );
};

export default Logo;
