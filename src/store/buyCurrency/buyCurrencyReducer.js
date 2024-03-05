import {
  CURRENCY_BUY_REQUEST,
  CURRENCY_BUY_REQUEST_SUCCESS,
  CURRENCY_BUY_REQUEST_ERROR,
} from './buyCurrencyActions.js';

const initialState = {
  status: '',
  data: {},
  error: '',
};

export const currencyBuyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENCY_BUY_REQUEST:
      return {
        status: 'loading',
        error: '',
      };
    case CURRENCY_BUY_REQUEST_SUCCESS:
      return {
        status: 'loaded',
        data: action.data,
        error: '',
      };
    case CURRENCY_BUY_REQUEST_ERROR:
      return {
        status: 'rejected',
        error: action.error,
      };

    default:
      return state;
  }
};
