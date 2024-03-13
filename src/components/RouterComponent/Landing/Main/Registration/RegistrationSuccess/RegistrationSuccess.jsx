/* eslint-disable max-len */
import style from './RegistrationSuccess.module.scss';
import PuffLoader from 'react-spinners/PuffLoader';
import PropTypes from 'prop-types';
import { ReactComponent as Check } from '../../../../../../assets/svg/registrationSuccessCheckmark.svg';
import { useLanguage } from '../../../../../../hooks/useLanguage';
import Langs from '../../../../../../locales/translations.json';

export const RegistrationSuccess = ({ status }) => {
  const { language } = useLanguage();
  return (
    <section className={style.registrationSuccess}>
      {status === 'success' ? (
        <div className={style.registrationSuccessWrapper}>
          <Check className={style.registrationSuccessCheck} />
          <div className={style.registrationSuccessTextWrapper}>
            <h2 className={style.registrationSuccessTitle}>
              {Langs[language].main.registration[22]}
            </h2>
            <p className={style.registrationSuccessText}>{Langs[language].main.registration[23]}</p>
          </div>
        </div>
      ) : (
        <div className={style.registrationSuccessWrapper}>
          <h2 className={style.registrationSuccessTitle}>
            {Langs[language].main.registration[24]}
          </h2>
          <p className={style.registrationSuccessText}>{Langs[language].main.registration[25]}</p>
          <div className={style.registrationSuccessLoaderWrapper}>
            <PuffLoader color='#00BFFF' size={100} />
          </div>
        </div>
      )}
    </section>
  );
};

RegistrationSuccess.propTypes = {
  status: PropTypes.string,
};
