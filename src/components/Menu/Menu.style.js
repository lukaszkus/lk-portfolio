import styled from "styled-components";
import { motion } from "framer-motion";

import { breakpoint } from "../../utils";

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;

  /* @media ${breakpoint.desktop} {
    padding: 1.5rem;
  } */
`;

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
  width: 90%;
  height: 100%;
  background: var(--clr-light);
  padding: 6rem 2rem 4rem 2rem;

  @media ${breakpoint.desktop} {
    width: 40%;
    padding: 6rem 4rem 4rem 4rem;
    gap: 2rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.75rem;
    font-weight: 400;

    @media ${breakpoint.tablet} {
      font-size: 2.25rem;
    }
  }

  .line {
    border-left: 1px solid var(--clr-middle);
    flex: 1;
  }

  a {
    color: #3f4856;
    text-decoration: none;
    transition: 0.6s all ease-in-out;

    :hover {
      color: var(--clr-middle);
    }
  }

  .email {
    font-size: 0.875rem;
  }
`;
