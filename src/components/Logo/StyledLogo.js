import styled from "styled-components";
import { motion } from "framer-motion";

import { images, breakpoint } from "../../utils";

export const LogoLight = styled(motion.img).attrs({
  src: `${images.logo}`,
})`
  height: 22px;

  @media ${breakpoint.desktop} {
    height: 30px;
  }
`;
