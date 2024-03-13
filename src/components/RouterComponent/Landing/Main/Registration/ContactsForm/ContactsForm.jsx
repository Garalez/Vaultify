import style from '../Registration.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useLanguage } from '../../../../../../hooks/useLanguage';
import Langs from '../../../../../../locales/translations.json';

export const ContactsForm = ({
  contactsFormSubmit,
  formValues,
  handleChange,
}) => {
  const { language } = useLanguage();

  const phoneRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const [isInputValid, setIsInputValid] = useState({
    phoneNumber: true,
    eMail: true,
  });

  const handleBlur = (e) => {
    const { name } = e.target;

    if (name === 'phoneNumber') {
      setIsInputValid({
        ...isInputValid,
        phoneNumber: phoneRegex.test(formValues.phoneNumber),
      });
    }

    if (name === 'eMail') {
      setIsInputValid({
        ...isInputValid,
        eMail: emailRegex.test(formValues.eMail),
      });
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (
      phoneRegex.test(formValues.phoneNumber) &&
      emailRegex.test(formValues.eMail)
    ) {
      contactsFormSubmit();
    } else {
      setIsInputValid({
        phoneNumber: phoneRegex.test(formValues.phoneNumber),
        eMail: emailRegex.test(formValues.eMail),
      });
    }
  };

  return (
    <form
      className={style.registrationForm}
      action=''
      onSubmit={(e) => formSubmit(e)}
    >
      <div className={style.contactWrapper}>
        <ul className={style.registrationInputList}>
          <li className={style.registrationInputItem}>
            <label className={style.registrationLabel} htmlFor='phone'>
              {Langs[language].main.registration[8]}
            </label>
            <input
              className={style.registrationInput}
              type='text'
              id='phone'
              name='phoneNumber'
              value={formValues.phoneNumber}
              onBlur={(e) => handleBlur(e)}
              onChange={(e) => handleChange(e)}
            />
            {!isInputValid.phoneNumber && (
              <p className={style.inputsError}>{Langs[language].main.registration[9]}</p>
            )}
          </li>
          <li className={style.registrationInputItem}>
            <label className={style.registrationLabel} htmlFor='eMail'>
              {Langs[language].main.registration[10]}
            </label>
            <input
              className={style.registrationInput}
              type='text'
              id='eMail'
              name='eMail'
              value={formValues.eMail}
              onBlur={(e) => handleBlur(e)}
              onChange={(e) => handleChange(e)}
            />
            {!isInputValid.eMail && (
              <p className={style.inputsError}>{Langs[language].main.registration[11]}</p>
            )}
          </li>
        </ul>
        <div className={style.nextBtnWrapper}>
          <button className={style.nextBtn}>{Langs[language].main.registration[12]}</button>
        </div>
      </div>
    </form>
  );
};

ContactsForm.propTypes = {
  contactsFormSubmit: PropTypes.func,
  formValues: PropTypes.object,
  handleChange: PropTypes.func,
};
