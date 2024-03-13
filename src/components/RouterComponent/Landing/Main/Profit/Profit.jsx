/* eslint-disable max-len */
import style from './Profit.module.scss';
import { ReactComponent as EqualizerSvg } from '../../../../../assets/svg/profitEqualizer.svg';
import { ReactComponent as LockSvg } from '../../../../../assets/svg/profitLock.svg';
import { ReactComponent as AutoRenewSvg } from '../../../../../assets/svg/profitAutorenew.svg';
import { ReactComponent as CheckCircleSvg } from '../../../../../assets/svg/profitCheckCircle.svg';
import { useLanguage } from '../../../../../hooks/useLanguage';
import Langs from '../../../../../locales/translations.json';

export const Profit = () => {
  const { language } = useLanguage();

  return (
    <section className={style.profitSection} id='profit'>
      <h2 className={style.profitTitle}>{Langs[language].main.profit[0]}</h2>
      <ul className={style.profitList}>
        <li className={`${style.profitItem} ${style.profitStatistics}`}>
          <div className={style.subtitleWrapper}>
            <EqualizerSvg />
            <p className={style.subtitle}>{Langs[language].main.profit[1]}</p>
          </div>
          <p className={`${style.profitText} ${style.profitStatisticsText}`}>
            {Langs[language].main.profit[2]}
          </p>
          <div className={style.profitUnderline}></div>
        </li>
        <li className={`${style.profitItem} ${style.profitSafety}`}>
          <div className={style.subtitleWrapper}>
            <LockSvg />
            <p className={style.subtitle}>{Langs[language].main.profit[3]}</p>
          </div>
          <p className={`${style.profitText} ${style.profitSafetyText}`}>
            {Langs[language].main.profit[4]}
          </p>
          <div className={style.profitUnderline}></div>
        </li>
        <li className={`${style.profitItem} ${style.profitExchange}`}>
          <div className={style.subtitleWrapper}>
            <AutoRenewSvg />
            <p className={style.subtitle}>{Langs[language].main.profit[5]}</p>
          </div>
          <p className={`${style.profitText} ${style.profitExchangeText}`}>
            {Langs[language].main.profit[6]}
          </p>
          <div className={style.profitUnderline}></div>
        </li>
        <li className={`${style.profitItem} ${style.profitComfort}`}>
          <div className={style.subtitleWrapper}>
            <CheckCircleSvg />
            <p className={style.subtitle}>{Langs[language].main.profit[7]}</p>
          </div>
          <p className={`${style.profitText} ${style.profitComfortText}`}>
            {Langs[language].main.profit[8]}
          </p>
          <div className={style.profitUnderline}></div>
        </li>
      </ul>
    </section>
  );
};
