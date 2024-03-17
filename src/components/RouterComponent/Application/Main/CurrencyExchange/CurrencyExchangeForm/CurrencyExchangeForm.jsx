/* eslint-disable max-len */
import style from './CurrencyExchangeForm.module.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ReactComponent as SelectArrowSvg } from '../../../../../../assets/svg/blackCustomSelectArrow.svg';
import { useOutsideClick } from '../../../../../../hooks/useOutsideClick';
import { currencyExchangeRequestAsync } from '../../../../../../store/currencyExchange/currencyExchangeActions';
import { CurrencyExchangeCustomSelector } from './CurrencyExchangeCustomSelector/CurrencyExchangeCustomSelector';
import { AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../../../../../hooks/useLanguage';
import Langs from '../../../../../../locales/translations.json';
import { RingLoader } from 'react-spinners';

export const CurrencyExchangeForm = ({ currencyTypes }) => {
  const { language } = useLanguage();
  const dispatch = useDispatch();
  const exchangeRequest = useSelector((state) => state.currencyExchange);

  const [openSelectFrom, setOpenSelectFrom] = useState(false);
  const [openSelectTo, setOpenSelectTo] = useState(false);

  const [selectFromValue, setSelectFromValue] = useState(currencyTypes[0]);
  const [selectToValue, setSelectToValue] = useState(currencyTypes[1]);

  const [transferSum, setTransferSum] = useState('');

  const selectRefFromRef = useOutsideClick(() => setOpenSelectFrom(false));
  const selectRefToRef = useOutsideClick(() => setOpenSelectTo(false));

  const handleChange = (e) => {
    const regexNonDigitAndDot = /[^\d.]/g;

    setTransferSum(e.target.value.replace(regexNonDigitAndDot, ''));
  };

  const formSubmit = (e) => {
    e.preventDefault();

    dispatch(currencyExchangeRequestAsync(selectFromValue, selectToValue, Number(transferSum)));
    setTransferSum('');
  };

  const handleSelectFrom = (e) => {
    setSelectFromValue(e.target.outerText);
    setOpenSelectFrom(false);
  };

  const handleSelectTo = (e) => {
    setSelectToValue(e.target.outerText);
    setOpenSelectTo(false);
  };

  const filteredFromCurrencyTypes = currencyTypes.filter((item) => item !== selectFromValue);
  const filteredToCurrencyTypes = currencyTypes.filter((item) => item !== selectToValue);

  return (
    <section className={style.currencyExchange}>
      <h3 className={style.currencyExchangeTitle}>{Langs[language].app.exchange[2]}</h3>
      <form className={style.currencyExchangeForm} action='' onSubmit={(e) => formSubmit(e)}>
        <ul className={style.currencyExchangeList}>
          <li
            ref={selectRefFromRef}
            onClick={() => setOpenSelectFrom(!openSelectFrom)}
            className={style.currencyExchangeItem}>
            <p className={style.currencyExchangeLabel}>{Langs[language].app.exchange[3]}</p>
            <div
              className={`${style.currencyExchangeCustomSelect} ${
                openSelectFrom ? style.customSelectActive : ''
              }`}>
              {selectFromValue}
              <SelectArrowSvg className={`${openSelectFrom ? style.selectArrow : ''}`} />
            </div>
            <AnimatePresence>
              {openSelectFrom && (
                <CurrencyExchangeCustomSelector
                  currencyTypes={filteredToCurrencyTypes}
                  onClick={handleSelectFrom}
                />
              )}
            </AnimatePresence>
          </li>
          <li
            ref={selectRefToRef}
            className={style.currencyExchangeItem}
            onClick={() => setOpenSelectTo(!openSelectTo)}>
            <p className={style.currencyExchangeLabel}>{Langs[language].app.exchange[4]}</p>
            <div
              className={`${style.currencyExchangeCustomSelect} ${
                openSelectTo ? style.customSelectActive : ''
              }`}>
              {selectToValue}
              <SelectArrowSvg className={`${openSelectTo ? style.selectArrow : ''}`} />
            </div>
            <AnimatePresence>
              {openSelectTo && (
                <CurrencyExchangeCustomSelector
                  currencyTypes={filteredFromCurrencyTypes}
                  onClick={handleSelectTo}
                />
              )}
            </AnimatePresence>
          </li>
          <li className={style.currencyExchangeItem}>
            <label className={style.currencyExchangeLabel} htmlFor='sum'>
              {Langs[language].app.exchange[5]}
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
          {exchangeRequest.status === 'rejected' && (
            <p className={style.currencyExchangeError}>{Langs[language].app.exchange[8]}</p>
          )}
          <button
            className={style.currencyExchangeSubmit}
            type='submit'
            disabled={exchangeRequest.status === 'loading'}>
            {exchangeRequest.status === 'loading' ? (
              <RingLoader color='#210B36' size={25} speedMultiplier={0.8} />
            ) : (
              Langs[language].app.exchange[6]
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

CurrencyExchangeForm.propTypes = {
  currencyTypes: PropTypes.array,
};
