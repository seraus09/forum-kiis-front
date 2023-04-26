import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const SnackBarInfo = (props) => {
    const { open, handleClose, message } = props;

    return (
    <Snackbar 
        open={open}
        autoHideDuration={6000} 
        onClose={handleClose}
        anchorOrigin={{ 
          vertical: 'bottom',
          horizontal: 'right',
          }}>
        <Alert 
            onClose={handleClose} 
            severity="info" 
            sx={{ 
                width: '340px', 
                bgcolor: '#90e0ef'
                }}>
            {message}
        </Alert>
    </Snackbar>
    )
}

export default SnackBarInfo;