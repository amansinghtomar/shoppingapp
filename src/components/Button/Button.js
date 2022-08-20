import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "2rem")};
  font-size: 1em;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};

  &:hover {
    cursor: pointer;
  }
`;
