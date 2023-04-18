import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const SnackBarError = (props) => {
  const { open, handleClose, message } = props;
    return (
    <Snackbar 
      open={open}
      autoHideDuration={4000} 
      onClose={handleClose}
      anchorOrigin={{ 
        vertical: 'bottom',
        horizontal: 'right',
        }}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {message}
        </Alert>
    </Snackbar>
    )
}

export default SnackBarError;