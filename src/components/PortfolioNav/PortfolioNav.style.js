import styled from "styled-components";

import { breakpoint } from "../../utils";

export const Wrapper = styled.div`
  padding: 2rem;
  margin: 3rem 0;
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
    border-top: 1px solid var(--clr-accentSecondary);
    border-bottom: 1px solid var(--clr-accentSecondary);
    padding: 4rem 0;

    @media ${breakpoint.tablet} {
      padding: 5rem 0;
    }

    div {
      :last-of-type {
        text-align: right;
      }

      a {
        color: var(--clr-light);
        text-decoration: none;

        :hover {
          opacity: 0.75;
        }

        h2 {
          font-weight: 300;
          font-size: 1.5rem;

          @media ${breakpoint.tablet} {
            font-size: 1.5rem;
          }

          @media ${breakpoint.desktop} {
            font-size: 2rem;
          }
        }

        p {
          display: none;

          @media ${breakpoint.tablet} {
            display: block;
            font-size: 0.875rem;
            font-weight: 200;
            margin-top: 8px;
          }
        }
      }
    }
  }
`;
