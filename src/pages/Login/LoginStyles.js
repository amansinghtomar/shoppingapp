import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

export const SignInContent = styled.div`
  background-color: white;
  width: 25rem;
  padding: 40px;
`;

export const SignInTop = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  padding: 15px 0;
`;

export const SignInButtonWrapper = styled.div`
  margin-top: 35px;
`;

export const SignInBottom = styled.div`
  margin-top: 20px;
`;

export const GoogleSignIn = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`;
