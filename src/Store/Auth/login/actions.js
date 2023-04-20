import axiosInstance from '../../../config/config'
import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from './types';

const registerUserRequest = () => {
  return {
    type: REGISTER_USER_REQUEST,
  };
};

const registerUserSuccess = (data) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: data,
  };
};

const registerUserFailure = (error) => {
  return {
    type: REGISTER_USER_FAILURE,
    payload: error,
  };
};

const registerUser = (userData, resetForm) => {
  return async (dispatch) => {
    dispatch(registerUserRequest());
    try {
      const response = await axiosInstance.post('auth/registration/', userData);
      dispatch(registerUserSuccess(response.data));
      resetForm();
    } catch (error) {
      dispatch(registerUserFailure(
        error?.response?.data?.email || 
        error?.response?.data?.non_field_errors ||
        error?.response?.data?.password1 ||
        'Unexpected error')
        );
    }
  };
};

export default registerUser;