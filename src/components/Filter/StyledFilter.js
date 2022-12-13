import styled from "styled-components";
import { motion } from "framer-motion";

import { breakpoint } from "../../utils";

export const FilterWrapper = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 0 2rem;
  overflow: hidden;

  @media ${breakpoint.tablet} {
    padding: 0 4rem;
  }

  @media ${breakpoint.desktop} {
    padding: 0 6rem;
  }

  @media ${breakpoint.desktopXL} {
    padding: 0 8rem;
  }
`;

export const ButtonsWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const ShowFiltersBtn = styled(motion.button)`
  background: transparent;
  border: none;
  cursor: pointer;
`;
