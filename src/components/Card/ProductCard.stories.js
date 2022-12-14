// Button.stories.js|jsx

import React from 'react';

import ProductCard from './ProductCard';
import image from '../../assets/painting.jpg';

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'ProductCard',
	component: ProductCard,
};

const Template = ({ ...args }) => <ProductCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	image,
	productPrice: 539,
	TotalMRP: 599,
	productDiscount: 10,
};
