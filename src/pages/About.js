import styled from "styled-components";
import breakpoint from "../utils/breakpoints";
// import me from "../assets/me.jpg";

const AboutContainer = styled.section`
  height: 100vh;
  width: 100%;
  padding: 8rem 2rem 2rem 2rem;
  display: grid;

  @media ${breakpoint.device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    padding: 8rem 4rem 4rem 4rem;
  }

  @media ${breakpoint.device.desktop} {
    padding: 8rem 6rem 4rem 6rem;
  }
`;

const AboutBox = styled.article`
  width: 100%;

  @media ${breakpoint.device.tablet} {
  }
`;

// const AboutImg = styled.img.attrs({
//   src: `${me}`,
// })`
// `;

const AboutTitle = styled.h1`
  font-size: 2.5rem;
  color: #6a11cb;
  padding-top: 2rem;
  border-top: 1px solid #6a11cb;
`;

const AboutText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8;
  padding: 2rem 0;
  color: #6a11cb;

  @media ${breakpoint.device.tablet} {
    border-top: 1px solid #6a11cb;
  }
`;

function About() {
  return (
    <AboutContainer>
      <AboutBox>
        {/* <AboutImg /> */}
        <AboutTitle>About</AboutTitle>
      </AboutBox>
      <AboutBox>
        <AboutText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
          cupiditate aspernatur possimus consequatur. Nihil animi repudiandae
          adipisci sunt iste rerum? Maiores totam tenetur distinctio expedita
          odio nemo perferendis iste illo!
        </AboutText>
      </AboutBox>
    </AboutContainer>
  );
}

export default About;
