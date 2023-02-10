import React, { useEffect, useState } from 'react';
import Typography from '../../components/Typography/Typography';
import { Button } from '../../components/Button/Button';
import {
	CartRightContainer,
	CoupnContainer,
	PlaceOrder,
	PriceContainer,
	PriceDetails,
	PriceInfo,
} from './CartStyles';
import { Divider } from '@mui/material';
import { priceDetails } from './priceConfig';
import { useSelector } from 'react-redux';
import DialogBox from '../../components/Dialog/DialogBox';

function CartRight() {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const [priceValue, setPriceValue] = useState(priceDetails);
	const [openApplyCoupons, setOpenApplyCoupons] = React.useState(false);

	useEffect(() => {
		const cartFinal = cartItems.reduce((cartTotal, cartItem) => ({
			productPrice:
				cartTotal.productPrice * cartTotal.quantity +
				cartItem.productPrice * cartItem.quantity,
			productDiscount:
				cartTotal.productDiscount * cartTotal.quantity +
				cartItem.productDiscount * cartItem.quantity,
			totalPrice:
				cartTotal.productPrice * cartTotal.quantity +
				cartItem.productPrice * cartItem.quantity -
				(cartTotal.productDiscount + cartItem.productDiscount),
		}));

		let newPrice = JSON.parse(JSON.stringify(priceValue));
		newPrice.find((item) => {
			item.price = cartFinal[item.type];
		});
		setPriceValue(newPrice);
	}, [cartItems]);

	const handleClickOpen = () => {
		setOpenApplyCoupons(true);
	};

	const handleClose = () => {
		console.log('handleClose');
		setOpenApplyCoupons(false);
	};

	return (
		<CartRightContainer>
			<CoupnContainer>
				<Typography as="h4" fontWeight="500">
					Apply Coupons
				</Typography>
				<Button width="150px" onClick={handleClickOpen}>
					Apply
				</Button>
				<DialogBox open={openApplyCoupons} handleClose={handleClose} />
			</CoupnContainer>
			<PriceContainer>
				<Typography as="h4" fontWeight="450">
					Price Details
				</Typography>
				<Divider style={{ marginTop: '6px' }} />
				<PriceDetails>
					{priceValue &&
						priceValue.map((priceDetail) => (
							<div key={priceDetail.id}>
								{priceDetail.price && (
									<PriceInfo>
										<Typography as="h4" fontWeight="450">
											{priceDetail.name}
										</Typography>
										<Typography>Rs. {priceDetail.price}</Typography>
									</PriceInfo>
								)}

								{priceDetail.divider && (
									<Divider style={{ marginTop: '6px' }} />
								)}
							</div>
						))}
				</PriceDetails>
			</PriceContainer>
			<PlaceOrder>
				<Button>Place Order</Button>
			</PlaceOrder>
		</CartRightContainer>
	);
}

export default CartRight;
