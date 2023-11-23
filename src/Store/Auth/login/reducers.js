import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    CHECK_TOKEN_SUCCESS,
    CHECK_TOKEN_FAILURE,
    REFRESHE_TOKEN_SUCCESS
  } from './types';
  
  const initialState = {
    loading: false,
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    error: '',
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER_REQUEST:
        return {
          ...state,
          loading: true,
          isAuthenticated: false,
          token: null, 
          error: '',
    
        };
      case LOGIN_USER_SUCCESS:
        localStorage.setItem('token', action.payload?.token);
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          user: action.payload.user,
          error: '',
          token: localStorage.getItem('token'),
        };
     
      case CHECK_TOKEN_FAILURE:
        localStorage.removeItem('token');
        return {
          ...state,
          loading: false,
          isAuthenticated: false,
          error: action.payload,
    
          token: null,
          refresh_token: null,
          
        };
      
      case LOGIN_USER_FAILURE:
        localStorage.removeItem('token');
        return {
          ...state,
          loading: false,
          isAuthenticated: false,
          error: action.payload,
          token: null,
          refresh_token: null,
          };
      case CHECK_TOKEN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          error: ''
        };
      
      case REFRESHE_TOKEN_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          isAuthenticated: true,
          error: '',
          token: localStorage.getItem('token'),
        };

      default:
        return state;
    }
  };
  
  export default loginReducer;