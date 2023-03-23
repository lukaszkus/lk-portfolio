import { NavLink as Link } from "react-router-dom";

import { LogoImg } from "./Logo.style";

const Logo = () => {
  return (
    <Link to="/">
      <LogoImg
        animate={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ delay: 1.5, duration: 0.4 }}
      />
    </Link>
  );
};

export default Logo;
