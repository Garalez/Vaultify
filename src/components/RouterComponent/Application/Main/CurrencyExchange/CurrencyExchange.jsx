/* eslint-disable max-len */
import style from './CurrencyExchange.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currencyRequestAsync } from '../../../../../store/currencyRequest/currencyRequestActions';
import { currencyTypeRequestAsync } from '../../../../../store/currencyTypeRequest/currencyTypeRequestActions';
import { Preloader } from '../../../../../UI/Preloader/Preloader';
import CurrencyExchangeForm from './CurrencyExchangeForm';
import CurrencyExchangeInfo from './CurrencyExchangeInfo';
import MyCurrencies from './MyCurrencies';

export const CurrencyExchange = () => {
  const dispatch = useDispatch();
  const currencyTypes = useSelector((state) => state.currencyTypes);
  const userCurrencies = useSelector((state) => state.userCurrencies);

  useEffect(() => {
    dispatch(currencyTypeRequestAsync());
    dispatch(currencyRequestAsync());
  }, []);

  return (
    <section className={style.exchange}>
      {(currencyTypes.status === 'loaded') && (userCurrencies.status === 'loaded') ? (
        <>
          <h2 className={style.exchangeTitle}>Обмен валюты</h2>
          <div className={style.exchangeContentWrapper}>
            <CurrencyExchangeInfo />
            <div className={style.accountCurrencies}>
              <CurrencyExchangeForm currencyTypes={currencyTypes.data} />
              <MyCurrencies userCurrencies={userCurrencies.data} />
            </div>
          </div>
        </>
      ) : (
        <Preloader color='white' />
      )}
    </section>
  );
};
