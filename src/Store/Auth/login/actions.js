import axiosInstance from '../../../config/config'
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  CHECK_AUTH_SUCCESS,
  CHECK_AUTH_FAILURE,
} from './types';
import usePagination from '@mui/material/usePagination/usePagination';

const loginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST,
  };
};

const loginUserSuccess = (data) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: data,
  };
};

const loginUserFailure = (error) => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error,
  };
};

const checkAuthFailure = (error) => {
  return {
    type: CHECK_AUTH_FAILURE,
    payload: error,
  };
};

const checkAuthSuccess = () => {
  return {
    type: CHECK_AUTH_SUCCESS,
  };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    dispatch(loginUserRequest());
    try {
      const response = await axiosInstance.post('api/login', userData);
      console.log(response.data)
      dispatch(loginUserSuccess(response.data));
    } catch (error) {
      console.log(error.response?.data?.message)
      dispatch(loginUserFailure(
        error.response?.data?.message ||
         'Unexpected error')
        );
    }
  };
};



export const checkAuth = (token) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.get('api/posts', {
        headers: {
          "Authorization": "Bearer " + token
        }
      });
      console.log(response) 
      dispatch(checkAuthSuccess());
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(checkAuthFailure)
      }
    }
  };
};
