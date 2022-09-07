import React from "react";
import Card from "../../components/Card/Card";
import { CardContainer, DashboardLeft } from "./FollowingStyles";
import usePost from '../../hooks/usePost'

function Following() { 

  const {  handleLike,postLists, setAnchorEl,anchorEl,userActionMenuList,open } =
    usePost(
      {
       url : ""
      }
    );
  return (
    <DashboardLeft>
      <CardContainer>
        <Card
          userAction={open}
          handleUserAction={setAnchorEl}
          anchorEl={anchorEl}
          menuList={userActionMenuList}
          handleLike={handleLike}
          postLists={postLists}
        
        />
      </CardContainer>
    </DashboardLeft>
  );
}

export default Following;
