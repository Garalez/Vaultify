import {
  USER_ACCOUNT_INFO_REQUEST,
  USER_ACCOUNT_INFO_REQUEST_SUCCESS,
  USER_ACCOUNT_INFO_REQUEST_ERROR,
} from './accountInfoRequestActions.js';

const initialState = {
  status: '',
  accountInfo: {},
  error: '',
};

export const userAccountInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACCOUNT_INFO_REQUEST:
      return {
        ...state,
        status: 'loading',
        error: '',
      };
    case USER_ACCOUNT_INFO_REQUEST_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        accountInfo: action.data,
        error: '',
      };
    case USER_ACCOUNT_INFO_REQUEST_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: action.error,
      };

    default:
      return state;
  }
};
