import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

body {
  /* font-family: "Butler Stencil", sans-serif; */
  font-family: "Unbounded", cursive;
  position: relative;
  background-color: #242930;
  color: #c3cfe2;
  scroll-behavior: smooth;
}

.bgSvg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}

.background-gradient {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-image: radial-gradient(
    circle farthest-side at 100% 100%,
    rgba(56, 132, 255, 0.61),
    rgba(31, 35, 41, 0) 59%,
    rgba(31, 35, 41, 0)
  );
}

`;
