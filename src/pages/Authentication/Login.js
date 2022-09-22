import React, { useEffect } from "react";
import Typography from "../../components/Typography/Typography";
import {
   Wrapper,
   SignInContent,
   SignInTop,
   SignInBottom,
   GoogleSignIn,
   StyledLink,
   LoginLinkWrapper,
} from "./AuthenticationStyles";
import { Button } from "../../components/Button/Button";
import useInput from "../../hooks/useInput";
import { emailValidate, passwordValidator } from "../../utils";
import Form from "../../components/Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { userAuth } from "../../redux/authenticationSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
   const user = useSelector((state) => state.auth);
   const dispatch = useDispatch();
   const route = useNavigate();

   useEffect(() => {
      if (user.isAuthenticated) {
         route("/");
      }

      if (Object.keys(user.error).length > 0) {
         console.log(user.error.message);
      }
   }, [user.error, user.isAuthenticated]);

   const validations = {
      email: function ({ email }) {
         return emailValidate(email);
      },
      password: function ({ password }) {
         return passwordValidator(password);
      },
   };

   const { value, handleChange, reset, isValid, errors, touched, onBlur } = useInput(
      {
         email: "",
         password: "",
      },
      validations
   );

   const handleSignin = () => {
      value.method = "signin";
      dispatch(userAuth(value));
       reset();
   };

   const signinInput = [
      {
         type: "email",
         placeholder: "Email",
         name: "email",
         value: value.email,
      },
      {
         type: "password",
         placeholder: "Password",
         name: "password",
         value: value.password,
      },
   ];
   return (
      <Wrapper>        
         <SignInContent>
            <SignInTop>
               <Form
                  formTitle="Login"
                  formFields={signinInput}
                  handleChange={handleChange}
                  onBlur={onBlur}
                  touched={touched}
                  errors={errors}
                  actionButtonTitle="Login"
                  isValid={isValid}
                  handleActionButton={handleSignin}
                  loading={user.loading}       
               />
            </SignInTop>
            <SignInBottom>
               <Typography as="p" textAlign="center">
                  OR
               </Typography>
               <GoogleSignIn>
                  <Button>Google Signin</Button>
               </GoogleSignIn>
               <LoginLinkWrapper>
                  <StyledLink to="/signup">New Customer? Signup</StyledLink>
                  <Typography as="p" hover="true" color="primary">
                     Need help?
                  </Typography>
               </LoginLinkWrapper>
            </SignInBottom>
         </SignInContent>
      </Wrapper>
   );
}
