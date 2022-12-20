import { configureStore } from '@reduxjs/toolkit';
import { AuthReducer } from './authenticationSlice';
import { ProductReducer } from './userPostSlice';
import { CartReducer } from './cartSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const reducers = combineReducers({
	auth: AuthReducer,
	post: ProductReducer,
	cart: CartReducer,
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
