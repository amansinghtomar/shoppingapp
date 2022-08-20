import React from "react";
import Card from "../../components/Card/Card";
import { CardContainer, DashboardLeft } from "./DashboardStyles";
import {postList} from '../../PostList'

function DashboardLeftContainer() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [postLists, setPostLists] = React.useState(postList)
  
  

  const addToWishList = () => {};

  const userActionMenuList = [
    {
      name: "Add to Wishlist",
      handleClick: addToWishList,
    },
  ];

  const handleLike = (id, like) => {
    if (like === undefined)
      return null
    const newPostList = postLists.filter((post) => {
      if (post.id === id) {
        post.like = !post.like
        like ? post.likeCount =  post.likeCount  - 1 :  post.likeCount =  post.likeCount  + 1
      }
        return post
    })
    setPostLists(newPostList)
    return postLists
  }
  
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

export default DashboardLeftContainer;
