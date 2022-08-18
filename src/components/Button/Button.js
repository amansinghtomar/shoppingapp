import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 1em;
  border: none;
  background-color: ${(props) => props.background && props.background};
  color: ${(props) => props.color};

  &:hover {
    cursor: pointer;
  }
`;
