import styled from "styled-components";
import { motion } from "framer-motion";

import { breakpoint } from "../../utils";

export const Wrapper = styled(motion.section)`
  padding: 2rem;
  margin: 3rem 0;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;

  @media ${breakpoint.desktopXL} {
    max-width: var(--maxWidthXL);
  }
`;

export const Grid = styled(motion.div)`
  display: grid;
  gap: 2rem;

  @media ${breakpoint.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Box = styled(motion.div)`
  div {
    display: flex;
    justify-content: center;
    object-fit: cover;
    height: 100%;
    display: grid;
    place-items: center;
    overflow: hidden;
    position: relative;
    background: ${(props) => props.bgColor};

    img {
      width: 90%;
      height: auto;
    }

    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: 0.3s ease;
      background: ${(props) => props.overlayColor};

      .text {
        color: white;
        position: absolute;
        width: 100%;
        height: auto;
        top: 0;
        left: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        font-size: 1.2rem;
        background: transparent;

        h2 {
          padding-bottom: 10px;
        }

        p {
          font-weight: 300;
          font-size: 1rem;
        }
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  &:hover {
    opacity: 0.95;
    z-index: 9;
  }
`;
