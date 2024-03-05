import style from '../Registration.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const FullNameForm = ({
  fullNameFormSubmit,
  formValues,
  handleChange,
}) => {
  const [isInputValid, setIsInputValid] = useState({
    name: true,
    surname: true,
    patronymic: true,
  });

  const handleBlur = (e) => {
    const { name } = e.target;

    setIsInputValid({ ...isInputValid, [name]: !!formValues[name] });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (formValues.name && formValues.surname && formValues.patronymic) {
      fullNameFormSubmit();
    } else {
      setIsInputValid({
        name: !!formValues.name,
        surname: !!formValues.surname,
        patronymic: !!formValues.patronymic,
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
          <label className={style.registrationLabel} htmlFor='name'>
            Имя
          </label>
          <input
            className={style.registrationInput}
            type='text'
            id='name'
            name='name'
            value={formValues.name}
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChange(e)}
          />
          {!isInputValid.name && (
            <p className={style.inputsError}>
              Неверное имя пользователя
            </p>
          )}
        </li>
        <li className={style.registrationInputItem}>
          <label className={style.registrationLabel} htmlFor='surname'>
            Фамилия
          </label>
          <input
            className={style.registrationInput}
            type='text'
            id='surname'
            name='surname'
            value={formValues.surname}
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChange(e)}
          />
          {!isInputValid.surname && (
            <p className={style.inputsError}>
              Неверная фамилия пользователя
            </p>
          )}
        </li>
        <li className={style.registrationInputItem}>
          <label className={style.registrationLabel} htmlFor='patronymic'>
            Отчество
          </label>
          <input
            className={style.registrationInput}
            type='text'
            id='patronymic'
            name='patronymic'
            value={formValues.patronymic}
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChange(e)}
          />
          {!isInputValid.patronymic && (
            <p className={style.inputsError}>
              Неверное отчество пользователя
            </p>
          )}
        </li>
      </ul>
      <button className={style.nextBtn} type='submit'>
        Далее
      </button>
    </form>
  );
};

FullNameForm.propTypes = {
  fullNameFormSubmit: PropTypes.func,
  formValues: PropTypes.object,
  handleChange: PropTypes.func,
};
