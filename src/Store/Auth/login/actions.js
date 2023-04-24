import axiosInstance from '../../../config/config'
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  CHECK_TOKEN_SUCCESS,
  CHECK_TOKEN_FAILURE,
} from './types';

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

const checkTokenFailure = (error) => {
  return {
    type: CHECK_TOKEN_FAILURE,
    payload: error,
  };
};

const checkTokenSuccess = (data) => {
  return {
    type: CHECK_TOKEN_SUCCESS,
  };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    dispatch(loginUserRequest());
    try {
      const response = await axiosInstance.post('auth/login/', userData);
      dispatch(loginUserSuccess(response.data));
    } catch (error) {
      dispatch(loginUserFailure(
        error.message || 'Unexpected error')
        );
    }
  };
};

export const checkToken = (data) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.post('auth/token/verify/', data);
       dispatch(checkTokenSuccess(response.data));
    } catch (error) {
      dispatch(checkTokenFailure(error.response.data.code))
    }
  };
};
