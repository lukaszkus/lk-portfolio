import styled from "styled-components";

import { breakpoint } from "../../utils";

export const Wrapper = styled.div`
  margin-top: 80px;

  @media ${breakpoint.desktop} {
    margin-top: 112px;
  }
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 4rem 2rem;

  @media ${breakpoint.desktop} {
    padding: 6rem 0;
  }

  @media ${breakpoint.desktopXL} {
    max-width: var(--maxWidthXL);
  }

  /* p {
    padding: 1rem 0;
    font-weight: 200;
  } */
`;
