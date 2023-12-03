import {
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS
   } from './types';

const initialState = {
    loading: false,
    data: {},
    error: '',
  };

  const AddCommentReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_COMMENT_REQUEST:
        return {
          ...state,
          loading: true,
          data: {},
          error: '',
    
        };
      case ADD_COMMENT_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: '',
        };
        
      case ADD_COMMENT_FAILURE:
        return {
          ...state,
          loading: false,
          data: {},
          error: action.payload
        };
     

      default:
        return state;
    }
  };
  
  export default AddCommentReducer;