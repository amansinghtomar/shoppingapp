import React from "react";
import Card from "../../components/Card/Card";
import { CardContainer, DashboardLeft } from "./DashboardStyles";
import usePost from "../../hooks/usePost";
import Empty from "../../components/Empty/Empty";
import { useNavigate } from "react-router-dom";
import NoData from "../../assets/Nodata.svg";

function DashboardLeftContainer() {
   const { handleLike, postLists, setAnchorEl, anchorEl, userActionMenuList, open } = usePost({
      url: "",
   });

   const router = useNavigate();

   const handleClickOpen = (post) => {
      router(`/product/${post.id}`, { state: post });
   };

   return (
      <DashboardLeft>
         <CardContainer>
            {postLists.length !== 0 || postLists ? (
               postLists.map((post) => (
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
