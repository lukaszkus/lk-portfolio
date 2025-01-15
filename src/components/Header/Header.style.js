import styled from "styled-components";
import { motion } from "framer-motion";

import { breakpoint } from "../../utils";

export const Wrapper = styled.header`
  min-height: 100svh;
  padding: 2rem;
  display: grid;
  place-items: center;
  position: relative;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  width: 100%;
  position: relative;

  @media ${breakpoint.tablet} {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  @media ${breakpoint.desktop} {
    gap: 4rem;
  }

  @media ${breakpoint.desktopXL} {
    max-width: var(--maxWidthXL);
    gap: 5rem;
  }

  .col-1 {
    display: none;

    @media ${breakpoint.tablet} {
      display: block;
    }
  }
`;

export const Title = styled(motion.div)`
  position: relative;
  z-index: 1;
  /* padding-top: 3rem; */

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
      font-size: 1rem;
      padding-bottom: 3.5rem;
      width: 90%;
      line-height: 1.5;

      @media ${breakpoint.tablet} {
        font-size: 1.25rem;
        padding-bottom: 4rem;
        width: 100%;
      }
    }
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 600;

    span {
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;

      &:first-child {
        background-image: linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);
      }

      &:last-child {
        background-image: linear-gradient(to right, #209cff 0%, #68e0cf 100%);
      }
    }

    @media ${breakpoint.desktop} {
      font-size: 3rem;
    }

    @media ${breakpoint.desktopXL} {
      font-size: 4rem;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media ${breakpoint.tablet} {
      flex-direction: row;
      align-items: center;
      gap: 1.5rem;
    }
  }

  button {
    font-family: var(--ff-main);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 300;
    display: inline-flex;
    gap: 0.5rem;

    @media ${breakpoint.tablet} {
      font-size: 1rem;
    }

    @media ${breakpoint.desktopXL} {
      font-size: 1.25rem;
    }

    span {
      font-size: 1.25rem;

      @media ${breakpoint.tablet} {
        font-size: 1.25rem;
      }

      @media ${breakpoint.desktopXL} {
        font-size: 1.5rem;
      }
    }
  }

  .projects {
    padding: 0.75rem 1.5rem;
    border: 1px solid var(--clr-accentPrimary);
    border-radius: 3rem;
    transition: color 0.3s ease-in-out;
    color: var(--clr-light);

    :hover {
      color: var(--clr-accentPrimary);
    }

    @media ${breakpoint.desktopXL} {
      padding: 1rem 1.875rem;
    }
  }

  .about {
    padding: 0.75rem 1.5rem;
    border: 1px solid var(--clr-middle);
    border-radius: 3rem;
    transition: color 0.3s ease-in-out;
    text-decoration: none;
    color: var(--clr-light);

    :hover {
      color: var(--clr-middle);
    }

    @media ${breakpoint.desktopXL} {
      padding: 1rem 1.875rem;
    }
  }
`;
