import { combineReducers } from 'redux';
import authReducer from './authReducer';
import registerReducer from './registerReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  register: registerReducer,
});
