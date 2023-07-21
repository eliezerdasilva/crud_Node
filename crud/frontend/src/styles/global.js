import {createGlobalStyle} from "styled-components";
const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'popping', sans-serif;
  }
  
  body {
    width: 100vh;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
  }
`   ;
export default Global;