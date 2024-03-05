/* eslint-disable max-len */
import style from './Profit.module.scss';
import { ReactComponent as EqualizerSvg } from '../../../../../assets/svg/profitEqualizer.svg';
import { ReactComponent as LockSvg } from '../../../../../assets/svg/profitLock.svg';
import { ReactComponent as AutoRenewSvg } from '../../../../../assets/svg/profitAutorenew.svg';
import { ReactComponent as CheckCircleSvg } from '../../../../../assets/svg/profitCheckCircle.svg';

export const Profit = () => (
  <section className={style.profitSection} id='profit'>
    <h2 className={style.profitTitle}>Почему с нами выгодно?</h2>
    <ul className={style.profitList}>
      <li className={`${style.profitItem} ${style.profitStatistics}`}>
        <div className={style.subtitleWrapper}>
          <EqualizerSvg />
          <p className={style.subtitle}>Статистика</p>
        </div>
        <p className={`${style.profitText} ${style.profitStatisticsText}`}>
          можно быстро отследить статистику доходов и расходов
        </p>
        <div className={style.profitUnderline}></div>
      </li>
      <li className={`${style.profitItem} ${style.profitSafety}`}>
        <div className={style.subtitleWrapper}>
          <LockSvg />
          <p className={style.subtitle}>Надёжность</p>
        </div>
        <p className={`${style.profitText} ${style.profitSafetyText}`}>
          с нами ваши счета в безопасности
        </p>
        <div className={style.profitUnderline}></div>
      </li>
      <li className={`${style.profitItem} ${style.profitExchange}`}>
        <div className={style.subtitleWrapper}>
          <AutoRenewSvg />
          <p className={style.subtitle}>Обмен валюты</p>
        </div>
        <p className={`${style.profitText} ${style.profitExchangeText}`}>
          обмен валюты по самому выгодному курсу
        </p>
        <div className={style.profitUnderline}></div>
      </li>
      <li className={`${style.profitItem} ${style.profitComfort}`}>
        <div className={style.subtitleWrapper}>
          <CheckCircleSvg />
          <p className={style.subtitle}>Удобство</p>
        </div>
        <p className={`${style.profitText} ${style.profitComfortText}`}>
          удобная платформа для отслежки счётов
        </p>
        <div className={style.profitUnderline}></div>
      </li>
    </ul>
  </section>
);
