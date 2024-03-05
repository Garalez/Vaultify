import { URL_API } from '../../utils/api';

export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

export const createUserRequest = () => ({
  type: CREATE_USER,
});

export const createUserRequestSuccess = () => ({
  type: CREATE_USER_SUCCESS,
});

export const createUserRequestError = (error) => ({
  type: CREATE_USER_ERROR,
  error,
});

export const createUserRequestAsync =
  ({ name, surname, patronymic, phoneNumber, eMail, login, password }) =>
    (dispatch) => {
      if (
        name === '' ||
        surname === '' ||
        patronymic === '' ||
        phoneNumber === '' ||
        eMail === '' ||
        login === '' ||
        password === ''
      ) dispatch(createUserRequestError('not all fields are filled in'));

      dispatch(createUserRequest());

      fetch(`${URL_API}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.toLowerCase(),
          surname: surname.toLowerCase(),
          patronymic: patronymic.toLowerCase(),
          login: login.toLowerCase(),
          password,
          phoneNumber,
          eMail,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw response;
          }
          return dispatch(createUserRequestSuccess());
        })
        .catch((errorResponse) => {
          errorResponse.json().then((error) => {
            dispatch(createUserRequestError(error.error));
          });
        });
    };
