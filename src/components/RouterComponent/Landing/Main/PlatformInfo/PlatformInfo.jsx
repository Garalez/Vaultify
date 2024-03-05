/* eslint-disable no-irregular-whitespace */
import style from './PlatformInfo.module.scss';
import TransferImg1280 from '../../../../../assets/img/transferLogo1280.png';
import TransferImg1024 from '../../../../../assets/img/transferLogo1024.png';
import TransferImg768 from '../../../../../assets/img/transferLogo768.png';
import useWindowDimensions from '../../../../../hooks/screenViewPort';

export const PlatformInfo = () => {
  const { width } = useWindowDimensions();

  return (
    <section className={style.infoSection} id='platformInfo'>
      <div className={style.textWrapper}>
        <h1 className={style.title}>Платформа Vaultify</h1>
        <p className={style.subtitle}>
          Удобная платформа для хранения счётов, перевода валюты и покупки
          криптовалюты
        </p>
        <a className={style.registrationLink} href='#registration'>
          Зарегистрироваться
        </a>
      </div>
      <div className={style.imageWrapper}>
        <img
          className={style.img}
          src={
            width >= 1025 ?
              TransferImg1280 :
              (width <= 1024) & (width >= 769) ?
              TransferImg1024 :
              TransferImg768
          }
          alt='Transfer logo'
        />
      </div>
      <div className={style.rectangle} />
    </section>
  );
};
