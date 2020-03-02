import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap');


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    }

html, body, #root {
  min-height: 100%;
}

a{
  text-decoration: none;
}

body{
  background: #ECECEC;
  background-size: cover;
  -webkit-font-smoothing: antialiased !important; 
}
p{
  font-size: 16px;
  color: #292D41;
}

body, input, button, textarea, select{
  font-size: 14px;
  font-family: 'Open Sans';
}
button{
  border: 0;
  cursor: pointer;
}

strong{
  font-weight: 700;
}

`