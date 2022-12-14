import React from 'react';

import Theme from '../../Theme';
import Typography from './Typography';

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Typography',
	component: Typography,
	argTypes: {
		variant: {
			options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2'],
			control: { type: 'select' },
		},
		color: {
			control: {
				type: 'select',
				options: ['default', 'primary', 'secondary', 'error', 'disabled'],
			},
		},
		align: {
			control: {
				type: 'select',
				options: ['left', 'right', 'center', 'justify', 'initial', 'inherit'],
			},
		},
	},
};

const Template = ({ ...args }) => <Typography {...args}>Typography</Typography>;

export const Heading1 = Template.bind({});

export const Heading2 = Template.bind({});

export const Heading3 = Template.bind({});

export const Heading4 = Template.bind({});

export const Heading5 = Template.bind({});

export const Heading6 = Template.bind({});

export const Body1 = Template.bind({});

export const Body2 = Template.bind({});

Heading1.args = {
	variant: 'h1',
	align: 'center',
};

Heading2.args = {
	variant: 'h2',
	align: 'center',
	color: 'primary',
};

Heading3.args = {
	variant: 'h3',
	align: 'center',
};

Heading4.args = {
	variant: 'h4',
	align: 'center',
};

Heading5.args = {
	variant: 'h5',
	align: 'center',
};

Heading6.args = {
	variant: 'h6',
	align: 'center',
};
Body1.args = {
	variant: 'body1',
	align: 'center',
};
Body2.args = {
	variant: 'h1',
};
