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
  
  button {
      padding: 5px;
      
      :hover{
      cursor: pointer;
      }
  }
  
  input {
      padding: 5px;
  }
  
  ul {
      list-style: none;
  }
  
`;

export default GlobalStyle;
