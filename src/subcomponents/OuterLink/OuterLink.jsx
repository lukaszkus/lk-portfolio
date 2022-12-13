import { Icon } from "../";

import { StyledLink } from "./StyledOuterLink";

const OuterLink = ({ color, href, icon, text, height, width }) => {
  return (
    <StyledLink href={href} color={color}>
      <Icon icon={icon} color={color} width={width} height={height} />
      {text}
    </StyledLink>
  );
};

export default OuterLink;
