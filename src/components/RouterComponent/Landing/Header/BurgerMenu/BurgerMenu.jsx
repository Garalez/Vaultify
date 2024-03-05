/* eslint-disable max-len */
import style from './BurgerMenu.module.scss';
import { useState } from 'react';
import { ReactComponent as LogoSvg } from '../../../../../assets/svg/violetLogo.svg';
import { ReactComponent as CloseSvg } from '../../../../../assets/svg/burgerMenuClose.svg';
import { ReactComponent as BurgerLogoSvg } from '../../../../../assets/svg/burgerMenu.svg';

export const BurgerMenu = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  return (
    <>
      {!isBurgerActive ? (
        <button
          className={style.burgerBtnOpen}
          aria-label='Открыть меню сайта'
          onClick={() => setIsBurgerActive(!isBurgerActive)}>
          <BurgerLogoSvg />
        </button>
      ) : (
        <div className={style.burgerWrapper}>
          <a
            href='/application'
            className={style.logoWrapper}
            aria-label='Логотип и переход к приложению'>
            <LogoSvg className={style.logo} />
            <span className={style.logoText}>Vaultify</span>
          </a>
          <nav className={style.navigate}>
            <ul className={style.list}>
              <li className={style.item}>
                <a href='#profit'>Почему с нами выгодно?</a>
              </li>
              <li className={style.item}>
                <a href='#registration'>Регистрация</a>
              </li>
              <li className={style.item}>
                <a href='#reviews'>Отзывы</a>
              </li>
            </ul>
          </nav>
          <div className={style.underline} />
          <button
            className={style.burgerBtnClose}
            aria-label='Закрыть меню сайта'
            onClick={() => setIsBurgerActive(!isBurgerActive)}>
            <CloseSvg />
          </button>
        </div>
      )}
    </>
  );
};
