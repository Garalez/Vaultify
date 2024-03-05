/* eslint-disable max-len */

import { URL_API } from '../../utils/api';

export const CURRENCY_TYPE_REQUEST = 'CURRENCY_TYPE_REQUEST';
export const CURRENCY_TYPE_REQUEST_SUCCESS = 'CURRENCY_TYPE_REQUEST_SUCCESS';
export const CURRENCY_TYPE_REQUEST_ERROR = 'CURRENCY_TYPE_REQUEST_ERROR';

export const currencyTypeRequest = () => ({
  type: CURRENCY_TYPE_REQUEST,
});

export const currencyTypeRequestSuccess = (data) => ({
  type: CURRENCY_TYPE_REQUEST_SUCCESS,
  data,
});

export const currencyTypeRequestError = (error) => ({
  type: CURRENCY_TYPE_REQUEST_ERROR,
  error,
});

export const currencyTypeRequestAsync = () => (dispatch) => {
  const token = localStorage.getItem('bearer');

  if (!token || token === 'undefined') return;
  dispatch(currencyTypeRequest());

  fetch(`${URL_API}/all-currencies`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(currencyTypeRequestSuccess(data));
    })
    .catch((error) => dispatch(currencyTypeRequestError(error)));
};
