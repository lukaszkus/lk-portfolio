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

  div {
    display: flex;
    justify-content: space-between;
  }
`;
