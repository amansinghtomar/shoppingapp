// Button.stories.js|jsx

import React from "react";

import { Button } from "./Button";

import Theme from "../../Theme";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
};

const Template = ({ ...args }) => (
  <Theme>
    <Button {...args}>Button</Button>
  </Theme>
);

export const Primary = Template.bind({});

Primary.args = {
  variant: "primary",
  width: "100px",
};
