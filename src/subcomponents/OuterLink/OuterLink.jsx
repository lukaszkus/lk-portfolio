import { ReactComponent as Web } from "../../assets/icon-web.svg";
import { ReactComponent as Github } from "../../assets/icon-github.svg";
import { ReactComponent as Download } from "../../assets/icon-download.svg";
import { ReactComponent as FM } from "../../assets/icon-fm.svg";

import { StyledLink } from "./StyledOuterLink";

const OuterLink = ({ color, href, icon, text, height, width }) => {
  const getIcon = (icon) => {
    switch (icon) {
      case "liveSite":
        return <Web fill={color} width={width} height={height} />;
      case "github":
        return <Github fill={color} width={width} height={height} />;
      case "download":
        return <Download fill={color} width={width} height={height} />;
      case "frontendMentor":
        return <FM fill={color} width={width} height={height} />;
      default:
        return null;
    }
  };

  return (
    <StyledLink href={href} color={color}>
      {getIcon(icon)}
      {text}
    </StyledLink>
  );
};

export default OuterLink;
