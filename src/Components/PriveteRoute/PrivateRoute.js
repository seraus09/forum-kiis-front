import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { checkToken } from '../../Store/Auth/login/actions';
import { useEffect } from 'react';


const PrivateRoute = ({ children }) => {
    // const dispatch = useDispatch();
    const token = useSelector(state => state.loginReducer.token);
    // useEffect(() => {
    //     const data = new FormData()
    //     data.append('token', token)
    //     dispatch(checkToken(data, refresh_token));
    //   }, [dispatch, token, refresh_token]);
    if(token){
        return children;
    } 
    else {
        return (
            <> 
               <Navigate to="/signin" />
            </>
            )
    }
}

export default PrivateRoute;
           