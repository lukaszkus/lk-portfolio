import styled from "styled-components";
import { motion } from "framer-motion";

export const Circle = styled(motion.div)`
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  left: 0;
  top: 0;
  mix-blend-mode: difference;
  background-color: transparent;
  z-index: 10000;
  border: 0.25px solid var(--clr-light);
  height: 120px;
  width: 120px;
  transition: all 200ms ease-out;
  opacity: 0.3;
`;

export const Dot = styled(motion.div)`
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  left: 0;
  top: 0;
  mix-blend-mode: difference;
  background-color: var(--clr-light);
  z-index: 10000;
  height: 8px;
  width: 8px;
  transition: all 100ms ease-out;
  opacity: 0.9;
`;
