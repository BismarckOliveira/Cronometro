import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
  --green: #40E0D0;
  --green-light: #ccf6ef;
  --text-body: #214642;
  --text-title: #162623;
  
}

*::-webkit-scrollbar {
  width: 5px;
}
*::-webkit-scrollbar-track {
  background: white;
  border-radius: 4px;
}

*::-webkit-scrollbar-thumb {
  background: var(--green);
  border-radius: 4px;
}
*::-webkit-scrollbar-thumb:window-inactive {
  border-radius: 4px;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  @media (max-width: 1080px){
    font-size: 93.75%;
  }
  @media (max-width: 720px){
    font-size: 87.5%;
  }
}
body {
  background: #fff;
  -webkit-font-smoothing: antialiased;
}

body, textarea, input , button {
  font-family: 'Roboto', sans-serif;
}

h1,h2,h3,h4,h5,h6, strong{
  font-weight: 500;
}

button{
  cursor: pointer;
}


`;