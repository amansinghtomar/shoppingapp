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
} from "./Cardstyles";
import CustomizedDialogs from "../Dialog/DialogBox";
import { Button } from "../Button/Button";
import image from "../../assets/temp.jpg";
import Items from "../MenuItem/Items";
import Empty from "../Empty/Empty";
import NoData from "../../assets/Nodata.svg";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Card({
  userAction,
  handleUserAction,
  menuList,
  anchorEl,
  postLists,
  handleLike,
}) {
  const router = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {postLists.length !== 0 || postLists ? (
        postLists.map((post) => {
          return (
            <CardWrapper key={post.id}>
              <CardTop>
                <UserDetail>
                  <UserImage />
                  <UserInfo>
                    <Typography as="p" fontWeight="500">
                      {post.name}
                    </Typography>
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
              <ContentImage src={image}></ContentImage>
              <CardBottom>
                <LikesContainer>
                  {post.like ? (
                    <FavoriteButtonRed
                      onClick={() => handleLike(post.id, post.like)}
                      fontSize="large"
                    />
                  ) : (
                    <FavoriteButton
                      onClick={() => handleLike(post.id, post.like)}
                      fontSize="large"
                    />
                  )}

                  <Typography as="p"> {post.likeCount}</Typography>
                </LikesContainer>
                <CartButton fontSize="large" />
              </CardBottom>
              <CardDetail>
                <Typography as="p" gutterBottom="8">
                  {post.caption}
                </Typography>
                <Typography hover="true" color="primary">
                  <Button onClick={() => setOpen(!open)}>
                    View Description
                  </Button>

                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    BackdropProps={{
                      style: {
                        backgroundColor: "black",
                        opacity: 0.1,
                      },
                    }}
                  >
                    <DialogTitle id="alert-dialog-title">product </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means
                        sending anonymous location data to Google, even when no
                        apps are running.
                      </DialogContentText>
                      <DialogContentText id="alert-dialog-description">
                        100000{" "}
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                  </Dialog>
                  {/* <CustomizedDialogs
                    handleClose={handleClose}
                    open={open}
                    buttonName="View Description"
                    productName="ProductName"
                    productDetail="This is a very good Product"
                    price="1000"
                  /> */}
                </Typography>
              </CardDetail>
            </CardWrapper>
          );
        })
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
    </>
  );
}
