// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import axios from '../config/axiosInstance';
import {
  GET_ACCOUNT, ACCOUNT_LOADING, CREATE_ACCOUNT, GET_ERRORS,
  CREATE_ACCOUNT_LOADING,
} from './types';

// set request loading
export const accountLoading = type => ({
  type,
});

// GET LOGGED IN USER ACCOUNT
export const userAccounts = email => (dispatch) => {
  dispatch(accountLoading(ACCOUNT_LOADING));
  axios().get(`/user/${email}/accounts`)
    .then(res => dispatch({
      type: GET_ACCOUNT,
      payload: res.data.data,
    }))
    .catch();
};

// CREATE BANK ACCOUNT
export const createAccounts = AccountData => (dispatch) => {
  dispatch(accountLoading(CREATE_ACCOUNT_LOADING));
  axios().post('/accounts', AccountData)
    .then(res => dispatch({
      type: CREATE_ACCOUNT,
      payload: res.data.data,
    }))
    .catch((err) => {
      let { error: message } = err.response.data;
      if (err.response.data.status === 400 || err.response.data.status === 422) {
        message = {
          auth: err.response.data.error,
        };
        toast.error(err.response.data.error, { toastId: 1 });
      }
      dispatch(accountLoading(ACCOUNT_LOADING));
      dispatch({
        type: GET_ERRORS,
        payload: message,
      });
    });
};
