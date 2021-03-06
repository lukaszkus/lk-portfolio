import styled from "styled-components";

import { breakpoint } from "../../utils";

export const CContainer = styled.section`
  position: relative;
  overflow: hidden;
  padding: 0 2rem;
`;

export const CBox = styled.div`
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

    @media ${breakpoint.tablet} {
      width: 90%;
      height: 90%;
    }
  }

  @media ${breakpoint.tablet} {
    height: 100vh;
  }
`;

export const CTitle = styled.h2`
  position: relative;
  font-size: 2.5rem;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${breakpoint.tablet} {
    font-size: 3rem;
  }
`;

export const CText = styled.p`
  text-align: center;
  position: relative;
  font-family: "Poppins", sans-serif;
  padding-bottom: 10px;
`;

export const CLink = styled.a.attrs((props) => ({
  href: props.mail,
}))`
  color: #000;
  text-align: center;
  position: relative;
  font-family: "Poppins", sans-serif;
  text-decoration: underline;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    color: #6a11cb;
  }
`;
