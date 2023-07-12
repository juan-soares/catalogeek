import styled from "styled-components";

const StyledNavbar = styled.nav`
  color: white;
  box-shadow: 0 1px 1px red;
  padding: 0 5%;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      :hover {
        background-color: red;
      }
      a {
        display: block;
        padding: 10px;
        text-transform: capitalize;
      }
    }
  }
`;

export default StyledNavbar;
