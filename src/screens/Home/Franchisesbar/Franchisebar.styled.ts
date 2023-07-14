import styled from "styled-components";

const StyledFranchisebar = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 5%;
  width: 100%;
  gap: 10px;

  .add-button {
    color: white;
  }

  .nav-button {
    background-color: unset;
    color: black;
    padding 0;
    width: 30px;
    height: 100px;
    
    :hover {
        background-color: black;
        color: white;
    }
  }

  button,
  li {
    width: 140px;
    height: 100px;
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
      gap: 20px;
      position: relative;
      right: ${(props) => props.pixel}px;
      transition: right 1s;

      button {
        background-color: unset;
      }

      li {
        border: 2px solid grey;
        border-radius: 10px;
        background-color: black;
        
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        
          img {
          width: 80%;
          height: 80%;
          display: block;
          transition: transform 1s;

          :hover {
            transform: scale(1.09);
          }
          }

        }
              }
    }
  }
`;

export default StyledFranchisebar;
