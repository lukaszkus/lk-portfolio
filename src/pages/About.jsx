import styled from "styled-components";
import useDocumentTitle from "../hooks/useDocumentTitle";

import { breakpoint } from "../utils";

const AboutContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 8rem 2rem 2rem 2rem;
  // display: flex;

  @media ${breakpoint.tablet} {
    display: flex;
    padding: 8rem 4rem 4rem 4rem;
  }

  @media ${breakpoint.desktop} {
    padding: 8rem 6rem 4rem 6rem;
  }
`;

const AboutBox = styled.article`
  width: 100%;

  @media ${breakpoint.tablet} {
    width: 50%;
  }
`;

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

  @media ${breakpoint.tablet} {
    border-top: 1px solid #6a11cb;
  }
`;

function About({ titlePrefix, titleSuffix }) {
  useDocumentTitle(`${titlePrefix}${titleSuffix}`);
  return (
    <AboutContainer>
      <AboutBox>
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
