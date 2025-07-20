// styles/theme.ts
import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#f26a8d',
    secondary: '#4ecdc4',
    dark: '#0d0d0d',
    light: '#fff',
    gray: '#ccc',
  },
  fonts: {
    primary: "'Poppins', sans-serif",
    secondary: "'Orbitron', sans-serif",
  },
  breakpoints: {
    giant: '90em',     // 1440px
    bigDesktop: '75em', // 1200px
    desktop: '62.5em',  // 1000px
    tablet: '48em',     // 768px
    thone: '37.5em',    // 600px
    phablet: '30em',    // 480px
    phone: '23.5em',    // 376px
    tiny: '20.625em',   // 330px
  },
  spacing: {
    small: '0.8rem',
    medium: '1.6rem',
    large: '3.2rem',
    xlarge: '6.4rem',
  },
};