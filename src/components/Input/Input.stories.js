// Button.stories.js|jsx

import React from "react";

import { Input } from "./Input";

export default {
   /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
   title: "Input",
   component: Input,
};

const Template = ({ ...args }) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
   placeholder: "Input field",
   required: true,
   fullwidth: false,
};
