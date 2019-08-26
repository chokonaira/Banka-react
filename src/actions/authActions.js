import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../config/axiosInstance';
import {
  LOGIN_REQUEST_LOADING, SIGN_UP_REQUEST_LOADING, GET_ERRORS, SET_CURRENT_USER, NEW_USER,
} from './types';
import setAuthToken from '../utils/setAuthToken';

// set request loading
export const requestLoading = type => ({
  type,
});

// set logged in user
export const newUser = decoded => ({
  type: NEW_USER,
  payload: decoded,
});

// set logged in user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

export const loginUser = userData => (dispatch) => {
  dispatch(requestLoading(LOGIN_REQUEST_LOADING));
  axios
    .post('/auth/login', userData)
    .then((res) => {
      // save token to local storage
      const { data, message } = res.data;
      toast.success(message);
      const { token, user } = data;
      // set token to local storage
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('user', JSON.stringify(user));
      // set token to Auth header
      setAuthToken(token);
      // Set current user
      dispatch(setCurrentUser(user));
    })
    .catch((err) => {
      let { error: message } = err.response.data;
      if (err.response.data.status === 401 || err.response.data.status === 422) {
        message = {
          auth: err.response.data.error,
        };
        toast.error(err.response.data.error, { toastId: 1 });
      }
      dispatch(requestLoading(LOGIN_REQUEST_LOADING));
      dispatch({
        type: GET_ERRORS,
        payload: message,
      });
    });
};

export const registerUser = userData => (dispatch) => {
  dispatch(requestLoading(SIGN_UP_REQUEST_LOADING));
  axios
    .post('/auth/signup', userData)
    .then((res) => {
      // save token to local storage
      const { data } = res.data;
      const { user } = data[0];
      // Set current user
      dispatch(newUser(user));
    })
    .catch((err) => {
      let { error: message } = err.response.data;
      if (err.response.data.status === 400 || err.response.data.status === 422) {
        message = {
          auth: err.response.data.error,
        };
        toast.error(err.response.data.error, { toastId: 1 });
      }
      dispatch(requestLoading(SIGN_UP_REQUEST_LOADING));
      dispatch({
        type: GET_ERRORS,
        payload: message,
      });
    });
};
