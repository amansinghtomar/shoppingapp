import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
   colors: {
      primary: "#08a2ab",
      secondary: "rgb(255, 255, 255)",
      default: "#000",
      black: "#474a4e",
      error: "#FF0000",
      success: "#22bb33",
      disabled: "#dddddd",
      light: "#e7fdfe",
      dark: "#05747a",
      grey: "#535766",
   },
   boxShadow: {
      light: "rgb(0 0 0 / 24%) 0px 3px 8px",
      dark: "rgba (0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
   },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
