import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;    
    color: ${(props) => props.theme.baseText}
  }

  body {
    background-color: ${(props) => props.theme.background}
  }

  input, button, textarea {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme.baseText}
  }
`
