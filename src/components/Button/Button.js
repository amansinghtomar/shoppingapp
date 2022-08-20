import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 1em;
  border: none;
  background-color: ${(props) =>
    props.background
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  color: ${(props) =>
    props.theme.color === props.theme.colors.primary
      ? props.theme.colors.primary
      : props.theme.color === props.theme.colors.secondary
      ? props.theme.colors.secondary
      : props.theme.colors.default};

  &:hover {
    cursor: pointer;
  }
`;
