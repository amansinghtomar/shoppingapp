import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	open: false,
	type: '',
	message: '',
	timeout: 2000,
};

export const NotificationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		addNotification: (state, action) => ({
			...initialState,
			...action.payload,
			open: true,
		}),
		clearNotification: (state) => ({
			...state,
			type: '',
			open: false,
			message: '',
		}),
	},
});

export const { addNotification, clearNotification } = NotificationSlice.actions;
export const notificationReducer = NotificationSlice.reducer;
