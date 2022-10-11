import styled from "styled-components";

import { COLORS } from "../../utils";

export const StyledLink = styled.a.attrs((props) => ({
  href: props.href,
}))`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: ${COLORS.white};
  transition: 0.2s;

  &:hover {
    text-decoration: none;
    color: ${(props) => props.color};
  }
`;
