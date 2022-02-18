import React from "react";
import styled, { keyframes } from "styled-components";
import breakpoint from "../utils/breakpoints";

const HeaderContainer = styled.header`
  height: 100vh;
  width: 100%;
  background: #c9ccd3;
  background-image: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background-blend-mode: lighten;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${breakpoint.device.tablet} {
    font-size: 4rem;
  }

  @media ${breakpoint.device.desktop} {
    font-size: 6rem;
  }
`;

const Subtitle = styled.div`
  height: 30px;
  overflow: hidden;

  @media ${breakpoint.device.tablet} {
    height: 55px;
  }

  @media ${breakpoint.device.desktop} {
    height: 70px;
  }
`;

const move = keyframes`
100% {transform: translateY(-30px);}

@media ${breakpoint.device.tablet} {
  100% {transform: translateY(-55px);}
}

@media ${breakpoint.device.desktop} {
  100% {transform: translateY(-70px);}
}
`;

const moveTablet = keyframes`
100% {transform: translateY(-55px);}
`;

const moveDesktop = keyframes`
100% {transform: translateY(-70px);}
`;

const SubtitleWrapper = styled.div`
  height: 100%;
  animation: ${move} 6s ease-in-out infinite alternate;

  @media ${breakpoint.device.tablet} {
    height: 100%;
    animation: ${moveTablet} 6s ease-in-out infinite alternate;
  }

  @media ${breakpoint.device.desktop} {
    height: 100%;
    animation: ${moveDesktop} 6s ease-in-out infinite alternate;
  }
`;

const SubtitleItem = styled.div`
  height: 30px;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  background-image: linear-gradient(
    to right,
    #b8cbb8 0%,
    #b8cbb8 0%,
    #b465da 0%,
    #cf6cc9 33%,
    #ee609c 66%,
    #ee609c 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${breakpoint.device.tablet} {
    font-size: 3rem;
    height: 55px;
  }

  @media ${breakpoint.device.desktop} {
    font-size: 4rem;
    height: 70px;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>
        Hi, I'm Kusiu.
        <Subtitle>
          <SubtitleWrapper>
            <SubtitleItem>FRONT-END DEVELOPER</SubtitleItem>
            <SubtitleItem>GRAPHIC DESIGNER</SubtitleItem>
          </SubtitleWrapper>
        </Subtitle>
      </HeaderTitle>
    </HeaderContainer>
  );
}

export default Header;
