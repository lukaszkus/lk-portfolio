import styled from "styled-components";

import { breakpoint } from "../../utils";

export const Wrapper = styled.section`
  padding-inline: 2rem;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;

  @media ${breakpoint.desktopXL} {
    max-width: var(--maxWidthXL);
  }
`;
