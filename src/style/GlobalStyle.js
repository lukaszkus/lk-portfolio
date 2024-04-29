import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    //Colors
    --clr-dark: #242930;
    --clr-light: #c3cfe2;
    --clr-middle: #6f7a87;
    --clr-middle-2: #303a48;
    --clr-accentPrimary: #2575fc;
    --clr-accentSecondary: #ee609c;
    --clr-white: #ffffff;
    
    //Fonts
    --ff-main: "Unbounded", cursive;

    //Widths
    --bp-tablet: 640px;
    --bp-desktop: 1280px;
    --bp-desktopXL: 1600px;

    --maxWidth: 1024px;
    --maxWidthXL: 1400px;
  }

  ::-webkit-scrollbar {
    height: 5px;
    width: 5px;
    background: #2e343d;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 1px;
    background-image: linear-gradient(
        to bottom,
        #b8cbb8 0%,
        #b8cbb8 0%,
        #b465da 0%,
        #cf6cc9 33%,
        #ee609c 66%,
        #ee609c 100%
      );
  }

  ::-webkit-scrollbar-corner {
    background: var(--clr-light);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-family: var(--ff-main);
    background-color: var(--clr-dark);
    color: var(--clr-light);
    scroll-behavior: smooth;
  }
`;
