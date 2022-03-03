import styled from "styled-components";
import breakpoint from "../utils/breakpoints";

const CContainer = styled.section`
  position: relative;
  overflow: hidden;
  padding: 0 2rem;
`;

const CBox = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 80%;
    background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
    transform: skew(21deg) rotate(2deg);

    @media ${breakpoint.device.tablet} {
      width: 90%;
      height: 90%;
    }
  }

  @media ${breakpoint.device.tablet} {
    height: 100vh;
  }
`;

const CTitle = styled.h2`
  position: relative;
  font-size: 3rem;
  // padding: 1rem 0;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CContent = styled.p`
  position: relative;
  font-family: "Poppins", sans-serif;
`;

function Contact() {
  return (
    <CContainer>
      <CBox data-aos="fade-up" data-aos-duration="300">
        <CTitle data-aos="fade-up" data-aos-duration="600">
          Get in Touch
        </CTitle>
        <CContent data-aos="fade-up" data-aos-duration="800">
          Bla bla bla emajl
        </CContent>
      </CBox>
    </CContainer>
  );
}

export default Contact;
