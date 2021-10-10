import styled,{css} from "styled-components";

export const Button = styled.button`
  border: 3px solid black;
  padding: 10px 20px;
  margin: 20px;
  border-radius: 10px;
  ${(props) =>
    props.primary
      ? css`
          color: blue;
          background-color: red;
        `
      : css`
     color:  white;
     background-color: purple;
  `}
  &:hover {
    color: ${(props) => (props.primary ? "black" : "white")};
    background-color: ${(props) => (props.primary ? "blue" : "red")};
  }
`;
