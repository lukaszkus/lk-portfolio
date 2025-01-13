import styled from "styled-components";
import { motion } from "framer-motion";

import { breakpoint } from "../../utils";

export const Wrapper = styled.div`
  padding-inline: 2rem;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 4rem 0;

  @media ${breakpoint.desktop} {
    padding: 6rem 0;
  }

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

  @media ${breakpoint.desktopXL} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Box = styled(motion.div)`
  @media ${breakpoint.tablet} {
    margin-bottom: 1.5rem;
  }

  div {
    border-radius: 1rem;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: 100%;
      transition: 0.6s all ease-out;
    }
  }
`;

export const Text = styled.div`
  h2 {
    padding-top: 0.875rem;
    font-size: 1.125rem;
    font-weight: 300;
    color: var(--clr-light);
    text-decoration: none;

    @media ${breakpoint.tablet} {
      padding-top: 1rem;
      font-size: 1.375rem;
    }

    @media ${breakpoint.desktopXL} {
      padding-top: 1rem;
      font-size: 1.625rem;
    }
  }

  p {
    padding: 0.5rem 0;
    font-size: 0.75rem;
    font-weight: 200;
    color: var(--clr-middle);
    text-decoration: none;

    @media ${breakpoint.tablet} {
      font-size: 1rem;
    }
  }
`;
