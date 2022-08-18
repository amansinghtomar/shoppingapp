import React from "react";
import styled from "styled-components";
import "./Typography.css";

const Typography = styled.p`
  font-size: ${(props) => props.fontSize && props.fontSize};
  color: ${(props) => props.color && props.color};
  text-align: ${(props) => props.textAlign && props.textAlign};
  margin-bottom: ${(props) => props.gutterBottom && `${props.gutterBottom}px`};

  &:hover {
    cursor: ${(props) => props.hover && "pointer"};
  }
`;

export default Typography;
