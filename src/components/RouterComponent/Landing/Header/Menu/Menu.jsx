import style from './Menu.module.scss';

export const Menu = () => (
  <nav className={style.navigate}>
    <ul className={style.list}>
      <li className={style.item}>
        <a className={style.link} href='#profit'>Почему с нами выгодно?</a>
      </li>
      <li className={style.item}>
        <a className={style.link} href='#registration'>Регистрация</a>
      </li>
      <li className={style.item}>
        <a className={style.link} href='#reviews'>Отзывы</a>
      </li>
    </ul>
  </nav>
);
