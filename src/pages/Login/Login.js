import React from "react";
import Typography from "../../components/Typography/Typography";
import {
  Wrapper,
  SignInContent,
  SignInTop,
  InputWrapper,
  SignInButtonWrapper,
  SignInBottom,
  GoogleSignIn,
  StyledLink,
} from "./LoginStyles";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import useInput from "../../hooks/useInput";
import { emailValidate, passwordValidator } from "../../utils";

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
          <Typography as="h2" textAlign="center">
            SignIn
          </Typography>
          {signinInput.map((inputData) => {
            return (
              <InputWrapper>
                <Input onChange={handleChange} onBlur={onBlur} {...inputData} />
                {touched[inputData.name] && errors[[inputData.name]] && (
                  <Typography value="p" color="red">
                    {errors[inputData.name]}
                  </Typography>
                )}
              </InputWrapper>
            );
          })}
          <Typography variant="p" hover="true" color="orange">
            Forgot Password
          </Typography>
          <SignInButtonWrapper>
            <Button onClick={handleSignin} disabled={isValid}>
              SIGN IN
            </Button>
          </SignInButtonWrapper>
        </SignInTop>
        <SignInBottom>
          <Typography variant="body1" textAlign="center">
            OR
          </Typography>
          <GoogleSignIn>
            <Button>Google Signin</Button>
          </GoogleSignIn>
          <StyledLink to="/signup">New Customer? Signup</StyledLink>
        </SignInBottom>
      </SignInContent>
    </Wrapper>
  );
}
