import React from "react";
import NoData from "../../assets/Nodata.svg";
import { Button } from "../../components/Button/Button";
import Typography from "../../components/Typography/Typography";
import { Wrapper } from "../Login/LoginStyles";
import { Container, NoDataImage } from "./CartStyles";

function Cart() {
  return (
    <Wrapper>
      <Container>
        <NoDataImage src={NoData} alt="No Data Found" />
        <Typography as="p" textAlign="center" gutterBottom="10">
          You are not following anyone
        </Typography>
        <Button width="100%" height="40px" background="#6C63FF" color="white">
          Explore People
        </Button>
      </Container>
    </Wrapper>
  );
}

export default Cart;
