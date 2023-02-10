import React from 'react';
import {
	WishListMainContainer,
	WishlistProductCount,
	WishlistConatiner,
	WishListHeading,
} from './WishlistStyles';
import WishListCard from '../../components/Card/WishlistCard';
import Typography from '../../components/Typography/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishlistItems } from '../../redux/wishlistSlice';
import { addCartItems } from '../../redux/cartSlice';

export default function Wishlist() {
	const wishlistData = useSelector((state) => state.wishlist.wishlistItems);
	const dispatch = useDispatch();

	const handleCartClick = (id) => {
		const product = wishlistData.find((item) => item.id === id);

		if (product) {
			dispatch(addCartItems({ ...product, quantity: 1 }));
		}
	};

	const handleCancelClick = (id) => {
		dispatch(removeWishlistItems(id));
	};

	return (
		<WishListMainContainer>
			<WishListHeading>
				<Typography as="h2" fontWeight="700">
					{` My WishList `}
				</Typography>
				<WishlistProductCount>
					<Typography as="h4" fontWeight="300">{`${
						wishlistData && wishlistData.length
					} Product`}</Typography>
				</WishlistProductCount>
			</WishListHeading>

			<WishlistConatiner>
				{wishlistData.length !== 0 &&
					wishlistData.map((data) => (
						<WishListCard
							key={data.id}
							{...data}
							cartClick={handleCartClick}
							cancelClick={handleCancelClick}
						/>
					))}
			</WishlistConatiner>
		</WishListMainContainer>
	);
}
