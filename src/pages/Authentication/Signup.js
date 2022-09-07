import React from "react";
import { Wrapper, SignInContent } from "./AuthenticationStyles";
import {
  emailValidate,
  mobileValidator,
  nameValidator,
  passwordValidator,
  rePasswordValidator,
} from "../../utils";
import useInput from "../../hooks/useInput";
import Form from "../../components/Form/Form";

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

  const handleSignup = () => {
    reset();
  };

  return (
    <Wrapper>
      <SignInContent>
        <Form
          formTitle="SignUp"
          formFields={signupInput}
          handleChange={handleChange}
          onBlur={onBlur}
          touched={touched}
          errors={errors}
          actionButtonTitle="SignUp"
          isValid={isValid}
          handleActionButton={handleSignup}
        />
      </SignInContent>
    </Wrapper>
  );
}
