import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #1e1e1e;
    -webkit-font-smoothing:antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
    line-height: 1.4;
  }

  #root {
    max-width: 1800px;
    margin: 0 auto;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
