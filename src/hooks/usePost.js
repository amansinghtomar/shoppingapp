import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


//firebase
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
//Reducer
import { addCartItems } from '../redux/cartSlice'
import { addPost } from "../redux/userPostSlice";



export default function usePost() {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const [alert, setAlert] = React.useState({ visible: false, severity: "", message: "", open: false });
   const timerRef = React.useRef(null);
   const open = Boolean(anchorEl);
   const { posts } = useSelector((state) => state.post);
   const { userInfo } = useSelector((state) => state.auth);
   const dispatch = useDispatch();

   const addToWishList = () => { };

   const userActionMenuList = [
      {
         name: "Add to Wishlist",
         handleClick: addToWishList,
      },
   ];
   const router = useNavigate();

   const handleClickOpen = (post) => {
      router(`/product/${post.id}`, { state: post });
   };

   const handleAddToCart = (post) => {

      setAlert({ visible: true, severity: "success", message: "Product added successfully", open: true });
      timerRef.current = setTimeout(() => {
         setAlert({ visible: false, severity: "", message: "" });
      }, 2000);
      dispatch(addCartItems([post, userInfo.uid]));
   }


   const handleLike = async (id, like) => {
      if (like === undefined) return null;
      let tempPosts = JSON.parse(JSON.stringify(posts));
      const newPostList = tempPosts.filter(async (post) => {
         if (post.id === id) {
            post.like = !post.like;
            post.likeCount
               ? (post.likeCount = post.likeCount - 1)
               : (post.likeCount = post.likeCount + 1);

            const likePostRef = doc(db, "Posts", id);
            await updateDoc(likePostRef, {
               like: post.like,
               likeCount: post.likeCount,
            });
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
      handleClickOpen,
      handleAddToCart,
      alert

   };
}
