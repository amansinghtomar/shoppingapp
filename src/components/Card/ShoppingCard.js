import React from 'react';
import {
	DeleteButton,
	ShoppingCardAction,
	ShoppingCardImage,
	ShoppingCardInfo,
	ShoppingCardWrapper,
} from './ShoppingStyles';
import Typography from '../Typography/Typography';
import { FavoriteButton } from './Cardstyles';
import Dropdown from '../MenuItem/Dropdown';

const options = [
	{
		id: 1,
		value: 1,
	},
	{
		id: 2,
		value: 2,
	},
	{
		id: 3,
		value: 3,
	},
];

function ShoppingCard({
	SellerName,
	productName,
	productPrice,
	DeliveryDate,
	quantity,
	id,
	handleRemoveItem,
	image,
	handleUpdateItem,
}) {
	return (
		<ShoppingCardWrapper>
			<ShoppingCardImage src={image} alt="Cart Image" />
			<ShoppingCardInfo>
				<div>
					<Typography as="h4" fontWeight="500">
						{productName}
					</Typography>

					<Typography as="p" fontSize="13px" fontWeight="240">
						{`Sold by: ${SellerName}`}
					</Typography>
				</div>

				<Typography as="h5" fontWeight="500">
					{`$${productPrice}`}
				</Typography>
				<Dropdown
					selectedValue={quantity}
					handleUpdateItem={handleUpdateItem}
					id={id}
					size="small"
					options={options}
				/>
				<Typography as="p" fontSize="12px" fontWeight="300">
					{`Delivery by ${DeliveryDate}`}
				</Typography>
			</ShoppingCardInfo>
			<ShoppingCardAction>
				<FavoriteButton fontSize="large" />
				<DeleteButton fontSize="large" onClick={() => handleRemoveItem(id)} />
			</ShoppingCardAction>
		</ShoppingCardWrapper>
	);
}

export default ShoppingCard;
