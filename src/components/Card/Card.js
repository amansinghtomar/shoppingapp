import Typography from "../Typography/Typography";
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
            <Typography as="p" fontWeight="lighter" fontSize="0.9em">
              Mumbai Maharashrtra
            </Typography>
          </UserInfo>
        </UserDetail>

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
      </CardTop>
      <ContentImage src={image}></ContentImage>
      <CardBottom>
        <LikesContainer>
          <FavoriteButton fontSize="large" />
          <Typography as="p">6</Typography>
        </LikesContainer>
        <CartButton fontSize="large" />
      </CardBottom>
      <CardDetail>
        <Typography as="p" gutterBottom="8">
          This is my first Card
        </Typography>
        <Typography hover="true" color="primary">
          View Prices and Reviews
        </Typography>
      </CardDetail>
    </CardWrapper>
  );
}
