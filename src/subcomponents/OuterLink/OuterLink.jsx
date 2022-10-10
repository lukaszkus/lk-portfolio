import React from "react";
import styled from "styled-components";

import { images, COLORS } from "../../utils";

const StyledLink = styled.a.attrs((props) => ({
  href: props.href,
}))`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: ${(props) => (props.color ? props.color : COLORS.white)};

  &:hover {
    text-decoration: none;
  }
`;

const StyledIcon = styled.span.attrs((props) => ({
  icon: props.icon,
  width: props.width,
  height: props.height,
}))`
  background-image: url(${(props) => props.icon});
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: block;
`;

const OuterLink = ({ href, text, icon, width, height }) => {
  const getIcon = (icon) => {
    switch (icon) {
      case "liveSite":
        return images.icon_web;
      case "github":
        return images.icon_github;
      case "download":
        return images.icon_download;
      default:
        return null;
    }
  };

  return (
    <StyledLink href={href}>
      <StyledIcon icon={getIcon(icon)} width={width} height={height} />
      {text}
    </StyledLink>
  );
};

export default OuterLink;
