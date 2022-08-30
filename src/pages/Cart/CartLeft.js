import React from "react";
import ShoppingCard from "../../components/Card/ShoppingCard";
import { CartCardContainer, CartLeftConatiner } from "./CartStyles";

function CartLeft() {
  return (
    <CartLeftConatiner>
      <CartCardContainer>
        <ShoppingCard />
      </CartCardContainer>
    </CartLeftConatiner>
  );
}

export default CartLeft;