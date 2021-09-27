import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
  body {
    font-family: 'Open Sans Condensed';
    padding: 20px 40px;

    // maxwidth -> any device with smaller size will get style
    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }
`;