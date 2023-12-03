import {
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  } from './types';
  
  const initialState = {
    loading: false,
    token: localStorage.getItem('token'),
    isAuthenticated: true,
    error: '',
  };
  
  const logoutReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGOUT_USER_REQUEST:
        return {
          ...state,
          loading: true,
          isAuthenticated: true,
          token: null, 
          error: '',
    
        };
      case LOGOUT_USER_SUCCESS:
        localStorage.setItem('token', action.payload?.token);
        return {
          ...state,
          loading: false,
          isAuthenticated: false,
          error: '',
          token: localStorage.removeItem('token'),
        };
     
      case LOGOUT_USER_FAILURE:
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          error: action.payload,
          token: localStorage.getItem('token'),
          };

      default:
        return state;
    }
  };
  
  export default logoutReducer;