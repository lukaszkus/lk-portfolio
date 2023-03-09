import styled from "styled-components";

import { breakpoint } from "../../utils";

export const Wrapper = styled.footer`
  padding: 0 2rem;
  margin-bottom: 5rem;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media ${breakpoint.desktopXL} {
    max-width: var(--maxWidthXL);
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 3rem;

  p {
    font-size: 1rem;
    font-weight: 200;
    color: var(--clr-middle);
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

  /* a {
    font-size: 0.875rem;
    font-weight: 300;

    :first-of-type {
      color: var(--clr-accentSecondary);
    }

    :last-of-type {
      color: var(--clr-accentPrimary);
    }
  } */
`;
