import axiosInstance from '../../../config/config'
import {
   POST_REQUEST,
   POST_SUCCESS,
   POST_FAILURE,
  } from './types';


const postRequest = () => {
    return {
      type: POST_REQUEST,
    };
  };
  
const postSuccess = (data) => {
    return {
      type: POST_SUCCESS,
      payload: data,
    };
  };
  
const postFailure = (error) => {
    return {
      type: POST_FAILURE,
      payload: error,
    };
  };

export const getPosts = (token) => {
    return async (dispatch) => {
      dispatch(postRequest());
      try {
        const response = await axiosInstance.get('api/posts?page=1', 
            {   
                headers: {
                    'Authorization': 'Bearer ' + token
          }});
        dispatch(postSuccess(response.data));
      } catch (error) {
        dispatch(postFailure('Unexpected error'));
      }
    };
  };