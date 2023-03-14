import styled, { keyframes } from "styled-components";
import { breakpoint } from "../../utils";

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}`;

export const ScrollButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 1.2rem;
  padding: 5px;
  background: none;
  border: none;
  animation: ${fadeIn} 0.6s ease-in-out 0.2s both;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 1000;

  :hover {
    scale: 1.1;
  }

  @media ${breakpoint.tablet} {
    bottom: 2rem;
    right: 2.2rem;
  }
`;
