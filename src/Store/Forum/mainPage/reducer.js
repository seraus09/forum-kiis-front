import {
    POST_REQUEST,
    POST_SUCCESS,
    POST_FAILURE,
   } from './types';


const initialState = {
    loading: false,
    posts: [],
    error: '',
  };


const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case POST_REQUEST:
        return {
          ...state,
          loading: true,
          posts: [],
          error: '',
    
        };
      case POST_SUCCESS:
        return {
          ...state,
          loading: false,
          posts: action.payload,
          error: '',
        };
        
      case POST_FAILURE:
        return {
          ...state,
          loading: false,
          posts: [],
          error: action.payload
        };
     

      default:
        return state;
    }
  };
  
  export default postReducer;