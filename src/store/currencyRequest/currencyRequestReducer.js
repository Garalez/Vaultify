import {
  CURRENCY_REQUEST,
  CURRENCY_REQUEST_SUCCESS,
  CURRENCY_REQUEST_ERROR,
} from './currencyRequestActions.js';

const initialState = {
  status: '',
  data: [],
  error: '',
};

export const currencyRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENCY_REQUEST:
      return {
        status: 'loading',
        error: '',
      };
    case CURRENCY_REQUEST_SUCCESS:
      return {
        status: 'loaded',
        data: action.data,
        error: '',
      };
    case CURRENCY_REQUEST_ERROR:
      return {
        status: 'rejected',
        error: action.error,
      };

    default:
      return state;
  }
};
