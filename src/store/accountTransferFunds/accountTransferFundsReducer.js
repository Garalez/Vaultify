import {
  ACCOUNT_TRANSFER_FUNDS,
  ACCOUNT_TRANSFER_FUNDS_SUCCESS,
  ACCOUNT_TRANSFER_FUNDS_ERROR,
} from './accountTransferFundsActions.js';

const initialState = {
  status: '',
  error: '',
};

export const accountTransferFundsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_TRANSFER_FUNDS:
      return {
        status: 'loading',
        error: '',
      };
    case ACCOUNT_TRANSFER_FUNDS_SUCCESS:
      return {
        status: 'loaded',
        error: '',
      };
    case ACCOUNT_TRANSFER_FUNDS_ERROR:
      return {
        status: 'rejected',
        error: action.error,
      };

    default:
      return state;
  }
};
