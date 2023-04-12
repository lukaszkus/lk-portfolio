import styled from "styled-components";

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

  a {
    text-decoration: none;
  }

  button {
    font-family: var(--ff-main);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: 300;
    color: var(--clr-light);
    display: inline-flex;
    gap: 0.5rem;

    :hover {
      color: var(--clr-middle);
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

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;

  @media ${breakpoint.tablet} {
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
  }

  p {
    font-weight: 200;
    font-size: 1rem;
    line-height: 2;
    width: 100%;

    @media ${breakpoint.tablet} {
      font-size: 1.125rem;
      width: 60%;
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media ${breakpoint.tablet} {
    align-items: center;
  }

  div {
    h3 {
      font-size: 2.5rem;
      font-weight: 600;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(to right, #209cff 0%, #68e0cf 100%);
      padding-bottom: 1rem;

      @media ${breakpoint.tablet} {
        font-size: 4rem;
      }

      @media ${breakpoint.desktopXL} {
        font-size: 5rem;
      }
    }

    p {
      font-weight: 200;
      font-size: 1rem;
      line-height: 2;

      @media ${breakpoint.tablet} {
        font-size: 1.125rem;
      }
    }
  }
`;
