import style from './CurrencyExchangeCustomSelector.module.scss';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export const CurrencyExchangeCustomSelector = ({ currencyTypes, onClick }) => {
  const listAnimation = {
    visible: {
      height: 'auto',
    },
    hidden: {
      height: 0,
    },
  };

  return (
    <motion.ul
      variants={listAnimation}
      initial='hidden'
      animate='visible'
      transition={{ duration: 0.2 }}
      exit='hidden'
      className={style.currencyExchangeSelectList}>
      {currencyTypes.map((currency, index) => (
        <li
          key={index}
          className={style.currencyExchangeSelectItem}
          onClick={(event) => onClick(event)}>
          {currency}
        </li>
      ))}
    </motion.ul>
  );
};

CurrencyExchangeCustomSelector.propTypes = {
  currencyTypes: PropTypes.array,
  onClick: PropTypes.func,
};
