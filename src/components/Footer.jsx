import styled from "styled-components";

import { images, breakpoint } from "../utils";

const FContainer = styled.footer`
  min-height: 40vh;
  position: relative;
  width: 100%;
  padding: 2rem;
  display: flex;

  @media ${breakpoint.tablet} {
    padding: 4rem;
  }

  @media ${breakpoint.desktop} {
    padding: 6rem;
  }
`;

const FBoxContainer = styled.div`
  width: 100%;
  border-top: 1px solid #6a11cb;
  padding: 2rem 0;

  @media ${breakpoint.tablet} {
    display: flex;
    gap: 4rem;
  }

  @media ${breakpoint.desktop} {
  }
`;

const FBox = styled.div`
  font-family: "Poppins", sans-serif;
  padding-bottom: 2rem;
`;

const FBoxTitle = styled.p`
  font-weight: 600;
  color: #6a11cb;
`;

const FBoxContent = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
`;

const FLink = styled.a.attrs((props) => ({
  href: props.path,
}))`
  &:first-child {
    padding-right: 20px;

    @media ${breakpoint.tablet} {
      padding-right: 15px;
    }
  }
`;

const FIcon = styled.img.attrs((props) => ({
  src: props.icon,
}))`
  height: 1.5rem;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.1);
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