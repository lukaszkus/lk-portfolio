import styled from "styled-components";
// import { motion } from "framer-motion";

import { COLORS } from "../../utils";

export const Btn = styled.button`
  color: ${COLORS.light};
  padding: 0.5em 1.5em;
  border: 1px solid ${COLORS.light};
  background: transparent;
  border-radius: 1.5rem;
  cursor: pointer;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${COLORS.white};
    border-color: ${COLORS.white};
  }
`;
