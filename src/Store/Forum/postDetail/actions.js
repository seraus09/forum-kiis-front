import axiosInstance from '../../../config/config'
import {
   GET_POST_REQUEST,
   GET_POST_SUCCESS,
   GET_POST_FAILURE,
   ADD_COMMENT_REQUEST,
   ADD_COMMENT_SUCCESS,
   ADD_COMMENT_FAILURE
  } from './types';


const getPostRequest = () => {
    return {
      type: GET_POST_REQUEST,
    };
  };
  
const getPostSuccess = (data) => {
    return {
      type: GET_POST_SUCCESS,
      payload: data,
    };
  };
  
const getPostFailure = (error) => {
    return {
      type: GET_POST_FAILURE,
      payload: error,
    };
  };

  const addCommentRequest = () => {
    return {
      type: ADD_COMMENT_REQUEST,
    };
  };
  
const adddCommentSuccess = (data) => {
    return {
      type: ADD_COMMENT_SUCCESS,
      payload: data,
    };
  };
  
const adddCommentFailure = (error) => {
    return {
      type: ADD_COMMENT_FAILURE,
      payload: error,
    };
  };




export const getPost = (token, postId) => {
    return async (dispatch) => {
      dispatch(getPostRequest());
      try {
        const response = await axiosInstance.get(`api/posts/${postId}`, 
            {   
                headers: {
                    'Authorization': 'Bearer ' + token
          }});
        dispatch(getPostSuccess(response.data));
      } catch (error) {
        dispatch(getPostFailure('Unexpected error'));
      }
    };
  };


export const addComment = (token, postId ,newComment) => {
    return async (dispatch) => {
      dispatch(addCommentRequest());
      try {
        const response = await axiosInstance.post(`api/posts/${postId}/comment`, newComment, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        dispatch(adddCommentSuccess(response.data));
        window.location.reload()
      } catch (error) {
        dispatch(adddCommentFailure('Unexpected error'));
      }
    };
  };

