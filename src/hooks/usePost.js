import React from "react";
import { postList } from "../PostList";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/userPostSlice";



export default function usePost() {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const { posts } = useSelector((state) => state.post);
   const dispatch = useDispatch();

   const addToWishList = () => {};

   const userActionMenuList = [
      {
         name: "Add to Wishlist",
         handleClick: addToWishList,
      },
   ];

   const handleLike = (id, like) => {
      if (like === undefined) return null;
      let tempPosts = JSON.parse(JSON.stringify(posts));
      const newPostList = tempPosts.filter((post) => {
         if (post.id === id) {
            post.like = !post.like;
            like ? (post.likeCount = post.likeCount - 1) : (post.likeCount = post.likeCount + 1);
         }
         return post;
      });
      dispatch(addPost(newPostList));
   };

   return {
      handleLike,
      posts,
      dispatch,
      setAnchorEl,
      anchorEl,
      userActionMenuList,
      open,
   };
}
