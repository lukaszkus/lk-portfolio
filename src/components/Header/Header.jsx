import { images } from "../../utils";

import {
  HeaderContainer,
  TitleContainer,
  HeaderTitle,
  HeaderSubtitle,
  SubtitleWrapper,
  SubtitleItem,
} from "./StyledHeader";

function Header() {
  return (
    <HeaderContainer>
      <TitleContainer>
        <img src={images.me} alt="Me" data-aos="fade-down" />
        <HeaderTitle data-aos="fade-up" data-aos-duration="300">
          Hi,
          <br />
          I'm Kusiu.
        </HeaderTitle>
        <HeaderSubtitle>
          <SubtitleWrapper>
            <SubtitleItem data-aos="fade-up" data-aos-duration="600">
              FRONT-END DEVELOPER
            </SubtitleItem>
            <SubtitleItem data-aos="fade-up" data-aos-duration="800">
              & GRAPHIC DESIGNER
            </SubtitleItem>
          </SubtitleWrapper>
        </HeaderSubtitle>
      </TitleContainer>
    </HeaderContainer>
  );
}

export default Header;
