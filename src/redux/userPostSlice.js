import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: true,
	products: {},
	categoryFilter: [],
	priceFilter: [],
};

const ProductSlice = createSlice({
	name: 'Products',
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.loading = false;
			state.products = action.payload;
		},
		handleCategoryFilter: (state, action) => {
			state.loading = false;
			state.categoryFilter = action.payload;
		},
		handlePriceFilter: (state, action) => {
			state.loading = false;
			state.priceFilter = action.payload;
		},
	},
});

export const { addProduct, handleCategoryFilter, handlePriceFilter } =
	ProductSlice.actions;

export const ProductReducer = ProductSlice.reducer;
