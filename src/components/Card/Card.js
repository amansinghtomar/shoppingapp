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
  FavoriteButtonRed
} from "./Cardstyles";
import image from "../../assets/temp.jpg";
import Items from "../MenuItem/Items";
import Empty from "../Empty/Empty";
import NoData from "../../assets/Nodata.svg";
import { useNavigate } from "react-router-dom";


export default function Card({
  userAction,
  handleUserAction,
  menuList,
  anchorEl,
  postLists,
  handleLike
}) {
  const router = useNavigate();
  return (
    <>
      {
        (postLists.length !== 0 || postLists) ? 
          postLists.map((post) => {
            return (
            <CardWrapper>
          <CardTop>
            <UserDetail>
              <UserImage />
              <UserInfo>
                <Typography as="p" fontWeight="500">
                  {post.name}
                </Typography>
                <Typography as="p" fontWeight="lighter" fontSize="0.9em">
                  {post.location}
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
                    {post.like ?
                      <FavoriteButtonRed onClick={() => handleLike(post.id, post.like)} fontSize="large" />
                      :<FavoriteButton onClick={() => handleLike(post.id, post.like)} fontSize="large" />}
              
              <Typography as="p"> {post.likeCount}</Typography>
            </LikesContainer>
            <CartButton fontSize="large" />
          </CardBottom>
          <CardDetail>
            <Typography as="p" gutterBottom="8">
            {post.caption}
            </Typography>
            <Typography hover="true" color="primary">
              View Prices and Reviews
            </Typography>
          </CardDetail>
        </CardWrapper>
          )
          })
          :
            <Empty
            image={NoData}
            message="You are not following anyone"
            btnTitle="Explore"
            handleBtn={() => {
              router("../", { replace: true });
            }}
          />
         
  }</>

   
  );
}
