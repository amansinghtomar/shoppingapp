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
   FavoriteButtonRed,
   CustomLink,
} from "./Cardstyles";
import { Button } from "../Button/Button";
import image from "../../assets/temp.jpg";
import Items from "../MenuItem/Items";

export default function Card({
   userAction,
   handleUserAction,
   menuList,
   anchorEl,
   post,
   handleLike,
   handleClickOpen,
   handleAddToCart
}) {
   return (
      <CardWrapper>
         <CardTop>
            <UserDetail>
               <UserImage />
               <UserInfo>
                  <CustomLink to="/profile">
                     <Typography as="p" fontWeight="500">
                        {post.name}
                     </Typography>
                  </CustomLink>
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
         <ContentImage src={post.image} />
         <CardBottom>
            <LikesContainer>
               {post.like ? (
                  <FavoriteButtonRed
                     onClick={() => handleLike(post.id, post.like)}
                     fontSize="large"
                  />
               ) : (
                  <FavoriteButton onClick={() => handleLike(post.id, post.like)} fontSize="large" />
               )}

               <Typography as="p"> {post.likeCount}</Typography>
            </LikesContainer>
            <CartButton onClick ={()=> handleAddToCart(post)} fontSize="large" />
         </CardBottom>
         <CardDetail>
            <Typography as="p" gutterBottom="8">
               {post.caption}
            </Typography>
            <Typography hover="true" color="primary">
               <Button variant="secondary" onClick={() => handleClickOpen(post)}>
                  View Product
               </Button>
            </Typography>
         </CardDetail>
      </CardWrapper>
   );
}
