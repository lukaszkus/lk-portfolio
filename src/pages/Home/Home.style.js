import styled from "styled-components";

import { breakpoint } from "../../utils";

export const Wrapper = styled.div`
  padding-inline: 2rem;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 4rem;

  @media ${breakpoint.desktop} {
    padding: 6rem 0;
  }

  @media ${breakpoint.desktopXL} {
    max-width: var(--maxWidthXL);
  }

  button {
    font-family: var(--ff-main);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: 300;
    color: var(--clr-middle);
    display: inline-flex;
    gap: 0.5rem;

    :hover {
      color: var(--clr-light);
    }

    @media ${breakpoint.tablet} {
      font-size: 1.5rem;
    }

    span {
      font-size: 1.5rem;

      @media ${breakpoint.tablet} {
        font-size: 1.875rem;
      }
    }
  }
`;

export const Quote = styled.q`
  font-weight: 200;
  font-size: 1rem;
  line-height: 2;
  width: 60%;
  padding: 1rem;
`;
