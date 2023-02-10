// Button.stories.js|jsx

import React from 'react';

import Alert from './Alert';
import image from '../../assets/painting.jpg';

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Alert',
	component: Alert,
};

const Template = ({ ...args }) => <Alert {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	open: true,
	type: 'success',
	message: 'Hi',
	timeout: 7000,
};
