import React from "react";
import { useSelector } from "react-redux";
import ShoppingCard from "../../components/Card/ShoppingCard";
import { CartCardContainer, CartLeftConatiner } from "./CartStyles";

function CartLeft() {
   const { cartItems } = useSelector((state) => state.cart);
   console.log("cartItems", cartItems);
   return (
      <CartLeftConatiner>
         <CartCardContainer>
            {cartItems.map((cartValue) => (
               <ShoppingCard key={cartItems.id} {...cartValue} />
            ))}
         </CartCardContainer>
      </CartLeftConatiner>
   );
}

export default CartLeft;
