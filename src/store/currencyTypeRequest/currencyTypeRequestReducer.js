import {
  CURRENCY_TYPE_REQUEST,
  CURRENCY_TYPE_REQUEST_SUCCESS,
  CURRENCY_TYPE_REQUEST_ERROR,
} from './currencyTypeRequestActions.js';

const initialState = {
  status: '',
  data: [],
  error: '',
};

export const currencyTypeRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENCY_TYPE_REQUEST:
      return {
        status: 'loading',
        error: '',
      };
    case CURRENCY_TYPE_REQUEST_SUCCESS:
      return {
        status: 'loaded',
        data: action.data,
        error: '',
      };
    case CURRENCY_TYPE_REQUEST_ERROR:
      return {
        status: 'rejected',
        error: action.error,
      };

    default:
      return state;
  }
};
