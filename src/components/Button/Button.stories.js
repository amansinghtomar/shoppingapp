// Button.stories.js|jsx

import React from 'react';

import { Button } from './Button';

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Button',
	component: Button,
	argTypes: {
		background: {
			control: {
				type: 'select',
				options: ['default', 'primary', 'secondary', 'error', 'disabled'],
			},
		},
		color: {
			control: {
				type: 'select',
				options: ['default', 'primary', 'secondary', 'error', 'disabled'],
			},
		},
	},
};

const Template = ({ ...args }) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});

export const Rounded = Template.bind({});

export const Text = Template.bind({});

Primary.args = {
	fullWidth: false,
	disabled: false,
	background: 'primary',
	color: 'secondary',
};

Rounded.args = {
	rounded: true,
};

Text.args = {
	text: 'true',
};
