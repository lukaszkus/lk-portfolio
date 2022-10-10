import styled from "styled-components";

import { COLORS } from "../../utils";

export const StyledLink = styled.a.attrs((props) => ({
  href: props.href,
}))`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  // color: ${(props) => (props.color ? props.color : COLORS.white)};

  &:hover {
    text-decoration: none;
  }
`;

export const StyledIcon = styled.img.attrs((props) => ({
  src: props.src,
  width: props.width,
  height: props.height,
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
}
`;
