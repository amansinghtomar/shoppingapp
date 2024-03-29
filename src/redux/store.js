import { configureStore } from '@reduxjs/toolkit';
import { AuthReducer } from './authenticationSlice';
import { ProductReducer } from './userPostSlice';
import { CartReducer } from './cartSlice';
import { WishListReducer } from './wishlistSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { notificationReducer } from './notificationSlice';

const reducers = combineReducers({
	auth: AuthReducer,
	product: ProductReducer,
	cart: CartReducer,
	wishlist: WishListReducer,
	notification: notificationReducer
});

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: [thunk],
});
