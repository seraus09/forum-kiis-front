import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { checkToken } from '../../Store/Auth/login/actions';
import { useEffect, useState } from 'react';
import SnackBarInfo from '../Snackbar/SnackbarInfo';

const PrivateRoute = ({ children }) => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.loginReducer.token);
    const refresh_token = useSelector(state => state.loginReducer.refresh_token);
    const [snackBarOpenInfo, setSnackBarOpenInfo] = useState(true);
  
  const handleCloseSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    if (snackBarOpenInfo) {
        setSnackBarOpenInfo(false);
    }
  };
    useEffect(() => {
        const data = new FormData()
        data.append('token', token)
        dispatch(checkToken(data, refresh_token));
      }, [dispatch, token, refresh_token]);

    if(token && refresh_token){
        return children;
    } 
    else {
        return (
            <>   
                <Navigate to="/signin" />
                <SnackBarInfo
                open={snackBarOpenInfo}
                handleClose={handleCloseSnackBar}
                message="Your session was expired"/>
            </>
            )
    }
}

export default PrivateRoute;
           