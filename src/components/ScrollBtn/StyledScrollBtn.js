import styled, { keyframes } from "styled-components";
import { images, breakpoint } from "../../utils";

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
  animation: ${fadeIn} 700ms ease-in-out 0.2s both;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  transform: rotate(180deg);
  z-index: 1000;
  &:hover {
    transform: rotate(180deg) scale(1.1);
  }

  @media ${breakpoint.tablet} {
    bottom: 2rem;
    right: 2.2rem;
  }
`;

export const Arrow = styled.img.attrs({
  src: `${images.arrow}`,
})`
  width: 30px;
`;
