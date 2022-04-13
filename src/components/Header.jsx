// import { Link } from "react-scroll";
import styled from "styled-components";
// import styled, { keyframes } from "styled-components";

import { images, breakpoint } from "../utils";

const HeaderContainer = styled.header`
  height: 100vh;
  position: relative;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #e4e4e1;
  background-image: radial-gradient(
      at top center,
      rgba(255, 255, 255, 0.03) 0%,
      rgba(0, 0, 0, 0.03) 100%
    ),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(143, 152, 157, 0.6) 100%
    );
  background-blend-mode: normal, multiply;
`;

const TitleContainer = styled.div`
  position: relative;
  padding-top: 6rem;

  @media ${breakpoint.tablet} {
    padding-top: 4rem;
  }

  img {
    width: 60%;
    height: auto;
    position: absolute;
    top: -20px;
    right: 0;

    @media ${breakpoint.tablet} {
      width: 50%;
      top: -70px;
      right: -30px;
    }
  }
`;

const HeaderTitle = styled.h1`
  position: relative;
  font-size: 3.5rem;
  line-height: 1;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 5px;

  @media ${breakpoint.tablet} {
    font-size: 4.5rem;
    margin-bottom: 20px;
  }

  @media ${breakpoint.desktopXL} {
    font-size: 6.5rem;
  }
`;

const HeaderSubtitle = styled.div`
  position: relative;
`;

const SubtitleWrapper = styled.div``;

const SubtitleItem = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 5px;

  &:first-child {
    background-image: linear-gradient(
      to right,
      #b8cbb8 0%,
      #b8cbb8 0%,
      #b465da 0%,
      #cf6cc9 33%,
      #ee609c 66%,
      #ee609c 100%
    );
  }

  &:last-child {
    background-image: linear-gradient(to right, #209cff 0%, #68e0cf 100%);
    margin-bottom: 0;
  }

  @media ${breakpoint.tablet} {
    font-size: 3rem;
  }

  @media ${breakpoint.desktopXL} {
    font-size: 4rem;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <TitleContainer>
        <img src={images.me} alt="Me" data-aos="fade-down" />
        <HeaderTitle data-aos="fade-up" data-aos-duration="300">
          Hi,
          <br /> I'm Kusiu.
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
