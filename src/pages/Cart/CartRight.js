import React from "react";
import Typography from "../../components/Typography/Typography";
import { Button } from "../../components/Button/Button";
import {
  CartRightContainer,
  CoupnContainer,
  PlaceOrder,
  PriceContainer,
  PriceDetails,
  PriceInfo,
} from "./CartStyles";
import { Divider } from "@mui/material";

const priceDetails = [
  {
    name: "Price",
    price: "64",
    divider: false,
  },
  {
    name: "Discount",
    price: "100",
    divider: false,
  },
  {
    name: "Coupons Discount",
    price: "150",
    divider: false,
  },
  {
    name: "Delivery Charge",
    price: "50",
    divider: true,
  },

  {
    name: "Total Amount",
    price: "1500",
    divider: false,
  },
];

function CartRight() {
  return (
    <CartRightContainer>
      <CoupnContainer>
        <Typography as="h4" fontWeight="500">
          Apply Coupons
        </Typography>
        <Button width="150px">Apply</Button>
      </CoupnContainer>
      <PriceContainer>
        <Typography as="h4" fontWeight="450">
          Price Details
        </Typography>
        <Divider style={{ marginTop: "6px" }} />
        <PriceDetails>
          {priceDetails.map((priceDetail) => (
            <>
              <PriceInfo>
                <Typography as="h4" fontWeight="450">
                  {priceDetail.name}
                </Typography>
                <Typography>${priceDetail.price}</Typography>
              </PriceInfo>
              {priceDetail.divider && <Divider style={{ marginTop: "6px" }} />}
            </>
          ))}
        </PriceDetails>
      </PriceContainer>
      <PlaceOrder>
        <Button>Place Order</Button>
      </PlaceOrder>
    </CartRightContainer>
  );
}

export default CartRight;
