import styled from "styled-components";
import { motion } from "framer-motion";
import { breakpoint } from "../../utils";

export const ScrollButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 1.2rem;
  padding: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1000;

  @media ${breakpoint.tablet} {
    bottom: 2rem;
    right: 2.2rem;
  }
`;
