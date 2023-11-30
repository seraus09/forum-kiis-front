import {
    ADD_POST_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS
   } from './types';

const initialState = {
    loading: false,
    data: {},
    error: '',
  };

  const AddPostReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_POST_REQUEST:
        return {
          ...state,
          loading: true,
          data: {},
          error: '',
    
        };
      case ADD_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: '',
        };
        
      case ADD_POST_FAILURE:
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
  
  export default AddPostReducer;