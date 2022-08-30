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
import DefaultMenuItem from "../MenuItem/DefaultMenuItem";
import { Button } from "../Button/Button";
import { FavoriteButton } from "./Cardstyles";
import DeleteIcon from "@mui/icons-material/Delete";

function ShoppingCard() {
  return (
    <ShoppingCardWrapper>
      <ShoppingCardImage src={image} alt="Cart Image" />
      <ShoppingCardInfo>
        <Typography as="h4" fontWeight="500">
          Product Name
        </Typography>

        <Typography as="p" fontSize="13px" fontWeight="240">
          Sold by: Aman Tomar
        </Typography>
        <Typography as="h5" fontWeight="500">
          $4
        </Typography>
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
