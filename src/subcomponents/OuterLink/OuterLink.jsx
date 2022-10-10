import { images } from "../../utils";
import { StyledLink, StyledIcon } from "./StyledOuterLink";

const OuterLink = ({ href, text, icon, width, height }) => {
  const getIcon = (icon) => {
    switch (icon) {
      case "liveSite":
        return images.icon_web;
      case "github":
        return images.icon_github;
      case "download":
        return images.icon_download;
      case "frontendMentor":
        return images.icon_fm;
      default:
        return null;
    }
  };

  return (
    <StyledLink href={href}>
      <StyledIcon src={getIcon(icon)} width={width} height={height} />
      {text}
    </StyledLink>
  );
};

export default OuterLink;
