import React from "react";
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
  return <LogoContainer>{isOpen ? <LogoLight /> : <LogoDark />}</LogoContainer>;
}

export default Logo;
