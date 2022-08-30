import styled from "styled-components";

const Typography = styled.p`
  font-size: ${(props) => props.fontSize && props.fontSize};
  font-weight: ${(props) => props.fontWeight && props.fontWeight};
  color: ${(props) =>
    props.color === "error"
      ? props.theme.colors.error
      : props.color === "primary"
      ? props.theme.colors.primary
      : props.theme.colors.default};
  text-align: ${(props) => props.textAlign && props.textAlign};
  margin-bottom: ${(props) => props.gutterBottom && `${props.gutterBottom}px`};

  &:hover {
    cursor: ${(props) => props.hover && "pointer"};
  }
`;

export default Typography;
