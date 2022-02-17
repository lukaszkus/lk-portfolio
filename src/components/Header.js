import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 100vh;
  background: #c9ccd3;
  background-image: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background-blend-mode: lighten;
  padding: 1.25rem 2rem;
  display: grid;
  place-items: center;
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  span {
    font-size: 2.5rem;
  }

  @media (min-width: 600px) {
    font-size: 4rem;
    span {
      font-size: 3rem;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>
        Hi, I'm Kusiu.
        <br />
        <span>Graphic designer & Front-end developer</span>
      </HeaderTitle>
    </HeaderContainer>
  );
}

export default Header;
