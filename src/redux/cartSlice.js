import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";


const initialState = {
   cartItems: [],
   cartError: {},
   cartloading : false
};

export const addCartItems = createAsyncThunk("cart", async (value,{getState}) => {
   console.log("value ",value)
   const state = getState()
 console.log("state", state)

   const docRef = doc(db, "Users", value[1]);
   console.log("docRef", docRef)
   
   try {
        await updateDoc(docRef, {
   cart: [...state.cart.cartItems, value[0]]
   })
   }catch(error) {
      console.log(error,"error")
   }
 
   return value[0]   
   
})

const CartSlice = createSlice({
   name: "cartItems",
   initialState,
   reducers: {
      // addToCart: (state, action) => {
      //    state.cartItems = [...current(state).cartItems, action.payload];
      // },
   },
   extraReducers: (builder) => {  
      builder.addCase(addCartItems.pending, (state) => {
         state.cartloading = true;
      });
      builder.addCase(addCartItems.fulfilled, (state, action) => {
         console.log("action.payload", action.payload, current(state).cartItems)
         let temp = JSON.parse(JSON.stringify(current(state).cartItems)) 
         console.log(" initial temp ",temp ) 
        temp.push(action.payload)
         state.cartItems = temp
         state.cartloading = false;
         state.cartError = "";
        
      });
      builder.addCase(addCartItems.rejected, (state, action) => {
         state.cartloading = false;
         state.cartItems = [];
         state.cartError = action.error;
      });
   },
});

//export const { addToCart } = CartSlice.actions;

export const CartReducer = CartSlice.reducer;
