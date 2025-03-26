import Web from "../../assets/icon-web.svg?react";
import Github from "../../assets/icon-github.svg?react";
import Download from "../../assets/icon-download.svg?react";
import FM from "../../assets/icon-fm.svg?react";
import Filter from "../../assets/icon-filter.svg?react";

const OuterLink = ({ icon, color, height, width }) => {
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
      case "filter":
        return <Filter fill={color} width={width} height={height} />;
      default:
        return null;
    }
  };

  return <>{getIcon(icon)}</>;
};

export default OuterLink;
