import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = {
   cartItems: [],
   cartTotal: {
      price: "",
      discount: "",
      couponDiscount: "",
      deliveryCharge: "",
   },
};

const CartSlice = createSlice({
   name: "cartItems",
   initialState,
   reducers: {
      addToCart: (state, action) => {
         state.cartItems = [...current(state).cartItems, action.payload];
      },
   },
});

export const { addToCart } = CartSlice.actions;

export const CartReducer = CartSlice.reducer;
