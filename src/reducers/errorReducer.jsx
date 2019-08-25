import { GET_ERRORS, REQUEST_LOADING } from '../actions/types';

const initialState = {
  error: '',
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ERRORS:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
