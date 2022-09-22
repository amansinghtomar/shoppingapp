import React from "react";
import {
  DeleteButton,
  ShoppingCardAction,
  ShoppingCardImage,
  ShoppingCardInfo,
  ShoppingCardWrapper,
} from "./ShoppingStyles";
import image from "../../assets/temp.jpg";
import Typography from "../Typography/Typography";
import { FavoriteButton } from "./Cardstyles";
import DefaultMenuItem from "../MenuItem/DefaultMenuItem";
import { useSelector } from "react-redux";


function ShoppingCard() {
  const { cartItems } = useSelector((state) => state.cart);
  console.log("cartItems",cartItems)
  return (
    <ShoppingCardWrapper>
      <ShoppingCardImage src={image} alt="Cart Image" />
      <ShoppingCardInfo>
        <div>
          <Typography as="h4" fontWeight="500">
            Product Name
          </Typography>

          <Typography as="p" fontSize="13px" fontWeight="240">
            Sold by: Aman Tomar
          </Typography>
        </div>

        <Typography as="h5" fontWeight="500">
          $4
        </Typography>
        <DefaultMenuItem />
        <Typography as="p" fontSize="12px" fontWeight="300">
          Delivery by 5 Sept
        </Typography>
      </ShoppingCardInfo>
      <ShoppingCardAction>
        <FavoriteButton fontSize="large" />
        <DeleteButton fontSize="large" />
      </ShoppingCardAction>
    </ShoppingCardWrapper>
  );
}

export default ShoppingCard;
