import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const fontSize = {
	h1: '2rem',
	h2: '1.8rem',
	h3: '1.7rem',
	h4: '1.5rem',
	h5: '1.4rem',
	h6: '1rem',
	body1: '1rem',
	body2: '0.8rem',
};

const fontWeight = {
	h1: '500',
	h2: '500',
	h3: '500',
	h4: '500',
	h5: '500',
	h6: '500',
	body1: '400',
	body2: '300',
};

const variant = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	h6: 'h6',
	body1: 'p',
	body2: 'p',
};

const TypographyStyles = styled.p`
	font-size: ${(props) => props.fontSize && props.fontSize};
	font-weight: ${(props) => props.fontWeight && props.fontWeight};
	color: ${(props) =>
		props.color ? props.theme.colors[props.color] : props.theme.colors.default};
	text-align: ${(props) => props.align && props.align};
	margin-bottom: ${(props) => props.gutterBottom && `${props.gutterBottom}px`};
	margin: 0;

	&:hover {
		cursor: ${(props) => props.hover && 'pointer'};
	}
`;

const Typography = (props) => {
	return (
		<TypographyStyles
			as={variant[props.variant]}
			fontWeight={fontWeight[props.variant]}
			fontSize={fontSize[props.variant]}
			{...props}
		>
			{props.children}
		</TypographyStyles>
	);
};

Typography.propTypes = {
	variant: PropTypes.string.isRequired,
	align: PropTypes.string,
	color: PropTypes.string,
	children: PropTypes.string,
};

export default Typography;
