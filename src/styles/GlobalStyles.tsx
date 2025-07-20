// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Poppins:wght@400;500;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    max-width: 100vw;  /* Evita que algo se expanda más allá del ancho de pantalla */
    overflow-x: hidden;
    min-height: 100%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #0d0d0d;
    color: #fff;
    line-height: 1.6;
  }

  a {
    color: #ccc;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
  }

  a:hover {
    color: #f26a8d;
  }
`;
