import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Form from '../Form/Form'
import useInput from "../../hooks/useInput";

export default function FormDialog({open,handleClose}) {
 

     const { value, handleChange, isValid, errors, touched, onBlur } = useInput(
      {
         applyCoupon: "",
      },
  );
  
    const applyCouponInput = [
      {
         type: "text",
         placeholder: "Enter coupon code",
        name: "applyCoupon",
         value: value.applyCoupon
      },
   ];
  
  return (
    <div>
 
      <Dialog open={open} onClose={handleClose}>
     
       

        <DialogContent>
            <Form
                  formTitle="Apply coupn"
                  formFields={applyCouponInput}
                  handleChange={handleChange}
                  onBlur={onBlur}
                  touched={touched}
                  errors={errors}
                  actionButtonTitle="Apply"
                  isValid={isValid}
                  handleActionButton={handleClose}
               />
        </DialogContent>
      </Dialog>
    </div>
  );
}




