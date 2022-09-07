import React from "react";
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

export default function Login() {
  const validations = {
    email: function ({ email }) {
      return emailValidate(email);
    },
    password: function ({ password }) {
      return passwordValidator(password);
    },
  };

  const { value, handleChange, reset, isValid, errors, touched, onBlur } =
    useInput(
      {
        email: "",
        password: "",
      },
      validations
    );

  const handleSignin = () => {
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
            formTitle="SignIn"
            formFields={signinInput}
            handleChange={handleChange}
            onBlur={onBlur}
            touched={touched}
            errors={errors}
            actionButtonTitle="SignUp"
            isValid={isValid}
            handleActionButton={handleSignin}
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
