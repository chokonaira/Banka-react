import { combineReducers } from 'redux';
import authReducer from './authReducer';
import registerReducer from './registerReducer';
import errorReducer from './errorReducer';
import getAcctReducer from './getAcctReducer';
import createAcctReducer from './createAcctReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  register: registerReducer,
  accounts: getAcctReducer,
  createAcct: createAcctReducer,
});
