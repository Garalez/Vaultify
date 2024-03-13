import { useLanguage } from '../../../../../../hooks/useLanguage';
import style from './MyCurrencies.module.scss';
import PropTypes from 'prop-types';
import Langs from '../../../../../../locales/translations.json';

export const MyCurrencies = ({ userCurrencies }) => {
  const { language } = useLanguage();
  return (
    <section className={style.myCurrencies}>
      <h3 className={style.myCurrenciesTitle}>{Langs[language].app.exchange[7]}</h3>
      <ul className={style.myCurrenciesList}>
        <li className={style.myCurrenciesItem}>
          {userCurrencies.map((currency, index) => (
            <p key={index} className={style.myCurrenciesName}>
              {currency.code}
            </p>
          ))}
        </li>
        <li className={style.myCurrenciesItem}>
          {userCurrencies.map((currency, index) => (
            <p key={index} className={style.myCurrenciesQuantity}>
              {currency.amount}
            </p>
          ))}
        </li>
      </ul>
    </section>
  );
};
MyCurrencies.propTypes = {
  userCurrencies: PropTypes.array,
};
