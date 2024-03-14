/* eslint-disable max-len */
import style from './Auth.module.scss';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSignInRequestAsync } from '../../../../../store/signInRequest/signInRequestActions';
import { Preloader } from '../../../../../UI/Preloader/Preloader';
import { useLanguage } from '../../../../../hooks/useLanguage';
import Langs from '../../../../../locales/translations.json';

export const Auth = () => {
  const dispatch = useDispatch();
  const { language } = useLanguage();
  const userDataStatus = useSelector((state) => state.signIn.status);

  const [userAccountData, setUserAccountData] = useState({
    login: '',
    password: '',
  });

  const [displayErrorMassage, setDisplayErrorMassage] = useState({
    login: false,
    password: false,
  });

  const inputValidation = () => {
    setDisplayErrorMassage({
      login: !!(userAccountData.login && userAccountData.login.length <= 5),
      password: !!(userAccountData.password && userAccountData.password.length <= 5),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const regexNonWord = /[^a-zA-Z0-9]/;

    setUserAccountData({
      ...userAccountData,
      [name]: value.replace(regexNonWord, ''),
    });

    if (e.target.name === 'login' && value.length >= 6) {
      setDisplayErrorMassage({ ...displayErrorMassage, login: false });
    }
    if (e.target.name === 'password' && value.length >= 6) {
      setDisplayErrorMassage({ ...displayErrorMassage, password: false });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      userAccountData.login &&
      !displayErrorMassage.login &&
      userAccountData.password &&
      !displayErrorMassage.password
    ) {
      dispatch(
        userSignInRequestAsync(
          userAccountData.login.toLowerCase(),
          userAccountData.password.toLowerCase()
        )
      );
    }
  };

  return (
    <section>
      <div className={style.authOverlay}>
        <div className={style.authWrapper}>
          <h1 className={style.authTitle}>{Langs[language].app.auth[0]}</h1>
          <form action='' onSubmit={(e) => handleFormSubmit(e)}>
            <ul className={style.authInputList}>
              <li className={style.authInputItem}>
                <label className={style.authLabel} htmlFor='login'>
                  {Langs[language].app.auth[1]}
                </label>
                <input
                  className={style.authInput}
                  type='text'
                  id='login'
                  name='login'
                  onChange={(e) => handleChange(e)}
                  value={userAccountData.login}
                  onBlur={() => inputValidation()}
                  required
                />
                {displayErrorMassage.login && (
                  <p className={style.authInputError}>{Langs[language].app.auth[2]}</p>
                )}
              </li>
              <li className={style.authInputItem}>
                <label className={style.authLabel} htmlFor='password'>
                  {Langs[language].app.auth[3]}
                </label>
                <input
                  className={style.authInput}
                  type='password'
                  id='password'
                  name='password'
                  onChange={(e) => handleChange(e)}
                  value={userAccountData.password}
                  onBlur={() => inputValidation()}
                  required
                />
                {displayErrorMassage.password && (
                  <p className={style.authInputError}>{Langs[language].app.auth[4]}</p>
                )}
              </li>
            </ul>
            <div className={style.authBtnWrapper}>
              <button className={style.authFormSubmit} type='submit'>
                {Langs[language].app.auth[5]}
              </button>
              {userDataStatus === 'loading' ? (
                <Preloader color={'white'} />
              ) : userDataStatus === 'rejected' ? (
                <p className={style.authInputError}>{Langs[language].app.auth[6]}</p>
              ) : (
                <></>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
