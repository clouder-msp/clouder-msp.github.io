import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

import NanumR from "../assets/fonts/NanumSquareR.woff";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: "nanum";
    src: local("nanum"), url(${NanumR}) format('woff'); 
    font-weight: normal;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: "nanum";
  }

  li {
    list-style: none;
  }

  button, a {
    background-color: inherit;
    border: none;

    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  html {
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 10px;
      background-color: #eee;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 10px;
      background-clip: padding-box;
    }

    &::-webkit-scrollbar-button {
      width: 0;
      height: 0;
    }
  }
`;