import styled from "styled-components";
import breakpoint from "../utils/breakpoints";
import logo from "../assets/ksu.svg";

const AboutContainer = styled.section`
  height: 100vh;
  position: relative;
  width: 100%;
  padding: 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;

  @media ${breakpoint.device.tablet} {
    padding: 2rem 4rem;
  }

  @media ${breakpoint.device.desktop} {
    padding: 2rem 6rem;
  }

  @media ${breakpoint.device.desktopXL} {
    gap: 2rem;
  }
`;

const AboutBox = styled.article`
  width: 50%;
`;

const AboutImg = styled.img.attrs({
  src: `${logo}`,
})`
  width: 200px;
`;

const AboutTitle = styled.h1``;

function About() {
  return (
    <AboutContainer>
      <AboutBox>
        <AboutImg />
      </AboutBox>
      <AboutBox>
        <AboutTitle>About me</AboutTitle>
      </AboutBox>
    </AboutContainer>
  );
}

export default About;
