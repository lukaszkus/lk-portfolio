import styled from "styled-components";
import { motion } from "framer-motion";

import { breakpoint } from "../../utils";

export const Wrapper = styled(motion.div)`
  // display: flex;
  // gap: 1rem;
  padding: 0 2rem;

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

export const FilterWrapper = styled.div`
  position: relative;
`;

export const ButtonsWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  background-image: linear-gradient(-135deg, #6a11cb 0%, #2575fc 100%);
  border-radius: 1rem;
  padding: 1.5rem;
  position: absolute;
  top: 2.5rem;
  left: 0;
  box-shadow: 10px 10px 20px 0px rgba(36, 41, 48, 0.6);
  z-index: 99;
`;
