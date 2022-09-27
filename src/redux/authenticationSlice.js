import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   updateProfile,
} from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const initialState = {
   loading: false,
   error: {},
   userInfo: {},
   isAuthenticated: false,
};

export const userAuth = createAsyncThunk("auth", async (value) => {
   if (value.method === "signup") {
      const { name, password, email, mobile } = value;
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log("response", response)

      let userInfo = {}

      console.log("name", name, mobile);
      await updateProfile(auth.currentUser, {
         displayName: name,
         phoneNumber: mobile,
      })
      
      userInfo =
      {
         displayName: response.user.displayName,
         email: response.user.email,
         phoneNumber: response.user.phoneNumber,
         providerId: response.user.providerId,
         uid: response.user.uid,
      };
      console.log("userInfo", userInfo)
      
      await setDoc(doc(db, "Users", response.user.uid), {
       displayName: response.user.displayName,
         email: response.user.email,
         phoneNumber: response.user.phoneNumber,
         providerId: response.user.providerId,
         uid: response.user.uid,
         role: '',
         cart : [],
         following: [],
         address : ''
      })
         .then(result => console.log("result", result))
         .catch(error => console.log("error",error))   
      console.log("userInformation", userInfo);
      return userInfo;
   }
   if (value.method === "signin") {
      const { email, password } = value;
      const response = await signInWithEmailAndPassword(auth, email, password);
      let userInfo = {}
       userInfo =
      {
         displayName: response.user.displayName,
         email: response.user.email,
         phoneNumber: response.user.phoneNumber,
         providerId: response.user.providerId,
         uid: response.user.uid,
      };
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
         console.log("action.payload",action.payload)
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
