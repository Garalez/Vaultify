/* eslint-disable max-len */
import style from './BurgerMenu.module.scss';
import { useState } from 'react';
import { ReactComponent as LogoSvg } from '../../../../../assets/svg/violetLogo.svg';
import { ReactComponent as CloseSvg } from '../../../../../assets/svg/burgerMenuClose.svg';
import { ReactComponent as BurgerLogoSvg } from '../../../../../assets/svg/burgerMenu.svg';
import { useLanguage } from '../../../../../hooks/useLanguage';
import Langs from '../../../../../locales/translations.json';

export const BurgerMenu = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const { language } = useLanguage();

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
                <a href='#profit'>{Langs[language].header.menu[0]}</a>
              </li>
              <li className={style.item}>
                <a href='#registration'>{Langs[language].header.menu[1]}</a>
              </li>
              <li className={style.item}>
                <a href='#reviews'>{Langs[language].header.menu[2]}</a>
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
