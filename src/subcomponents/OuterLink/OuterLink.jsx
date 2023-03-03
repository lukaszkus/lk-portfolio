import { Icon } from "../";

import { StyledLink } from "./StyledOuterLink";

const OuterLink = ({ color, href, icon, text, height, width }) => {
  return (
    <StyledLink href={href} color="#c3cfe2">
      <Icon icon={icon} color="#c3cfe2" width={width} height={height} />
      {text}
    </StyledLink>
  );
};

export default OuterLink;
