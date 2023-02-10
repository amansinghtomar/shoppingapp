import React from 'react';
import {
	Card,
	CardImage,
	CardRating,
	Container,
	PriceContainer,
} from './ProductCardStyles';
import Typography from '../Typography/Typography';
import StarIcon from '@mui/icons-material/Star';

function ProductCard({
	id,
	productPrice,
	TotalMRP,
	productDiscount,
	image,
	cardClick,
}) {
	return (
		<Card onClick={() => cardClick(id)}>
			<CardImage src={image}>
				<CardRating>
					<Typography variant="body2">4</Typography>
					<StarIcon
						style={{
							color: '#08a2ab',
							fontSize: '16px',
						}}
					/>
					<Typography variant="body2">| 324</Typography>
				</CardRating>
			</CardImage>
			<Container>
				<Typography variant="p">Flower</Typography>
				<PriceContainer>
					<Typography variant="p">{`Rs. ${productPrice}`}</Typography>
					<Typography variant="body2" color="grey">
						<s>{`MRP ${TotalMRP}`}</s>
					</Typography>
					<Typography
						variant="body2"
						color="primary"
					>{`${productDiscount}% OFF`}</Typography>
				</PriceContainer>
			</Container>
		</Card>
	);
}

export default ProductCard;