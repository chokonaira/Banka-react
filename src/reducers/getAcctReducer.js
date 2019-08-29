import { GET_ACCOUNT, ACCOUNT_LOADING } from '../actions/types';

const initialState = {
  accounts: [],
  loading: false,
};

const getAcctReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ACCOUNT:
      return {
        ...state,
        accounts: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default getAcctReducer;
