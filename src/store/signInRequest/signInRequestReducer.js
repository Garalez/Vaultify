import {
  USER_SIGN_IN_REQUEST,
  USER_SIGN_IN_REQUEST_SUCCESS,
  USER_SIGN_IN_REQUEST_ERROR,
} from './signInRequestActions.js';

const initialState = {
  status: '',
  error: '',
};

export const userSignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGN_IN_REQUEST:
      return {
        ...state,
        status: 'loading',
        error: '',
      };
    case USER_SIGN_IN_REQUEST_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        error: '',
      };
    case USER_SIGN_IN_REQUEST_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: action.error,
      };

    default:
      return state;
  }
};
