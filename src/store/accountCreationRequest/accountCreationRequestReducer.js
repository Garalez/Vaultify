import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from './accountCreationRequestActions.js';

const initialState = {
  status: '',
  error: '',
};

export const createUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        status: 'loading',
        error: '',
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        status: 'success',
        error: '',
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: action.error,
      };

    default:
      return state;
  }
};
