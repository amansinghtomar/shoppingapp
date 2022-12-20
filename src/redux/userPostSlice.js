import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: true,
	products: {},
};

const ProductSlice = createSlice({
	name: 'Products',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.loading = false;
			state.products = action.payload;
		},
	},
});

export const { addProduct } = ProductSlice.actions;

export const ProductReducer = ProductSlice.reducer;
