import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { checkAuth } from '../../Store/Auth/login/actions';
import { useEffect } from 'react';


const PrivateRoute = ({ children }) => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.loginReducer.token);
    useEffect(() => {
        dispatch(checkAuth(token));
      }, [dispatch, token]);
    if(token) {
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
           