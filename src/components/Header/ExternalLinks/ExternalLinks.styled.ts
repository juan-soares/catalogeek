import styled from "styled-components";

const StyledExternalLinks = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    gap: 10px;

    li {
      transition: transform 1s;

      :hover {
        transform: rotateY(180deg);
      }

      a {
        display: block;
        border-radius: 50px;
        width: 30px;
        height: 30px;
        border: 2px solid white;
        padding: 3px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 30px;
        }
      }
    }
  }
`;

export default StyledExternalLinks;
