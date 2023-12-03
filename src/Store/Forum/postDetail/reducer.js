import {
    GET_POST_REQUEST,
    GET_POST_SUCCESS,
    GET_POST_FAILURE,
   } from './types';


const initialState = {
    loading: false,
    post: [],
    error: '',
  };


export const getPostReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_POST_REQUEST:
        return {
          ...state,
          loading: true,
          post: [],
          error: '',
    
        };
      case GET_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          post: action.payload,
          error: '',
        };
        
      case GET_POST_FAILURE:
        return {
          ...state,
          loading: false,
          post: [],
          error: action.payload
        };
     

      default:
        return state;
    }
  };
  
  export default getPostReducer;