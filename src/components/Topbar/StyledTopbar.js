import styled from "styled-components";
import { breakpoint } from "../../utils";

export const TopbarContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${breakpoint.desktop} {
    padding: 2rem;
  }
`;
