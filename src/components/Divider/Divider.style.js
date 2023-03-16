import styled from "styled-components";
import { motion } from "framer-motion";

import { breakpoint } from "../../utils";

export const Wrapper = styled(motion.div)`
  /* padding: 0 2rem; */
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media ${breakpoint.tablet} {
    gap: 1.5rem;
  }

  @media ${breakpoint.desktopXL} {
    max-width: var(--maxWidthXL);
  }

  .label {
    color: var(--clr-middle);
    font-size: 0.675rem;
    font-weight: 300;

    @media ${breakpoint.tablet} {
      font-size: 0.875rem;
    }

    @media ${breakpoint.desktopXL} {
      font-size: 1rem;
    }
  }

  .line {
    background-color: var(--clr-middle);
    height: 0.5px;
    flex: 1;
    transform-origin: left;
  }
`;
