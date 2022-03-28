import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import breakpoint from "../utils/breakpoints";

import { images } from "../utils";

const LogoLight = styled.img.attrs({
  src: `${images.logo}`,
})`
  height: 22px;

  @media ${breakpoint.desktop} {
    height: 30px;
  }
`;

function Logo() {
  return (
    <Link to="/">
      <LogoLight />
    </Link>
  );
}

export default Logo;
