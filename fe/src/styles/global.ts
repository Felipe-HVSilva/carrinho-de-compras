import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --brand-color: #9333ea;
    --brand-color-light:#a855f7;
    --brand-color-lighter:#C084FC;

    --text-color-primary:#F9FAFB;
    --text-color-secondary:#E4E4E7;
    --close-button-color:#A1A1A1;
    --stroke-color:#3F3F46;
    --surface-color:#18181B;

    font-size: 62.5%;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    background-color: #1E1E1E;
  }

  
  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
  }

  img {
    max-width: 100%;
    display: block;
  }
`
