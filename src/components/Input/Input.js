import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  border: none;
  border-bottom: 2px solid grey;

  &:focus {
    outline: none;
    border-color: orange;
  }
`;
