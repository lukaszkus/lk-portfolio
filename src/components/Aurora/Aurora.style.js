import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  top: 0;
  opacity: 0.5;
`;
