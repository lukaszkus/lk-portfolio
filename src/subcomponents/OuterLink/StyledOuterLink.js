import styled from "styled-components";

import { COLORS } from "../../utils";

export const StyledLink = styled.a.attrs((props) => ({
  href: props.href,
  color: props.color,
}))`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: ${(props) => (props.color ? props.color : COLORS.white)};

  &:hover {
    text-decoration: none;
  }
`;
