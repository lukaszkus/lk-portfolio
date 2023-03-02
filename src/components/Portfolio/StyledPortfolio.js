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
  gap: 2.5rem;

  @media ${breakpoint.tablet} {
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: masonry; */
  }
`;

export const Box = styled(motion.div)`
  div {
    overflow: hidden;
    border-radius: 0.675rem;

    @media ${breakpoint.tablet} {
      border-radius: 1rem;
    }

    img {
      width: 100%;
      display: block;
      height: 100%;
      transition: all 0.6s ease-out;

      :hover {
        scale: 1.05;
        /* opacity: 0.8; */
      }
    }
  }
`;

export const Text = styled.div`
  h2 {
    padding-top: 0.75rem;
    font-size: 1rem;
    font-weight: 300;
    color: var(--clr-light);
    text-decoration: none;

    @media ${breakpoint.tablet} {
      padding-top: 1rem;
      font-size: 1.25rem;
    }
  }

  p {
    padding: 0.375rem 0;
    font-size: 0.75rem;
    font-weight: 200;
    color: var(--clr-middle);
    text-decoration: none;

    @media ${breakpoint.tablet} {
      /* padding: 0.75rem 0; */
      font-size: 0.875rem;
    }
  }
`;
