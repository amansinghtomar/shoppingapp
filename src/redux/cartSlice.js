import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit';
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { async } from '@firebase/util';

const initialState = {
	cartItems: [],
	cartError: {},
	cartloading: false,
	cartTotal: {
		price: '',
		discount: '',
		couponDiscount: '',
		deliveryCharge: '',
	},
};

export const addCartItems = createAsyncThunk(
	'cart',
	async (value, { getState }) => {
		const state = getState();
		console.log(state.auth.userInfo.uid);
		const docRef = doc(db, 'Users', state.auth.userInfo.uid);
		await updateDoc(docRef, {
			cart: [...state.cart.cartItems, value],
		});
		return value;
	}
);

export const removeCartItems = createAsyncThunk(
	'removeCart',
	async (value, { getState }) => {
		const state = getState();
		const docRef = doc(db, 'Users', state.auth.userInfo.uid);
		const updatedCart = state.cart.cartItems.filter(
			(item) => item.id !== value
		);
		console.log('updatedCart', updatedCart, value);
		await updateDoc(docRef, {
			cart: updatedCart,
		});
		return updatedCart;
	}
);

export const updateCartItems = createAsyncThunk(
	'updateCart',
	async (value, { getState }) => {
		const state = getState();
		const docRef = doc(db, 'Users', state.auth.userInfo.uid);
		const cartValue = JSON.parse(JSON.stringify(state.cart.cartItems));
		const updatedCart = cartValue.map((item) => {
			if (item.id === value.id) {
				item.quantity = value.quantity;
			}
			return item;
		});
		await updateDoc(docRef, {
			cart: updatedCart,
		});
		return updatedCart;
	}
);

const CartSlice = createSlice({
	name: 'cartItems',
	initialState,
	reducers: {
		initiateCart: (state, action) => {
			state.cartItems = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(addCartItems.fulfilled, (state, action) => {
			state.cartItems = [...current(state).cartItems, action.payload];
		});
		builder.addMatcher(
			isAnyOf(
				addCartItems.pending,
				removeCartItems.pending,
				updateCartItems.pending
			),
			(state) => {
				state.cartloading = true;
			}
		);
		builder.addMatcher(
			isAnyOf(removeCartItems.fulfilled, updateCartItems.fulfilled),
			(state, action) => {
				state.cartItems = action.payload;
				state.cartloading = false;
				state.cartError = '';
			}
		);
		builder.addMatcher(
			isAnyOf(
				addCartItems.rejected,
				removeCartItems.rejected,
				updateCartItems.rejected
			),
			(state, action) => {
				state.cartloading = false;
				state.cartError = action.error;
			}
		);
	},
});

export const { initiateCart } = CartSlice.actions;

export const CartReducer = CartSlice.reducer;
