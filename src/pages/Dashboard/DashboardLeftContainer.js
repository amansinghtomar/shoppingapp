//React Exports
import React, { useEffect } from "react";

//Custom Components
import Card from "../../components/Card/Card";
import { CardContainer, DashboardLeft } from "./DashboardStyles";
import Empty from "../../components/Empty/Empty";
import NoData from "../../assets/Nodata.svg";

//External Libraries
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

//Custom Stuff
import usePost from "../../hooks/usePost";
import { addPost } from "../../redux/userPostSlice";
import { compareobjects } from "../../utils";

function DashboardLeftContainer() {
   const {
      handleLike,
      setAnchorEl,
      anchorEl,
      userActionMenuList,
      open,
      posts,
      dispatch,
      handleAddToCart,
      handleClickOpen,
      alert
   } = usePost({
      url: "",
   });

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
                     handleAddToCart={handleAddToCart}
                     alert = {alert}
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
