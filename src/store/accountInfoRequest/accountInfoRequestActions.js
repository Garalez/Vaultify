/* eslint-disable max-len */
import { URL_API } from '../../utils/api';
import {
  filterDatesByCurrentWeek,
  monthlyIncome,
} from '../../utils/formatDate';
import { sortArrayByDate } from '../../utils/sortArrayByDate';

export const USER_ACCOUNT_INFO_REQUEST = 'USER_ACCOUNT_INFO_REQUEST';
export const USER_ACCOUNT_INFO_REQUEST_SUCCESS = 'USER_ACCOUNT_INFO_REQUEST_SUCCESS';
export const USER_ACCOUNT_INFO_REQUEST_ERROR = 'USER_ACCOUNT_INFO_REQUEST_ERROR';

export const userAccountInfoRequest = () => ({
  type: USER_ACCOUNT_INFO_REQUEST,
});

export const userAccountInfoRequestSuccess = (data) => ({
  type: USER_ACCOUNT_INFO_REQUEST_SUCCESS,
  data,
});

export const userAccountInfoRequestError = (error) => ({
  type: USER_ACCOUNT_INFO_REQUEST_ERROR,
  error,
});

export const userAccountInfoRequestAsync = (id) => (dispatch) => {
  const token = localStorage.getItem('bearer');

  if (!token || token === 'undefined') return;

  dispatch(userAccountInfoRequest());

  fetch(`${URL_API}/account/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Basic ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const lastNineTransactions = [...data.payload.transactions.slice(-9)];

      data.payload.transactions = {
        lineGraph: monthlyIncome(data.payload),
        historyTable: sortArrayByDate(lastNineTransactions),
        statisticGraph: filterDatesByCurrentWeek(data.payload),
      };

      dispatch(userAccountInfoRequestSuccess(data.payload));
    })
    .catch((error) => dispatch(userAccountInfoRequestError(error)));
};
