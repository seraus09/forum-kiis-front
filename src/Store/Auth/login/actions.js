import axiosInstance from '../../../config/config'
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  CHECK_TOKEN_SUCCESS,
  CHECK_TOKEN_FAILURE,
  REFRESHE_TOKEN_SUCCESS,
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
const refreshTokenSuccess = (data) => {
  return {
    type: REFRESHE_TOKEN_SUCCESS,
    payload: data,
  };
};

const refreshToken = (error, refresh_token) => {
  return async (dispatch) => {
    const data = new FormData()
    data.append('refresh', refresh_token)
      if (
        error.response.status === 401 &&
        error.response.data.code === 'token_not_valid' &&
        error.response.data.detail === 'Token is invalid or expired'
      ) {
        try {
          const response = await axiosInstance.post('auth/token/refresh/', data);
          dispatch(refreshTokenSuccess(response.data));
        } catch (error) {
          dispatch(checkTokenFailure(error.response))
        }
      }
  }
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    dispatch(loginUserRequest());
    try {
      const response = await axiosInstance.post('auth/login/', userData);
      dispatch(loginUserSuccess(response.data));
    } catch (error) {
      dispatch(loginUserFailure(
        error.response?.data?.non_field_errors ||
        error.response?.data?.email ||
         'Unexpected error')
        );
    }
  };
};



export const checkToken = (data, refresh_token) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.post('auth/token/verify/', data);
       dispatch(checkTokenSuccess(response.data));
    } catch (error) {
      dispatch(refreshToken(error, refresh_token));
    }
  };
};
