import styled from "styled-components";

import { breakpoint } from "../../utils";

export const Wrapper = styled.header`
  min-height: 100vh;
  padding: 2rem;
  display: grid;
  place-items: center;
  position: relative;

  .spin {
    position: fixed;
    bottom: 2rem;
    right: 0;
    z-index: 9;

    svg {
      fill: currentColor;
      height: auto;
      max-width: 66vmin;
      transform-origin: center;
      width: 66%;
      letter-spacing: 10px;
      animation: spin 20s linear infinite;
      font-weight: 200;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  width: 100%;

  /* @media ${breakpoint.desktopXL} {
    max-width: var(--maxWidthXL);
  } */
`;

export const Title = styled.div`
  p {
    font-weight: 200;
    font-size: 1.5rem;

    padding: 0.5rem 0;

    @media ${breakpoint.tablet} {
      font-size: 2.5rem;
    }

    @media ${breakpoint.desktopXL} {
      font-size: 3rem;
    }

    :last-of-type {
      font-size: 1.25rem;
    }
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 600;

    span {
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      &:first-child {
        background-image: linear-gradient(
          to right,
          #b8cbb8 0%,
          #b8cbb8 0%,
          #b465da 0%,
          #cf6cc9 33%,
          #ee609c 66%,
          #ee609c 100%
        );
      }

      &:last-child {
        background-image: linear-gradient(to right, #209cff 0%, #68e0cf 100%);
      }
    }

    @media ${breakpoint.tablet} {
      font-size: 4.5rem;
    }

    @media ${breakpoint.desktopXL} {
      font-size: 6rem;
    }
  }
`;
