/* eslint-disable max-len */
import { userAccountsRequest, userAccountsRequestAsync } from '../store/accountsRequest/accountsRequestActions';
import { URL_API } from './api';

export const createNewUserAccount = () => (dispatch) => {
  const token = localStorage.getItem('bearer');
  if (!token && token === 'undefined') return;
  dispatch(userAccountsRequest());

  fetch(`${URL_API}/create-account`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.ok) {
        dispatch(userAccountsRequestAsync());
      }
    })
    .catch((error) => console.log(error));
};
