// Button.stories.js|jsx

import React from 'react';

import WishlistCard from './WishlistCard';
import image from '../../assets/painting.jpg';

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'WishListCard',
	component: WishlistCard,
};

const Template = ({ ...args }) => <WishlistCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	image,
	productPrice: 539,
	TotalMRP: 599,
	productDiscount: 10,
};
