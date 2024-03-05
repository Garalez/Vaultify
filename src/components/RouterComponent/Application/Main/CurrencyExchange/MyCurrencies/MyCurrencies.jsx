import style from './MyCurrencies.module.scss';
import PropTypes from 'prop-types';

export const MyCurrencies = ({ userCurrencies }) => (
  <section className={style.myCurrencies}>
    <h3 className={style.myCurrenciesTitle}>Мои валюты</h3>
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

MyCurrencies.propTypes = {
  userCurrencies: PropTypes.array,
};
