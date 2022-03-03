const size = {
  tablet: "640px",
  desktop: "1280px",
  desktopXL: "1600px",
};

const device = {
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopXL: `(min-width: ${size.desktopXL})`,
};

export default { size, device };
