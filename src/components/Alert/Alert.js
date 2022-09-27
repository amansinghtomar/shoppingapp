import * as React from 'react';
//MUI library
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function AlertBox({ visible, severity, message, open }) {   
    return (         
        <Snackbar open={open} autoHideDuration={6000} 
            anchorOrigin={{
                vertical: "top",
                horizontal: "center"
            }} >
            {visible &&
                    <Alert severity={severity} >
                {message}
                </Alert>}
      </Snackbar>
  );
}