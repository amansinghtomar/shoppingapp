import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import { CardContainer, DashboardLeft } from "./DashboardStyles";
import usePost from "../../hooks/usePost";
import Empty from "../../components/Empty/Empty";
import { useNavigate } from "react-router-dom";
import NoData from "../../assets/Nodata.svg";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../redux/userPostSlice";
import { compareobjects } from "../../utils";

function DashboardLeftContainer() {
   const { handleLike, setAnchorEl, anchorEl, userActionMenuList, open } = usePost({
      url: "",
   });

   const dispatch = useDispatch();
   const { loading, posts } = useSelector((state) => state.post);

   useEffect(() => {
      const collRef = collection(db, "Posts");
      const snapRef = onSnapshot(collRef, (querySnapshot) => {
         const data = querySnapshot.docs.map((query) => query.data());
         if (compareobjects(data, posts)) {
            dispatch(addPost(data));
         }
      });

      return () => {
         snapRef();
      };
   }, []);

   const router = useNavigate();

   const handleClickOpen = (post) => {
      router(`/product/${post.id}`, { state: post });
   };

   return (
      <DashboardLeft>
         <CardContainer>
            {posts.length > 0 && posts ? (
               posts.map((post) => (
                  <Card
                     key={post.id}
                     userAction={open}
                     handleUserAction={setAnchorEl}
                     anchorEl={anchorEl}
                     menuList={userActionMenuList}
                     handleLike={handleLike}
                     post={post}
                     handleClickOpen={handleClickOpen}
                  />
               ))
            ) : (
               <Empty
                  image={NoData}
                  message="You are not following anyone"
                  btnTitle="Explore"
                  handleBtn={() => {
                     router("../", { replace: true });
                  }}
               />
            )}
         </CardContainer>
      </DashboardLeft>
   );
}

export default DashboardLeftContainer;
