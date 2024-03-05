import style from './PlatformLinks.module.scss';

export const PlatformLinks = () => (
  <ul className={style.linksList}>
    <li className={style.linksItem}>
      <a className={style.link} href='#platformInfo'>
        О компании
      </a>
    </li>
    <li className={style.linksItem}>
      <a className={style.link} href='#reviews'>
        Отзывы
      </a>
    </li>
    <li className={style.linksItem}>
      <a className={style.link} href='#registration'>
        Регистрация
      </a>
    </li>
    <li className={style.linksItem}>
      <a className={style.link} href='#profit'>
        Почему с нами выгодно?
      </a>
    </li>
  </ul>
);
