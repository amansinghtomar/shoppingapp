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
import Items from "../MenuItem/Items";

export default function Card({
  userAction,
  handleUserAction,
  menuList,
  anchorEl,
}) {
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
        <Button>
          <UserActionIcon
            onClick={(event) => handleUserAction(event.currentTarget)}
            color="action"
          />
          <Items
            anchorEl={anchorEl}
            open={userAction}
            handleClose={() => handleUserAction(null)}
            menuList={menuList}
          />
        </Button>
      </CardTop>
      <ContentImage src={image}></ContentImage>
      <CardBottom>
        <LikesContainer>
          <Button>
            <FavoriteButton fontSize="large" />
          </Button>

          <Typography as="p">6</Typography>
        </LikesContainer>
        <Button>
          <CartButton fontSize="large" />
        </Button>
      </CardBottom>
      <CardDetail>
        <Typography as="p" gutterBottom="8">
          This is my first Card
        </Typography>
        <Typography hover="true" color={true}>
          View Prices and Reviews
        </Typography>
      </CardDetail>
    </CardWrapper>
  );
}
