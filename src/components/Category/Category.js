import { Avatar } from '@mui/material';
import React from 'react';
import Typography from '../Typography/Typography';
import { CategoryContainer } from './CategoryStyles';

export default function Category({ id, name, image, categoryClick }) {
	return (
		<CategoryContainer onClick={() => categoryClick(id)}>
			<Avatar sx={{ width: 200, height: 200 }} src={image} alt="Painting" />
			<Typography variant="p" align="center">
				{name}
			</Typography>
		</CategoryContainer>
	);
}
