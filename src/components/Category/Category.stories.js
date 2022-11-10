// Button.stories.js|jsx

import React from "react";

import Category from "./Category";

export default {
   /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
   title: "Category",
   component: Category,
};

const Template = ({ ...args }) => <Category {...args} />;

export const Primary = Template.bind({});

Primary.args = {
   name: "Painting",
};
