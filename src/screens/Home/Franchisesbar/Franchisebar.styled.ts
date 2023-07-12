import styled from "styled-components";

const StyledFranchisebar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 5%;
  width: 100%;
  gap: 10px;

  button {
    color: white;
  }

  .nav-button {
    background-color: unset;
    color: black;
    padding 0;
    width: 30px;
    height: 60px;
    
    :hover {
        background-color: black;
        color: white;
    }
  }

  button,
  li {
    width: 100px;
    height: 60px;
    border: 2px solid grey;
    border-radius: 10px;
    background-color: black;
    
    :hover {
        opacity: 0.9;
        cursor: pointer;
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    overflow: hidden;

    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 45px;

      button {
        background-color: unset;
      }

      li {
        border: 2px solid grey;
        border-radius: 10px;
        background-color: black;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

export default StyledFranchisebar;
