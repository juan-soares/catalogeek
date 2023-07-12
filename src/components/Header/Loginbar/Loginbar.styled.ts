import styled from "styled-components";

const StyledLoginbar = styled.div`
  button {
    background-color: unset;
    border: 2px solid white;
    border-radius: 5px;
    color: white;
    padding: 10px;
    transition: background-color 1s, color 1s;

    :hover {
      background-color: white;
      color: black;
    }
  }
`;

export default StyledLoginbar;
