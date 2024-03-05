/* eslint-disable max-len */
import style from './CurrencyExchangeForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ReactComponent as SelectArrowSvg } from '../../../../../../assets/svg/blackCustomSelectArrow.svg';
import { useOutsideClick } from '../../../../../../hooks/useOutsideClick';
import { currencyRequestAsync } from '../../../../../../store/currencyRequest/currencyRequestActions';
import { currencyBuyRequestAsync } from '../../../../../../store/buyCurrency/buyCurrencyActions';

export const CurrencyExchangeForm = ({ currencyTypes }) => {
  const dispatch = useDispatch();

  const [openSelectFrom, setOpenSelectFrom] = useState(false);
  const [openSelectTo, setOpenSelectTo] = useState(false);

  const [selectFromValue, setSelectFromValue] = useState(currencyTypes[0]);
  const [selectToValue, setSelectToValue] = useState(currencyTypes[0]);

  const [transferSum, setTransferSum] = useState('');

  const selectRefFromRef = useOutsideClick(() => setOpenSelectFrom(false));
  const selectRefToRef = useOutsideClick(() => setOpenSelectTo(false));

  const handleChange = (e) => {
    const regexNonDigitAndDot = /[^\d.]/g;

    setTransferSum(e.target.value.replace(regexNonDigitAndDot, ''));
  };

  const formSubmit = (e) => {
    e.preventDefault();

    dispatch(currencyBuyRequestAsync(selectFromValue, selectToValue, transferSum));
    dispatch(currencyRequestAsync());
    setTransferSum('');
  };

  return (
    <section className={style.currencyExchange}>
      <h3 className={style.currencyExchangeTitle}>Обмен валюты</h3>
      <form
        className={style.currencyExchangeForm}
        action=''
        onSubmit={(e) => formSubmit(e)}
      >
        <ul className={style.currencyExchangeList}>
          <li
            ref={selectRefFromRef}
            onClick={() => setOpenSelectFrom(!openSelectFrom)}
            className={style.currencyExchangeItem}
          >
            <p className={style.currencyExchangeLabel}>Откуда</p>
            <div className={style.currencyExchangeCustomSelect}>
              {selectFromValue}
              <SelectArrowSvg
                className={`${openSelectFrom ? style.selectArrow : ''}`}
              />
            </div>
            {openSelectFrom && (
              <ul className={style.currencyExchangeSelectList}>
                {currencyTypes.map((currency, index) => (
                  <li
                    key={index}
                    className={style.currencyExchangeSelectItem}
                    onClick={(e) => setSelectFromValue(e.target.outerText)}
                  >
                    {currency}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li
            ref={selectRefToRef}
            className={style.currencyExchangeItem}
            onClick={() => setOpenSelectTo(!openSelectTo)}
          >
            <p className={style.currencyExchangeLabel}>Куда</p>
            <div className={style.currencyExchangeCustomSelect}>
              {selectToValue}
              <SelectArrowSvg
                className={`${openSelectTo ? style.selectArrow : ''}`}
              />
            </div>
            {openSelectTo && (
              <ul className={style.currencyExchangeSelectList}>
                {currencyTypes.map((currency, index) => (
                  <li
                    key={index}
                    className={style.currencyExchangeSelectItem}
                    onClick={(e) => setSelectToValue(e.target.outerText)}
                  >
                    {currency}
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className={style.currencyExchangeItem}>
            <label className={style.currencyExchangeLabel} htmlFor='sum'>
              Сумма
            </label>
            <input
              className={style.currencyExchangeInput}
              type='text'
              value={transferSum}
              onChange={(e) => handleChange(e)}
            />
          </li>
        </ul>
        <div className={style.currencyExchangeSubmitWrapper}>
          <button className={style.currencyExchangeSubmit} type='submit'>
            Обменять
          </button>
        </div>
      </form>
    </section>
  );
};

CurrencyExchangeForm.propTypes = {
  currencyTypes: PropTypes.array,
};
