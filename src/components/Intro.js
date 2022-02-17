import React from "react";
import styled from "styled-components";

const IntroContainer = styled.header`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to top,
    #d5d4d0 0%,
    #d5d4d0 1%,
    #eeeeec 31%,
    #efeeec 75%,
    #e9e9e7 100%
  );
`;

function Intro() {
  return <IntroContainer>Intro</IntroContainer>;
}

export default Intro;
