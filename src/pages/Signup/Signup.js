import React from "react";
import Typography from "../../components/Typography/Typography";
import {
  Wrapper,
  SignInContent,
  SignInTop,
  InputWrapper,
  SignInButtonWrapper,
} from "../Login/LoginStyles";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import {
  emailValidate,
  mobileValidator,
  nameValidator,
  passwordValidator,
  rePasswordValidator,
} from "../../utils";
import useInput from "../../hooks/useInput";

export default function Signup() {
  const validations = {
    email: function ({ email }) {
      return emailValidate(email);
    },
    password: function ({ password }) {
      return passwordValidator(password);
    },
    repassword: function ({ repassword, password }) {
      return rePasswordValidator(repassword, password);
    },
    name: function ({ name }) {
      return nameValidator(name);
    },
    mobile: function ({ mobile }) {
      return mobileValidator(mobile);
    },
  };

  const { value, handleChange, reset, isValid, errors, touched, onBlur } =
    useInput(
      {
        name: "",
        password: "",
        repassword: "",
        email: "",
        mobile: "",
      },
      validations
    );

  const signupInput = [
    {
      type: "text",
      placeholder: "Name",
      name: "name",
      value: value.name,
    },
    {
      type: "password",
      placeholder: "Password",
      name: "password",
      value: value.password,
    },
    {
      type: "password",
      placeholder: "Re-Enter Password",
      name: "repassword",
      value: value.repassword,
    },
    {
      type: "email",
      placeholder: "Email",
      name: "email",
      value: value.email,
    },
    {
      type: "mobile",
      placeholder: "Mob. Number",
      name: "mobile",
      value: value.mobile,
    },
  ];

  return (
    <Wrapper>
      <SignInContent>
        <SignInTop></SignInTop>
        <Typography as="h2" textAlign="center">
          Sign Up
        </Typography>

        {signupInput.map((inputData) => {
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
        <SignInButtonWrapper>
          <Button>SIGN IN</Button>
        </SignInButtonWrapper>
      </SignInContent>
    </Wrapper>
  );
}
