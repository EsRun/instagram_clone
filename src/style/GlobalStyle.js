import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  .container {
    padding: 1.6rem 21rem;
  }
  .w100 {
    width: 100%;
  }

  :root{
    // backGround
    --bg-black: #000;
    --bg-white: #fff;

    // border
    --bc-gray: #dbdbdb;
  }
`;

export default GlobalStyle;
