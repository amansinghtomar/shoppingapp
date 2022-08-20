import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#6C63FF",
    secondary: "white",
    defaultColor: "black",
    error: "red",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
