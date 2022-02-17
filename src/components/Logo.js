import React from "react";
import styled from "styled-components";
import logo from "../assets/ksu.svg";

const LogoContainer = styled.div`
  font-size: 3rem;
  color: white;
  opacity: 0.9;
`;

const LogoImg = styled.img.attrs({
  src: `${logo}`,
})`
  height: 22px;

  @media (min-width: 600px) {
    height: 30px;
  }
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImg />
    </LogoContainer>
  );
}

export default Logo;
