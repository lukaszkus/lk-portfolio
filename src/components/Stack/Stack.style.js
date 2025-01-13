import styled from "styled-components";
import { motion } from "framer-motion";

import { breakpoint } from "../../utils";

export const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

export const Grid = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  max-width: 90%;

  @media ${breakpoint.tablet} {
    gap: 1.75rem;
  }

  @media ${breakpoint.desktopXL} {
    max-width: 80%;
    gap: 2.5rem;
  }
`;

export const Icon = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;

  @media ${breakpoint.desktop} {
    width: 80px;
    height: 80px;
  }

  @media ${breakpoint.desktopXL} {
    width: 90px;
    height: 90px;
  }
`;

export const IconImg = styled(motion.img)`
  width: 80%;
  height: 80%;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
