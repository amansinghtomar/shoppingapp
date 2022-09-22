import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit';

const initialState = {
   cartItems: [],
};

const CartSlice = createSlice({
   name: "cartItems",
   initialState,
   reducers: {
          addToCart(state, action) {
         let temp = []
         temp.push(...current(state).cartItems,action.payload)
         state.cartItems = temp
    },
   
   },
});

export const { addToCart } = CartSlice.actions;

export const CartReducer = CartSlice.reducer;
