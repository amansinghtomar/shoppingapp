import { Avatar } from '@mui/material';
import React from 'react';
import Typography from '../Typography/Typography';
import { CategoryContainer } from './CategoryStyles';
import PropTypes from 'prop-types';

export default function Category({ name, image, categoryClick }) {
	return (
		<CategoryContainer onClick={() => categoryClick(name)}>
			<Avatar sx={{ width: 150, height: 150 }} src={image} alt="Painting" />
			<Typography variant="p" align="center">
				{name}
			</Typography>
		</CategoryContainer>
	);
}

Category.propTypes = {
	id: PropTypes.string.isRequired || PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	categoryClick: PropTypes.func.isRequired,
};
