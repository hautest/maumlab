import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  ${reset};
  html * {
    color: ${theme.colors.black};
    box-sizing: border-box;
    @font-face {
    font-family: 'SUIT-Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
font-family: "SUIT-Medium";
  }
  body {
    height: 100vh;
  }
  a {
    text-decoration-line : none;
  }
  #__next {
    height: 100%;
  }
`;
