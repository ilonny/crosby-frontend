//@ts-ignore
import { createGlobalStyle } from "styled-components";
// eslint-disable-next-line
// ${fontFace("Futura", "FuturaPT-Light", 100, "normal")}
// ${fontFace("Futura", "FuturaPT-Book", 300, "normal")}
// ${fontFace("Futura", "FuturaPT-Book", "normal", "normal")}
// ${fontFace("Futura", "FuturaPT-Bold", 600, "normal")}
// ${fontFace("Futura", "futura_pt_book", "normal", "normal")}
export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Helvetica", "Helvetica Neue", "Open Sans", sans-serif;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    color: #000;
    background: #E5E5E5;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  :root {
    // font-size: 10px;
  }
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    border-width: 0px;
  }
  body {
  }

  #root {
  }

  tt,
  code,
  kbd,
  samp,
  listing {
  }

  button{
    cursor: pointer;
  }
`;
