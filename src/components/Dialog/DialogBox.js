import * as React from "react";
// import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "../Button/Button";

function DialogBox({
  buttonName,
  productName,
  productDetail,
  price,
  open,
  handleClose,
}) {
  //   const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };
  return (
    <>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        {buttonName}{" "}
      </Button> */}
    </>
  );
}

export default DialogBox;
