import {
  CURRENCY_EXCHANGE_REQUEST,
  CURRENCY_EXCHANGE_REQUEST_SUCCESS,
  CURRENCY_EXCHANGE_REQUEST_ERROR,
} from './currencyExchangeActions.js';

const initialState = {
  status: '',
  error: '',
};

export const currencyExchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENCY_EXCHANGE_REQUEST:
      return {
        status: 'loading',
        error: '',
      };
    case CURRENCY_EXCHANGE_REQUEST_SUCCESS:
      return {
        status: 'loaded',
        error: '',
      };
    case CURRENCY_EXCHANGE_REQUEST_ERROR:
      return {
        status: 'rejected',
        error: action.error,
      };

    default:
      return state;
  }
};
