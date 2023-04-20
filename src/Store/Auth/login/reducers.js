import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
  } from './types';
  
  const initialState = {
    loading: false,
    success: false,
    error: '',
  };
  
  const registerReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_USER_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
          error: '',

        };
      case REGISTER_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          error: ''
        };
      case REGISTER_USER_FAILURE:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default registerReducer;