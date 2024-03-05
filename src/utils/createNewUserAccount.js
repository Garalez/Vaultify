import { URL_API } from './api';

export const createNewUserAccount = () => {
  const token = localStorage.getItem('bearer');
  if (!token && token === 'undefined') return;

  fetch(`${URL_API}/create-account`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((error) => console.log(error));
};
