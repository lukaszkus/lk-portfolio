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

const TitleContainer = styled.div``;

const HeaderTitle = styled.h1`
  font-size: 3.5rem;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  @media ${breakpoint.device.tablet} {
    font-size: 4.5rem;
  }

  @media ${breakpoint.device.desktop} {
    font-size: 6.5rem;
  }
`;

const HeaderSubtitle = styled.div`
  height: 30px;
  overflow: hidden;
  margin-bottom: 50px;

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
  animation: ${move} 8s ease-in-out infinite alternate;
  animation-delay: 1.5s;

  @media ${breakpoint.device.tablet} {
    animation-name: ${moveTablet};
  }

  @media ${breakpoint.device.desktop} {
    animation-name: ${moveDesktop};
  }
`;

const SubtitleItem = styled.div`
  height: 30px;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

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
  }

  @media ${breakpoint.device.tablet} {
    font-size: 3rem;
    height: 55px;
  }

  @media ${breakpoint.device.desktop} {
    font-size: 4rem;
    height: 70px;
  }
`;

const HeaderCTA = styled.a`
  color: rgba(0, 0, 0, 0.3);
  font-family: "Poppins", sans-serif;
  font-size: 0.75rem;
  font-weight: 300;
  padding: 0.9rem 2rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 2.25rem;

  &:hover {
    transition: all 0.5s ease-in-out;
    color: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }

  @media ${breakpoint.device.tablet} {
    font-size: 1rem;
  }

  @media ${breakpoint.device.desktop} {
    font-size: 1.25rem;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <TitleContainer>
        <HeaderTitle>Hi, I'm Kusiu.</HeaderTitle>
        <HeaderSubtitle>
          <SubtitleWrapper>
            <SubtitleItem>FRONT-END DEVELOPER</SubtitleItem>
            <SubtitleItem>GRAPHIC DESIGNER</SubtitleItem>
          </SubtitleWrapper>
        </HeaderSubtitle>
        <HeaderCTA>Get in touch</HeaderCTA>
      </TitleContainer>
    </HeaderContainer>
  );
}

export default Header;
