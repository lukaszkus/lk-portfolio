import styled from "styled-components";

import { breakpoint } from "../../utils";

export const Wrapper = styled.div`
  margin-top: 80px;

  @media ${breakpoint.desktop} {
    margin-top: 112px;
  }
`;
