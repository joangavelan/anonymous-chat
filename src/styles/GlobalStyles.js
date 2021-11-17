
import { createGlobalStyle } from 'styled-components/macro';
import theme from './theme';
const { colors, fonts } = theme;

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  html,
  body {
    width: 100%;
    max-width: 100%;
  }
  body {
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: ${fonts.primary};
    color: ${colors.white};
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
  
  button {
    display: inline-block;
    color: ${colors.white};
    font-family: ${fonts.primary};
    border: 0;
    padding: 10px 20px;
    cursor: pointer;
    &:hover,
    &:focus {
      color: ${colors.white};
      outline: 0;
    }
  }
`

export default GlobalStyles;