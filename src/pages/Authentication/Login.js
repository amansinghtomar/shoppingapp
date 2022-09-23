import React, { useEffect, useState, useRef } from "react";
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
import AlertBox from "../../components/Alert/Alert";

export default function Login() {
   const user = useSelector((state) => state.auth);
   const dispatch = useDispatch();
   const route = useNavigate();
   const timerRef = useRef(null);
   const [alert, setAlert] = useState({ visible: false, severity: "", message: "" });

   useEffect(() => {
      if (user.isAuthenticated) {
         route("/");
      }
   }, [user.isAuthenticated]);

   useEffect(() => {
      if (Object.keys(user.error).length > 0) {
         setAlert({ visible: true, severity: "error", message: user.error.message });
         timerRef.current = setTimeout(() => {
            setAlert({ visible: false, severity: "", message: "" });
         }, 2000);
      }
   }, [user.error]);

   useEffect(() => {
      return () => {
         clearInterval(timerRef.current);
      };
   }, []);

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
            <AlertBox visible={alert.visible} severity={alert.severity} message={alert.message} />
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
