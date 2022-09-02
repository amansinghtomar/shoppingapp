import * as React from "react";
// import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "../Button/Button";
import { Typography } from "@mui/material";
import { ContainerHeading, ProductName,ProductPrice,ProductDetail,ProductReview,ProductReviewDeatils,ReviewContainer } from "./DialogStyles";


function DialogBox({
  post,
  open,
  handleClose,
}) {
  console.log("post",post.review)
  return (
    <>
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
        
         
 <ContainerHeading >
            <ProductName> {post.productName}</ProductName>
            <ProductPrice>{`$ ${post.productPrice}` }</ProductPrice>
          </ContainerHeading>
          <ProductDetail> {post.productDetail}</ProductDetail>
        <ProductReview>Customer Reviews { `(${post.review && post.review.length})`} </ProductReview>
        {post.review && post.review.length !== 0 && post.review.map(review => {
          return (
            <ReviewContainer>
               <ProductReviewDeatils>{review.comment}</ProductReviewDeatils>
            <ProductReviewDeatils>{ review.name}</ProductReviewDeatils>
            </ReviewContainer>
           
          )
        } )}
       
         
         
       
        {/* <DialogTitle id="alert-dialog-title">{post.productName} </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {post.productDetail}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
           {post.productPrice}
          </DialogContentText>
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
}

export default DialogBox;
