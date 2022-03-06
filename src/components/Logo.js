import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import breakpoint from "../utils/breakpoints";

import darkLogo from "../assets/ksu.svg";
import lightLogo from "../assets/ksu-light.svg";

const LogoContainer = styled.div``;

const LogoDark = styled.img.attrs({
  src: `${darkLogo}`,
})`
  height: 22px;

  @media ${breakpoint.device.desktop} {
    height: 30px;
  }
`;

const LogoLight = styled(LogoDark).attrs({
  src: `${lightLogo}`,
})``;

function Logo({ isOpen }) {
  return (
    <Link to="/">
      <LogoContainer>{isOpen ? <LogoLight /> : <LogoDark />}</LogoContainer>
    </Link>
  );
}

export default Logo;
