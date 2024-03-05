/* eslint-disable max-len */

import { URL_API } from '../../utils/api';

export const CURRENCY_BUY_REQUEST = 'CURRENCY_BUY_REQUEST';
export const CURRENCY_BUY_REQUEST_SUCCESS = 'CURRENCY_BUY_REQUEST_SUCCESS';
export const CURRENCY_BUY_REQUEST_ERROR = 'CURRENCY_BUY_REQUEST_ERROR';

export const currencyBuyRequest = () => ({
  type: CURRENCY_BUY_REQUEST,
});

export const currencyBuyRequestSuccess = (data) => ({
  type: CURRENCY_BUY_REQUEST_SUCCESS,
  data,
});

export const currencyBuyRequestError = (error) => ({
  type: CURRENCY_BUY_REQUEST_ERROR,
  error,
});

export const currencyBuyRequestAsync = (from, to, amount) => (dispatch) => {
  const token = localStorage.getItem('bearer');

  if (!token || token === 'undefined') return;
  dispatch(currencyBuyRequest());

  const transferData = {
    from,
    to,
    amount,
  };

  fetch(`${URL_API}/currency-buy`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transferData),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(currencyBuyRequestSuccess(data.payload));
    })
    .catch((error) => dispatch(currencyBuyRequestError(error)));
};
