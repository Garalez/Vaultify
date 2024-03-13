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
import { useLanguage } from '../../../../../hooks/useLanguage';
import Langs from '../../../../../locales/translations.json';

export const CurrencyExchange = () => {
  const dispatch = useDispatch();
  const { language } = useLanguage();
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
          <h2 className={style.exchangeTitle}>{Langs[language].app.exchange[0]}</h2>
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
