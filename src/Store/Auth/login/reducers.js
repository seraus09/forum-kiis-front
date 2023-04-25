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
    token: localStorage.getItem('access_token'),
    refresh_token: localStorage.getItem('refresh_token'),
    isAuthenticated: false,
    user: '',
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
          user: '',
        };
      case LOGIN_USER_SUCCESS:
        localStorage.setItem('access_token', action.payload?.access_token);
        localStorage.setItem('refresh_token', action.payload?.refresh_token);
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          user: action.payload.user,
          error: '',
          token: localStorage.getItem('access_token'),
          refresh_token: localStorage.getItem('refresh_token')
        };
     
      case LOGIN_USER_FAILURE:
      case CHECK_TOKEN_FAILURE:
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        return {
          ...state,
          loading: false,
          isAuthenticated: false,
          error: action.payload,
          user: '',
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
        localStorage.setItem('access_token', action.payload.access);
        return {
          ...state,
          isAuthenticated: true,
          error: '',
          token: localStorage.getItem('access_token'),
          refresh_token: localStorage.getItem('refresh_token')
        };

      default:
        return state;
    }
  };
  
  export default loginReducer;