import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./authenticationSlice";
import { PostReducer } from "./userPostSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
   auth: AuthReducer,
   post: PostReducer,
});

const persistConfig = {
   key: "root",
   storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
   reducer: persistedReducer,
   devTools: process.env.NODE_ENV !== "production",
   middleware: [thunk],
});
