import { URL_API } from '../../utils/api';

export const USER_SIGN_IN_REQUEST = 'USER_SIGN_IN_REQUEST';
export const USER_SIGN_IN_REQUEST_SUCCESS = 'USER_SIGN_IN_REQUEST_SUCCESS';
export const USER_SIGN_IN_REQUEST_ERROR = 'USER_SIGN_IN_REQUEST_ERROR';

export const userSignInRequest = () => ({
  type: USER_SIGN_IN_REQUEST,
});

export const userSignInRequestSuccess = () => ({
  type: USER_SIGN_IN_REQUEST_SUCCESS,
});

export const userSignInRequestError = (error) => ({
  type: USER_SIGN_IN_REQUEST_ERROR,
  error,
});

export const userSignInRequestAsync = (userName, userPassword) => (dispatch) => {
  const token = localStorage.getItem('bearer');
  if (token && token !== 'undefined') return;
  dispatch(userSignInRequest());

  fetch(`${URL_API}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login: userName,
      password: userPassword,
    }),
  })
    .then((response) => response.json())
    .then(({ token }) => {
      dispatch(userSignInRequestSuccess(token));
      localStorage.setItem('bearer', token);
    })
    .catch((error) => dispatch(userSignInRequestError(error)));
};
