import styled from "styled-components";
import { motion } from "framer-motion";

import { COLORS } from "../../utils";

export const Wrapper = styled(motion.div)`
  padding-bottom: 1rem;
`;

export const FilterWrapper = styled.div`
  position: relative;
`;

export const FilterBtn = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  color: ${COLORS.light};
  font-size: 14px;
  cursor: pointer;
  position: relative;
  top: 7px;
  left: -14px;
  padding-right: 14px;
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
  top: 3rem;
  left: 0;
  box-shadow: 10px 10px 20px 0px rgba(36, 41, 48, 0.6);
  z-index: 99;
`;
