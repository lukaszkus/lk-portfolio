import styled from "styled-components";
import { motion } from "framer-motion";

import { breakpoint } from "../../utils";

export const Wrapper = styled.footer`
  padding: 0 2rem;
  margin: 2rem 0 6rem 0;

  @media ${breakpoint.desktop} {
    margin: 4rem 0 8rem 0;
  }
`;

export const Content = styled(motion.div)`
  max-width: var(--maxWidth);
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  gap: 1.5rem;

  @media ${breakpoint.tablet} {
    flex-direction: row;
    justify-content: space-between;
    gap: 3rem;
  }

  @media ${breakpoint.desktopXL} {
    max-width: var(--maxWidthXL);
  }
`;

export const Box = styled(motion.div)`
  display: flex;
  gap: 2rem;

  p {
    font-size: 0.75rem;
    font-weight: 200;
    color: var(--clr-middle);

    @media ${breakpoint.tablet} {
      font-size: 1rem;
    }
  }

  a {
    font-size: 1rem;
    font-weight: 400;
    color: var(--clr-middle);
    text-decoration: none;
    transition: 0.3s ease-in-out;

    :hover {
      color: var(--clr-light);
    }
  }
`;
