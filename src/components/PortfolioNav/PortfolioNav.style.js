import styled from "styled-components";

import { breakpoint } from "../../utils";

export const Wrapper = styled.div`
  padding-inline: 2rem;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;

  @media ${breakpoint.desktopXL} {
    max-width: var(--maxWidthXL);
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    padding: 3rem 0 4rem 0;

    @media ${breakpoint.tablet} {
      padding: 4rem 0 5rem 0;
    }

    @media ${breakpoint.desktopXL} {
      padding: 6rem 0 7rem 0;
    }

    div {
      :last-of-type {
        text-align: right;
      }

      a {
        color: var(--clr-middle);
        text-decoration: none;
        transition: 0.3s ease-in-out;

        :hover {
          color: var(--clr-light);
        }

        h2 {
          font-weight: 400;
          font-size: 1.5rem;

          @media ${breakpoint.tablet} {
            font-size: 1.75rem;
          }

          @media ${breakpoint.desktop} {
            font-size: 2rem;
          }

          @media ${breakpoint.desktopXL} {
            font-size: 2.5rem;
          }
        }

        p {
          font-size: 0.675rem;
          font-weight: 200;
          margin-top: 5px;
          display: none;

          @media ${breakpoint.tablet} {
            font-size: 0.875rem;
            margin-top: 8px;
            display: block;
          }

          @media ${breakpoint.desktopXL} {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;
