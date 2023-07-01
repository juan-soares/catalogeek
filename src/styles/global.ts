import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  a {
      color: unset;
      text-decoration: none;
  }
  
  input{
      padding: 5px;
  }
  
  button {
      padding: 5px;
      
      :hover{
      cursor: pointer;
      }
  }
`;

export default GlobalStyle;
