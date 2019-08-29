import { CREATE_ACCOUNT, CREATE_ACCOUNT_LOADING, CLEAR_ACCOUNT_CREATED } from '../actions/types';

const initialState = {
  account: {},
  loading: false,
  created: false,
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
        created: true,
      };
    case CLEAR_ACCOUNT_CREATED:
      return {
        ...state,
        created: false,
      };
    default:
      return state;
  }
};
export default createAcctReducer;
