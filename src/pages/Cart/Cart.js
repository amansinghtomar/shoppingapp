import React from 'react';
import CartLeft from './CartLeft';
import CartRight from './CartRight';
import { CartWrapper } from './CartStyles';

function Cart() {
	return (
		<CartWrapper>
			<CartLeft />
			<CartRight />
		</CartWrapper>
	);
}

export default Cart;
