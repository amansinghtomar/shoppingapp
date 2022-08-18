import Typography from "../Typography/Typography";
import { Button } from "../Button/Button";
import React from "react";
import {
  CardBottom,
  CardDetail,
  CardTop,
  CardWrapper,
  CartButton,
  ContentImage,
  FavoriteButton,
  LikesContainer,
  UserActionIcon,
  UserDetail,
  UserImage,
  UserInfo,
} from "./Cardstyles";
import image from "../../assets/temp.jpg";

export default function Card() {
  return (
    <CardWrapper>
      <CardTop>
        <UserDetail>
          <UserImage />
          <UserInfo>
            <Typography as="p" fontWeight="500">
              Aman Tomar
            </Typography>
            <Typography
              as="p"
              fontWeight="lighter"
              color="rgba(0, 0, 0, 0.54)"
              fontSize="0.9em"
            >
              Mumbai Maharashrtra
            </Typography>
          </UserInfo>
        </UserDetail>
        <Button background="white">
          <UserActionIcon />
        </Button>
      </CardTop>
      <ContentImage src={image}></ContentImage>
      <CardBottom>
        <LikesContainer>
          <Button background="white">
            <FavoriteButton fontSize="large" />
          </Button>

          <Typography as="p">6</Typography>
        </LikesContainer>
        <Button background="white">
          <CartButton fontSize="large" />
        </Button>
      </CardBottom>
      <CardDetail>
        <Typography as="p" gutterBottom="8">
          This is my first Card
        </Typography>
        <Typography hover="true">View Prices and Reviews</Typography>
      </CardDetail>
    </CardWrapper>
  );
}
