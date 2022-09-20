import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

const initialState = {
   loading: false,
   error: {},
   userInfo: {},
   isAuthenticated: false,
};

export const userAuth = createAsyncThunk("auth", async (value) => {
   console.log(value);
   if (value.method === "signup") {
      const { name, password, email, mobile } = value;
      const response = await createUserWithEmailAndPassword(auth, email, password);

      const userInfo = response.user.providerData[0];
      console.log("name", name, mobile);
      await updateProfile(auth.currentUser, {
         displayName: name,
         phoneNumber: mobile,
      }).catch((error) => {
         console.log(error);
      });
      console.log("userInformation", userInfo);
      return userInfo;
   }
   if (value.method === "signin") {
      const { email, password } = value;
      const response = await signInWithEmailAndPassword(auth, email, password);
      const userInfo = response.user.providerData[0];
      return userInfo;
   }
});

const AuthSlice = createSlice({
   name: "signIn",
   initialState,
   reducers: {
      resetUserInfo: (state, action) => {
         state.loading = false;
         state.userInfo = {};
         state.error = "";
         state.isAuthenticated = false;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(userAuth.pending, (state) => {
         state.loading = true;
      });
      builder.addCase(userAuth.fulfilled, (state, action) => {
         state.loading = false;
         state.userInfo = action.payload;
         state.error = "";
         state.isAuthenticated = true;
      });
      builder.addCase(userAuth.rejected, (state, action) => {
         state.loading = false;
         state.userInfo = {};
         state.error = action.error;
      });
   },
});

export const { resetUserInfo } = AuthSlice.actions;
export const AuthReducer = AuthSlice.reducer;
