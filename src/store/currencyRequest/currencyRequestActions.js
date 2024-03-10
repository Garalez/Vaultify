/* eslint-disable max-len */
import { addCurrencySign } from '../../utils/addCurrencySigns';
import { URL_API } from '../../utils/api';

export const CURRENCY_REQUEST = 'CURRENCY_REQUEST';
export const CURRENCY_REQUEST_SUCCESS = 'CURRENCY_REQUEST_SUCCESS';
export const CURRENCY_REQUEST_ERROR = 'CURRENCY_REQUEST_ERROR';

export const currencyRequest = () => ({
  type: CURRENCY_REQUEST,
});

export const currencyRequestSuccess = (data) => ({
  type: CURRENCY_REQUEST_SUCCESS,
  data,
});

export const currencyRequestError = (error) => ({
  type: CURRENCY_REQUEST_ERROR,
  error,
});

export const currencyRequestAsync = () => (dispatch) => {
  const token = localStorage.getItem('bearer');

  if (!token || token === 'undefined') return;

  dispatch(currencyRequest());

  fetch(`${URL_API}/currencies`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(currencyRequestSuccess(addCurrencySign(data)));
    })
    .catch((error) => dispatch(currencyRequestError(error)));
};
