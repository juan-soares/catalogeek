import styled from "styled-components";

interface IProps {
  showInput: boolean;
}

const StyledSearchbar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 30%;

  input {
    @keyframes fadein {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    display: ${({ showInput }: IProps) => (showInput ? `block` : `none`)};
    animation-name: fadein;
    animation-duration: 1s;
    border: 1px solid white;
    background-color: #231d1d;
    border-radius: 10px;
    color: white;
  }

  span {
    width: 10px;

    :hover {
      cursor: pointer;
    }
  }
`;

export default StyledSearchbar;
