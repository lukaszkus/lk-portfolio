import styled from "styled-components";
// import { motion } from "framer-motion";

import { COLORS, breakpoint } from "../../utils";

export const Btn = styled.button`
  color: ${COLORS.light};
  background: transparent;
  cursor: pointer;
  font-size: ${(props) => (props.size ? `${props.size}px` : "0.75rem")};
  font-family: "Unbounded", cursive;
  transition: 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  outline: none;
  border: none;

  &:hover {
    color: ${COLORS.white};
  }

  @media ${breakpoint.tablet} {
    font-size: ${(props) =>
      props.size ? `${props.size * 1.25}px` : "0.75rem"};
  }

  a {
    color: ${COLORS.light};
    text-decoration: none;

    &:hover {
      color: ${COLORS.white};
    }
  }
`;
