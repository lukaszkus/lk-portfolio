import { CContainer, CBox, CTitle, CText, CLink } from "./StyledContact";

function Contact() {
  return (
    <CContainer>
      <CBox data-aos="fade-up" data-aos-duration="300">
        <CTitle data-aos="fade-up" data-aos-duration="600">
          Get in Touch
        </CTitle>
        <CText data-aos="fade-up" data-aos-duration="800">
          I’m open to job and project opportunities.
        </CText>
        <CLink
          mail="mailto:lukasz.kus84@outlook.com"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Drop me a line.
        </CLink>
      </CBox>
    </CContainer>
  );
}

export default Contact;
