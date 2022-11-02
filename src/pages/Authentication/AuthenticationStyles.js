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
   box-shadow: ${(props) => props.theme.boxShadow.light};
   border-radius: 25px;
   width: 25rem;
   padding: 40px;
`;

export const SignInTop = styled.div`
   display: flex;
   flex-direction: column;
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
   margin-bottom: ${(props) => props.gutterBottom && "5px"};
`;

export const LoginLinkWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;
