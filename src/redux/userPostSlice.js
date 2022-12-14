import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: true,
	posts: {},
};

const UserPostSlice = createSlice({
	name: 'userPost',
	initialState,
	reducers: {
		addPost: (state, action) => {
			state.loading = false;
			state.posts = action.payload;
		},
	},
});

export const { addPost } = UserPostSlice.actions;

export const PostReducer = UserPostSlice.reducer;
