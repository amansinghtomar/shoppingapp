import React from "react";
import Card from "../../components/Card/Card";
import { CardContainer, DashboardLeft } from "./DashboardStyles";

function DashboardLeftContainer() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const addToWishList = () => {};

  const userActionMenuList = [
    {
      name: "Add to Wishlist",
      handleClick: addToWishList,
    },
  ];

  return (
    <DashboardLeft>
      <CardContainer>
        <Card
          userAction={open}
          handleUserAction={setAnchorEl}
          anchorEl={anchorEl}
          menuList={userActionMenuList}
        />
        <Card
          userAction={open}
          handleUserAction={setAnchorEl}
          anchorEl={anchorEl}
          menuList={userActionMenuList}
        />
        <Card
          userAction={open}
          handleUserAction={setAnchorEl}
          anchorEl={anchorEl}
          menuList={userActionMenuList}
        />
        <Card
          userAction={open}
          handleUserAction={setAnchorEl}
          anchorEl={anchorEl}
          menuList={userActionMenuList}
        />
      </CardContainer>
    </DashboardLeft>
  );
}

export default DashboardLeftContainer;
