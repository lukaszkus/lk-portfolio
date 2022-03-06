import styled, { keyframes } from "styled-components";
import breakpoint from "../utils/breakpoints";

const HeaderContainer = styled.header`
  height: 100vh;
  position: relative;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  overflow: hidden;
`;

const TitleContainer = styled.div`
  padding-top: 2rem;

  @media ${breakpoint.device.tablet} {
    padding-top: 4rem;
  }
`;

const rotateA = keyframes`
  100% {
    transform: skew(40deg) rotate(360deg) scale(3) translateX(30px) translateY(-50px);
    filter: blur(15px);
  }
`;

const rotateB = keyframes`
  100% {
    transform: skew(10deg) rotate(-135deg) scale(3) translateX(50px) translateY(100px);
    filter: blur(35px);
  }
`;

const A = styled.div`
  content: "";
  position: fixed;
  width: 80px;
  height: 50px;
  top: 23%;
  left: -5%;
  background-image: linear-gradient(
    to right,
    #f78ca0 0%,
    #f9748f 19%,
    #fd868c 60%,
    #fe9a8b 100%
  );
  transform: skew(20deg) rotate(-10deg);
  filter: blur(5px);
  animation: ${rotateA} 20s infinite alternate;

  @media ${breakpoint.device.tablet} {
    left: 20%;
  }
`;

const B = styled.div`
  content: "";
  position: fixed;
  width: 260px;
  height: 200px;
  top: 45%;
  left: 60%;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  transform: skew(-38deg) rotate(25deg);
  filter: blur(15px);
  animation: ${rotateB} 30s infinite alternate;

  @media ${breakpoint.device.desktop} {
    width: 320px;
    height: 246px;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 3.5rem;
  line-height: 1;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  margin-bottom: 5px;

  @media ${breakpoint.device.tablet} {
    font-size: 4.5rem;
    margin-bottom: 20px;
  }

  @media ${breakpoint.device.desktopXL} {
    font-size: 6.5rem;
  }
`;

const HeaderSubtitle = styled.div`
  position: relative;
  margin-bottom: 50px;
`;

const SubtitleWrapper = styled.div``;

const SubtitleItem = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 5px;
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
    margin-bottom: 10px;
  }

  @media ${breakpoint.device.desktopXL} {
    font-size: 4rem;
  }
`;

// const HeaderLink = styled.a`
//   font-family: "Poppins", sans-serif;
//   // font-size: 0.9rem;
//   // font-weight: 300;
//   position: relative;
//   color: #6a11cb;

//   &:hover {
//     cursor: pointer;
//   }

//   // @media ${breakpoint.device.tablet} {
//   //   font-size: 1rem;
//   // }

//   // @media ${breakpoint.device.desktop} {
//   //   font-size: 1.25rem;
//   // }
// `;

function Header() {
  return (
    <HeaderContainer>
      <TitleContainer>
        <A />
        <B />
        <HeaderTitle data-aos="fade-up" data-aos-duration="300">
          Hi, I'm Kusiu.
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
        {/* <HeaderLink data-aos="fade-up" data-aos-duration="1500">
          View my work.
        </HeaderLink> */}
      </TitleContainer>
    </HeaderContainer>
  );
}

export default Header;
