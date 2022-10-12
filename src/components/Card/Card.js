import React from "react";
//Custom CSS
import {
   CardBottom,
   CardDetail,
   CardTop,
   CardWrapper,
   CartButton,
   ContentImage,
   FavoriteButton,
   LikesContainer,
   UserDetail,
   UserImage,
   UserInfo,
   FavoriteButtonRed,
   CustomLink, 
} from "./Cardstyles";
//Custom Component
import Typography from "../Typography/Typography";
import { Button } from "../Button/Button";
import Items from "../MenuItem/Items";

export default function Card({
   menuList,
   post,
   handleLike,
   handleClickOpen,
   handleAddToCart,
   alert
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
            <Items
               menuList={menuList}
                type="UserActionIcon"
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
