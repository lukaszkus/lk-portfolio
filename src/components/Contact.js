import styled from "styled-components";
import breakpoint from "../utils/breakpoints";

const CContainer = styled.section`
  height: 100%;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 6rem;
  background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);

  @media ${breakpoint.device.tablet} {
    align-items: center;
    // padding: 10rem;
  }
`;

const CTitle = styled.h2`
  font-size: 3rem;
  padding: 1rem 0;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CContent = styled.p`
  font-family: "Poppins", sans-serif;
`;

function Contact() {
  return (
    <CContainer>
      <CTitle>Get in Touch</CTitle>
      <CContent>Bla bla bla emajl</CContent>
    </CContainer>
  );
}

export default Contact;
