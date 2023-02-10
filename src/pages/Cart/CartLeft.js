import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlertBox from '../../components/Alert/Alert';
import ShoppingCard from '../../components/Card/ShoppingCard';
import { removeCartItems, updateCartItems } from '../../redux/cartSlice';
import { CartCardContainer, CartLeftConatiner } from './CartStyles';

function CartLeft() {
	const { cartItems } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const handleRemoveItem = (id) => {
		dispatch(removeCartItems(id));
	};

	const handleUpdateItem = (quantity, id) => {
		dispatch(updateCartItems({ quantity, id }));
	};
	return (
		<CartLeftConatiner>
			<AlertBox />
			<CartCardContainer>
				{cartItems.map((cartValue) => (
					<ShoppingCard
						key={cartItems.id}
						{...cartValue}
						handleRemoveItem={handleRemoveItem}
						handleUpdateItem={handleUpdateItem}
					/>
				))}
			</CartCardContainer>
		</CartLeftConatiner>
	);
}

export default CartLeft;
