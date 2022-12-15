import styled from "styled-components";
// import { motion } from "framer-motion";

import { COLORS, breakpoint } from "../../utils";

export const Btn = styled.button.attrs((props) => ({
  size: props.size,
}))`
  color: ${COLORS.light};
  padding: 0.5em 1.5em;
  border: 1px solid ${COLORS.light};
  background: transparent;
  border-radius: 2rem;
  cursor: pointer;
  font-size: ${(props) => (props.size ? `${props.size}px` : "0.75rem")};
  font-family: "Poppins", sans-serif;
  transition: 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;

  &:hover {
    color: ${COLORS.white};
    border-color: ${COLORS.white};
  }

  @media ${breakpoint.tablet} {
    font-size: ${(props) => (props.size ? `${props.size * 1.5}px` : "0.75rem")};
  }

  a {
    color: ${COLORS.light};
    text-decoration: none;

    &:hover {
      color: ${COLORS.white};
    }
  }
`;
