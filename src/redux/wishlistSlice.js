import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit';
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { addNotification } from './notificationSlice';

const initialState = {
	wishlistItems: [],
	wishlistError: {},
	wishlistloading: false,
};

export const addWishlistItems = createAsyncThunk(
	'wishlist',
	async (value, { getState,dispatch }) => {
		const state = getState();
		const docRef = doc(db, 'Users', state.auth.userInfo.uid);
		await updateDoc(docRef, {
			wishlist: [...state.wishlist.wishlistItems, value],
		});
		dispatch(
			addNotification({
				message: 'Product added to wishlist',
				type: 'success',
			})
		);
		return value;
	}
);

export const removeWishlistItems = createAsyncThunk(
	'removeWishlist',
	async (value, { getState }) => {
		const state = getState();
		const docRef = doc(db, 'Users', state.auth.userInfo.uid);
		const updatedWishlist = state.wishlist.wishlistItems.filter(
			(item) => item.id !== value
		);

		await updateDoc(docRef, {
			wishlist: updatedWishlist,
		});
		return updatedWishlist;
	}
);

const WishlistSlice = createSlice({
	name: 'wishlistItems',
	initialState,
	reducers: {
		initiateWishlist: (state, action) => {
			state.wishlistItems = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(addWishlistItems.fulfilled, (state, action) => {
			state.wishlistItems = [...current(state).wishlistItems, action.payload];
			state.wishlistloading = false;
			state.wishlistError = '';
		});
		builder.addCase(removeWishlistItems.fulfilled, (state, action) => {
			state.wishlistItems = action.payload;
			state.wishlistloading = false;
			state.wishlistError = '';
		});
		builder.addMatcher(
			isAnyOf(addWishlistItems.pending, removeWishlistItems.pending),
			(state) => {
				state.wishlistloading = true;
			}
		);

		builder.addMatcher(
			isAnyOf(addWishlistItems.rejected, removeWishlistItems.rejected),
			(state, action) => {
				state.wishlistloading = false;
				state.wishlistError = action.error;
			}
		);
	},
});

export const { initiateWishlist } = WishlistSlice.actions;

export const WishListReducer = WishlistSlice.reducer;
