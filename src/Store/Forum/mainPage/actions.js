import axiosInstance from '../../../config/config'
import {
   POST_REQUEST,
   POST_SUCCESS,
   POST_FAILURE,
   ADD_POST_REQUEST,
   ADD_POST_SUCCESS,
   ADD_POST_FAILURE,
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

const AddPostRequest = () => {
    return {
      type: ADD_POST_REQUEST,
    };
  };
  
const AddPostSuccess = (data) => {
    return {
      type: ADD_POST_SUCCESS,
      payload: data,
    };
  };
  
const AddPostFailure = (error) => {
    return {
      type: ADD_POST_FAILURE,
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

export const createPost = (token, newPost) => {
    return async (dispatch) => {
      dispatch(AddPostRequest);
      try {
        const response = await axiosInstance.post('api/posts', newPost, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        dispatch(AddPostSuccess(response.data));
      } catch (error) {
        dispatch(AddPostFailure('Unexpected error'));
      }
    };
  };