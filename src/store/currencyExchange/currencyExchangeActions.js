/* eslint-disable max-len */

import { URL_API } from '../../utils/api';
import { currencyRequest, currencyRequestAsync } from '../currencyRequest/currencyRequestActions';

export const CURRENCY_EXCHANGE_REQUEST = 'CURRENCY_EXCHANGE_REQUEST';
export const CURRENCY_EXCHANGE_REQUEST_SUCCESS = 'CURRENCY_EXCHANGE_REQUEST_SUCCESS';
export const CURRENCY_EXCHANGE_REQUEST_ERROR = 'CURRENCY_EXCHANGE_REQUEST_ERROR';

export const currencyExchangeRequest = () => ({
  type: CURRENCY_EXCHANGE_REQUEST,
});

export const currencyExchangeRequestSuccess = (data) => ({
  type: CURRENCY_EXCHANGE_REQUEST_SUCCESS,
  data,
});

export const currencyExchangeRequestError = (error) => ({
  type: CURRENCY_EXCHANGE_REQUEST_ERROR,
  error,
});

export const currencyExchangeRequestAsync = (from, to, amount) => (dispatch) => {
  const token = localStorage.getItem('bearer');

  if (!token || token === 'undefined') return;
  dispatch(currencyRequest());

  const transferData = {
    from,
    to,
    amount,
  };
  console.log(transferData);
  fetch(`${URL_API}/currency-buy`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transferData),
  })
    .then((response) => {
      if (response.ok) dispatch(currencyRequestAsync());

      throw new Error('Error');
    })
    .catch((error) => dispatch(currencyExchangeRequestError(error)));
};
