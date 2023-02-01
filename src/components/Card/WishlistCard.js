import React from 'react';
import { CardImage, Container, PriceContainer } from './ProductCardStyles';
import Typography from '../Typography/Typography';
import { Button } from '../Button/Button';
import { CrossIcon, WishListCardWrapper } from './WishlistStyles';

export default function WishlistCard({
	id,
	productPrice,
	TotalMRP,
	productDiscount,
	image,
	cancelClick,
}) {
	return (
		<WishListCardWrapper>
			<CardImage src={image}>
				<CrossIcon onClick={() => cancelClick(id)} />
			</CardImage>
			<Container>
				<Typography variant="p">Flower</Typography>
				<PriceContainer>
					<Typography
						variant="p"
						align="center"
					>{`Rs. ${productPrice}`}</Typography>
					<Typography variant="body2" color="grey">
						<s>{`MRP ${TotalMRP}`}</s>
					</Typography>
					<Typography
						variant="body2"
						color="primary"
					>{`${productDiscount}% OFF`}</Typography>
				</PriceContainer>
				<Button text>Add To Bag</Button>
			</Container>
		</WishListCardWrapper>
	);
}
