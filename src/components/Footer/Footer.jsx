import { images } from "../../utils";

import {
  FContainer,
  FBoxContainer,
  FBox,
  FBoxTitle,
  FBoxContent,
  FLink,
  FIcon,
} from "./StyledFooter";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <FContainer>
      <FBoxContainer>
        <FBox data-aos="fade-down" data-aos-duration="300">
          <FBoxTitle>Łukasz Kuś</FBoxTitle>
          <FBoxContent>&copy; {date} All Rights Reserved</FBoxContent>
        </FBox>
        <FBox data-aos="fade-down" data-aos-duration="500">
          <FLink path="https://github.com/lukaszkus">
            <FIcon icon={images.github} />
          </FLink>
          <FLink path="https://www.linkedin.com/in/lukasz-kus/">
            <FIcon icon={images.linkedin} />
          </FLink>
        </FBox>
      </FBoxContainer>
    </FContainer>
  );
}

export default Footer;
