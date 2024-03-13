/* eslint-disable max-len */
import style from './CurrencyExchangeInfo.module.scss';
import { useEffect, useMemo, useState } from 'react';
import { ReactComponent as UpArrowSvg } from '../../../../../../assets/svg/upGreenArrow.svg';
import { ReactComponent as DownArrowSvg } from '../../../../../../assets/svg/downRedArrow.svg';
import { useLanguage } from '../../../../../../hooks/useLanguage';
import Langs from '../../../../../../locales/translations.json';

export const CurrencyExchangeInfo = () => {
  const { language } = useLanguage();
  const [currencyFeed, setCurrencyFeed] = useState([]);
  const ws = useMemo(() => new WebSocket('wss://c-money.glitch.me/currency-feed'), []);

  useEffect(() => {
    ws.onopen = () => {
      console.log('WebSocket connection opened');
    };

    ws.onmessage = (e) => {
      setCurrencyFeed((state) => {
        const newCurrencyFeedArr = [...state, JSON.parse(e.data)];
        if (newCurrencyFeedArr.length > 7) newCurrencyFeedArr.splice(0, 1);

        return newCurrencyFeedArr;
      });
    };

    ws.onerror = (error) => {
      console.log('WebSocket error: ' + error.message);
    };
    ws.onclose = () => {
      console.log('WebSocket closed');
    };

    return () => {
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, [ws]);

  return (
    <section className={style.rate}>
      <h3 className={style.rateTitle}>{Langs[language].app.exchange[1]}</h3>
      <ul className={style.rateList}>
        {currencyFeed.map((item, index) => (
          <li key={index} className={style.rateItem}>
            <p className={style.rateName}>{`${item.from}/${item.to}`}</p>
            <div className={style.rateUnderlineWrapper}>
              <div className={style.rateUnderline} />
            </div>
            <div className={style.rateRatio}>
              <p className={style.rateRatioNumber}>
                {`${item.change === 1 ? '+' : '-'}${item.rate}`}
              </p>
              <div className={style.rateRatioImgWrapper}>
                {item.change === 1 ? <UpArrowSvg /> : <DownArrowSvg />}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
