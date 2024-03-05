/* eslint-disable max-len */
import { configureStore } from '@reduxjs/toolkit';
import { userSignInReducer } from './signInRequest/signInRequestReducer';
import { userAccountsReducer } from './accountsRequest/accountsRequestReducer';
import { userAccountInfoReducer } from './accountInfoRequest/accountInfoRequestReducer';
import { accountTransferFundsReducer } from './accountTransferFunds/accountTransferFundsReducer';
import { currencyTypeRequestReducer } from './currencyTypeRequest/currencyTypeRequestReducer';
import { currencyRequestReducer } from './currencyRequest/currencyRequestReducer';
import { currencyBuyReducer } from './buyCurrency/buyCurrencyReducer';
import { createUserReducer } from './accountCreationRequest/accountCreationRequestReducer';

export const store = configureStore({
  reducer: {
    signIn: userSignInReducer,
    createUser: createUserReducer,
    userAccounts: userAccountsReducer,
    userAccountInfo: userAccountInfoReducer,
    accountTransferFunds: accountTransferFundsReducer,
    currencyTypes: currencyTypeRequestReducer,
    userCurrencies: currencyRequestReducer,
    currencyBuy: currencyBuyReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
});
