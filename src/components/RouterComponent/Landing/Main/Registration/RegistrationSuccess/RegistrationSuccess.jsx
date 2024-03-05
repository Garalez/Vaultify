/* eslint-disable max-len */
import style from './RegistrationSuccess.module.scss';
import PuffLoader from 'react-spinners/PuffLoader';
import PropTypes from 'prop-types';
import { ReactComponent as Check } from '../../../../../../assets/svg/registrationSuccessCheckmark.svg';

export const RegistrationSuccess = ({ status }) => (
  <section className={style.registrationSuccess}>
    {status === 'success' ? (
      <div className={style.registrationSuccessWrapper}>
        <Check className={style.registrationSuccessCheck} />
        <div className={style.registrationSuccessTextWrapper}>
          <h2 className={style.registrationSuccessTitle}>
            Вы успешно зарегистрировались на платформе Vaultify!
          </h2>
          <p className={style.registrationSuccessText}>
            Ссылка для входа в личный кабинет отправлена на вашу электронную почту (не забудьте
            проверить папку «Спам»)
          </p>
        </div>
      </div>
    ) : (
      <div className={style.registrationSuccessWrapper}>
        <h2 className={style.registrationSuccessTitle}>Создание нового пользователя...</h2>
        <p className={style.registrationSuccessText}>Пожалуйста, подождите</p>
        <div className={style.registrationSuccessLoaderWrapper}>
          <PuffLoader color='#00BFFF' size={100} />
        </div>
      </div>
    )}
  </section>
);

RegistrationSuccess.propTypes = {
  status: PropTypes.string,
};
