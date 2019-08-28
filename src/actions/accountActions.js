// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../config/axiosInstance';
import { GET_ACCOUNT, ACCOUNT_LOADING } from './types';

// set request loading
export const accountLoading = () => ({
  type: ACCOUNT_LOADING,
});

// GET LOGGED IN USER ACCOUNT
export const userAccounts = email => (dispatch) => {
  dispatch(accountLoading());
  axios().get(`/user/${email}/accounts`)
    .then(res => dispatch({
      type: GET_ACCOUNT,
      payload: res.data.data,
    }))
    .catch();
};
