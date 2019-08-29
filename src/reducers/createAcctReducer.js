import { CREATE_ACCOUNT, CREATE_ACCOUNT_LOADING } from '../actions/types';

const initialState = {
  account: {},
  loading: false,
};

const createAcctReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ACCOUNT:
      return {
        ...state,
        account: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default createAcctReducer;
