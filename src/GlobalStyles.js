import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family:  'Roboto', 'sans-serif',-apple-system, BlinkMacSystemFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: whitesmoke;

}

`;

export default GlobalStyle;
