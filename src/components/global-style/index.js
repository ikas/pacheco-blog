import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Work+Sans:300,400,700&display=swap');

  body {
    font-family: 'Work Sans', sans-serif;
    background: #fff;
    color: #000;
    padding: 1em;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    word-wrap: break-word;
  }
`
