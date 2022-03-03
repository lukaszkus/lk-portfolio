import styled from "styled-components";
import breakpoint from "../utils/breakpoints";

import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

const FContainer = styled.footer`
  min-height: 50vh;
  position: relative;
  width: 100%;
  padding: 2rem;
  display: flex;

  @media ${breakpoint.device.tablet} {
    padding: 6rem;
  }
`;

const FBoxContainer = styled.div`
  display: grid;
  width: 100%;
  border-top: 1px solid #6a11cb;
  padding: 2rem 0;

  @media ${breakpoint.device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${breakpoint.device.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FBox = styled.div`
  font-family: "Poppins", sans-serif;
`;

const FBoxTitle = styled.p`
  font-weight: 600;
  margin-bottom: 6px;
  color: #6a11cb;
`;

const FBoxContent = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
`;

const FLink = styled.a.attrs((props) => ({
  href: props.path,
}))``;

const FIcon = styled.img.attrs((props) => ({
  src: props.icon,
}))`
  height: 1.25rem;

  &:first-child {
    padding-right: 10px;
  }

  @media ${breakpoint.device.tablet} {
    height: 1.5rem;
  }
`;

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
          <FBoxTitle>Contact</FBoxTitle>
          <FBoxContent>LinkedIn</FBoxContent>
        </FBox>
        <FBox data-aos="fade-down" data-aos-duration="700">
          <FLink path="https://github.com/lukaszkus">
            <FIcon icon={github} />
          </FLink>
          <FLink path="https://www.linkedin.com/in/lukasz-kus/">
            <FIcon icon={linkedin} />
          </FLink>
        </FBox>
      </FBoxContainer>
    </FContainer>
  );
}

export default Footer;
