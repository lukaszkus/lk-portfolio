import styled from "styled-components";

import { images, breakpoint } from "../../utils";

export const LogoLight = styled.img.attrs({
  src: `${images.logo}`,
})`
  height: 22px;

  @media ${breakpoint.desktop} {
    height: 30px;
  }
`;
