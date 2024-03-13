/* eslint-disable max-len */
import style from '../Registration.module.scss';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { createUserRequestError } from '../../../../../../store/accountCreationRequest/accountCreationRequestActions';
import { useDispatch } from 'react-redux';
import { useLanguage } from '../../../../../../hooks/useLanguage';
import Langs from '../../../../../../locales/translations.json';

export const AccountCreationForm = ({
  accountCreationFormSubmit,
  formValues,
  handleChange,
  userCreationStatus,
}) => {
  const dispatch = useDispatch();
  const { language } = useLanguage();
  const [loginError, setLoginError] = useState('');
  const [isInputValid, setIsInputValid] = useState({
    login: true,
    password: true,
    confirmPassword: true,
  });

  useEffect(() => {
    if (userCreationStatus === 'User exists') {
      setLoginError(Langs[language].main.registration[14]);
      setIsInputValid({ ...isInputValid, login: false });
    }
  }, []);

  const handleBlur = (e) => {
    const { name } = e.target;

    setIsInputValid({ ...isInputValid, [name]: !!formValues[name] });
    if (name === 'login') {
      setLoginError(Langs[language].main.registration[15]);
      if (formValues.login.length < 6) {
        setIsInputValid({ ...isInputValid, login: false });
        setLoginError(Langs[language].main.registration[16]);
      }
      if (userCreationStatus !== '') {
        dispatch(createUserRequestError(''));
      }
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (formValues.login && formValues.password && (formValues.confirmPassword === formValues.password)) {
      accountCreationFormSubmit();
    } else {
      setIsInputValid({
        login: !!formValues.login,
        password: !!formValues.password,
        confirmPassword: (formValues.confirmPassword === formValues.password),
      });
    }
  };

  return (
    <form
      className={style.registrationForm}
      action=''
      onSubmit={(e) => formSubmit(e)}
    >
      <ul className={style.registrationInputList}>
        <li className={style.registrationInputItem}>
          <label className={style.registrationLabel} htmlFor='login'>
            {Langs[language].main.registration[13]}
          </label>
          <input
            className={style.registrationInput}
            type='text'
            id='login'
            name='login'
            value={formValues.login}
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChange(e)}
          />
          {!isInputValid.login && (
            <p className={style.inputsError}>{loginError}</p>
          )}
        </li>
        <li className={style.registrationInputItem}>
          <label className={style.registrationLabel} htmlFor='password'>
            {Langs[language].main.registration[17]}
          </label>
          <input
            className={style.registrationInput}
            type='password'
            id='password'
            name='password'
            value={formValues.password}
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChange(e)}
          />
          {!isInputValid.password && (
            <p className={style.inputsError}>{Langs[language].main.registration[18]}</p>
          )}
        </li>
        <li className={style.registrationInputItem}>
          <label className={style.registrationLabel} htmlFor='confirmPassword'>
            {Langs[language].main.registration[19]}
          </label>
          <input
            className={style.registrationInput}
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            value={formValues.confirmPassword}
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChange(e)}
          />
          {!isInputValid.confirmPassword && (
            <p className={style.inputsError}>{Langs[language].main.registration[20]}</p>
          )}
        </li>
      </ul>
      <div className={style.registrationAgreementWrapper}>
        <button className={style.nextBtn}>{Langs[language].main.registration[21]}</button>
        <div className={style.registrationPolicyWrapper}>
          <div className={style.customCheckboxWrapper}>
            <input
              className={style.customCheckboxInput}
              type='checkbox'
              id='customCheckbox'
            />
            <label
              className={style.customCheckboxLabel}
              htmlFor='customCheckbox'
            >
              By clicking on the button, I consent to the processing of personal
              data and agree to the privacy policy
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

AccountCreationForm.propTypes = {
  accountCreationFormSubmit: PropTypes.func,
  formValues: PropTypes.object,
  handleChange: PropTypes.func,
  userCreationStatus: PropTypes.string,
};
