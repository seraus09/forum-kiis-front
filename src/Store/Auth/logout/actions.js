import axiosInstance from '../../../config/config'
import {
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
} from './types';

const logoutUserRequest = () => {
  return {
    type: LOGOUT_USER_REQUEST,
  };
};

const logoutUserSuccess = (data) => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: data,
  };
};

const logoutUserFailure = (error) => {
  return {
    type: LOGOUT_USER_FAILURE,
    payload: error,
  };
};


export const logoutUser = (token) => {
  return async (dispatch) => {
    dispatch(logoutUserRequest());
    try {
      const response = await axiosInstance.post('api/forget', null ,{ 
        headers: { 
        'Authorization': 'Bearer ' + token 
      }
    });
      dispatch(logoutUserSuccess(response.data));
      window.location.href = '/signin';
    } catch (error) {
      console.log(error.response?.data?.message)
      dispatch(logoutUserFailure(
        error.response?.data?.message ||
         'Unexpected error')
        );
    }
  };
};


