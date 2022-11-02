import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/Theme";

export const parameters = {
   actions: { argTypesRegex: "^on[A-Z].*" },
   controls: {
      matchers: {
         color: /(background|color)$/i,
         date: /Date$/,
      },
      viewport: {
         viewports: INITIAL_VIEWPORTS,
      },
   },
};

export const decorators = [
   (Story) => (
      <ThemeProvider theme={theme}>
         <Story />
      </ThemeProvider>
   ),
];
