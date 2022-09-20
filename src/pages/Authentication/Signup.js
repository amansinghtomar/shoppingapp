import React, { useEffect } from "react";
import { Wrapper, SignInContent } from "./AuthenticationStyles";

import useInput from "../../hooks/useInput";
import Form from "../../components/Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { userAuth } from "../../redux/authenticationSlice";
import { useNavigate } from "react-router-dom";
import signUpvalidations from "./authValidation";

export default function Signup() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const route = useNavigate();

  useEffect(() => {
    if (user.isAuthenticated) {
      route("/");
    }

    if (Object.keys(user.error).length > 0) {
      console.log(user.error.message);
    }
  }, [user.error, user.isAuthenticated]);

  const { value, handleChange, reset, isValid, errors, touched, onBlur } =
    useInput(
      {
        name: "",
        password: "",
        repassword: "",
        email: "",
        mobile: "",
      },
      signUpvalidations
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
    value.method = "signup";
    dispatch(userAuth(value));
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
