import React from 'react';
import {
	WishListMainContainer,
	WishlistProductCount,
	WishlistConatiner,
	WishlistProductImage,
	WishlistProductWrapper,
	WishListHeading,
	WishlistProductName,
	WishlistProductPrice,
} from './WishlistStyles';
import { Button } from '../../components/Button/Button';
import { WishListData } from '../../utils/WishListData';
import Typography from '../../components/Typography/Typography';

export default function Wishlist() {
	return (
		<WishListMainContainer>
			<WishListHeading>
				<Typography as="h2" fontWeight="700">
					{` My WishList `}
				</Typography>
				<WishlistProductCount>
					<Typography as="h4" fontWeight="300">{`${
						WishListData && WishListData.length
					} Product`}</Typography>
				</WishlistProductCount>
			</WishListHeading>

			<WishlistConatiner>
				{WishListData.length !== 0 &&
					WishListData.map((data) => (
						<WishlistProductWrapper>
							<WishlistProductImage src={data.image} alt="Profile Image" />

							<Typography as="h3" fontWeight="500" align="center">
								{data.productName}
							</Typography>

							<Typography as="h4" fontWeight="600" align="center">
								{`$ ${data.productPrice}`}
							</Typography>

							<Button variant="secondary">Add to Cart</Button>
						</WishlistProductWrapper>
					))}
			</WishlistConatiner>
		</WishListMainContainer>
	);
}
