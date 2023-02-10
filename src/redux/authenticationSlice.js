import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	updateProfile,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db, provider } from '../firebase';
import { initiateCart } from './cartSlice';
import { initiateWishlist } from './wishlistSlice';

const initialState = {
	loading: false,
	error: {},
	userInfo: {},
	isAuthenticated: false,
};

export const userAuth = createAsyncThunk('auth', async (value) => {
	const { name, password, email, mobile } = value;
	const response = await createUserWithEmailAndPassword(auth, email, password);
	await updateProfile(auth.currentUser, {
		displayName: name,
		phoneNumber: mobile,
	});
	const userInfo = {
		displayName: response.user.displayName,
		email: response.user.email,
		phoneNumber: response.user.phoneNumber,
		providerId: response.user.providerId,
		uid: response.user.uid,
		role: '',
		cart: [],
		wishlist: [],
		following: [],
		address: '',
	};
	await setDoc(doc(db, 'Users', response.user.uid), userInfo);
	return userInfo;
});

export const userSignIn = createAsyncThunk(
	'user/signIn',
	async (value, { dispatch }) => {
		const { email, password } = value;
		const response = await signInWithEmailAndPassword(auth, email, password);

		const docRef = doc(db, 'Users', response.user.uid);
		const docSnap = await getDoc(docRef);
		dispatch(initiateCart(docSnap.data().cart));
		dispatch(initiateWishlist(docSnap.data().wishlist));
		return docSnap.data();
	}
);

export const googleSignIn = createAsyncThunk('user/googleSignIn', async () => {
	const response = await signInWithPopup(auth, provider);
	await updateProfile(auth.currentUser, {
		displayName: response.user.displayName,
		phoneNumber: response.user.phoneNumber,
	});
	const userInfo = {
		displayName: response.user.displayName,
		email: response.user.email,
		phoneNumber: response.user.phoneNumber,
		providerId: response.user.providerId,
		uid: response.user.uid,
		role: '',
		cart: [],
		wishlist: [],
		following: [],
		address: '',
	};
	await setDoc(doc(db, 'Users', response.user.uid), userInfo);
	return userInfo;
});

const AuthSlice = createSlice({
	name: 'signIn',
	initialState,
	reducers: {
		resetUserInfo: (state) => {
			state.loading = false;
			state.userInfo = {};
			state.error = '';
			state.isAuthenticated = false;
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			isAnyOf(userAuth.pending, userSignIn.pending, googleSignIn.pending),
			(state) => {
				state.loading = true;
			}
		);
		builder.addMatcher(
			isAnyOf(userAuth.fulfilled, userSignIn.fulfilled, googleSignIn.fulfilled),
			(state, action) => {
				state.loading = false;
				state.userInfo = action.payload;
				state.error = '';
				state.isAuthenticated = true;
			}
		);
		builder.addMatcher(
			isAnyOf(userAuth.rejected, userSignIn.rejected, googleSignIn.rejected),
			(state, action) => {
				state.loading = false;
				state.userInfo = {};
				state.error = action.error;
			}
		);
	},
});

export const { resetUserInfo } = AuthSlice.actions;
export const AuthReducer = AuthSlice.reducer;
