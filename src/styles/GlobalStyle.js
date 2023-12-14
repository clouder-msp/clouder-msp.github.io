import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
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