/* eslint-disable max-len */
import style from './Header.module.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as LogoSvg } from '../../../../assets/svg/violetLogo.svg';
import Navigation from './Navigation';

export const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const signIn = useSelector((state) => state.signIn.status);
  const token = localStorage.getItem('bearer');

  useEffect(() => {
    !!token && token !== 'undefined' ? setLoggedIn(true) : setLoggedIn(false);
  }, [signIn]);

  return (
    <header>
      <div className={style.headerWrapper}>
        <div className={style.contentWrapper}>
          <a href='/' className={style.logoLink}>
            <LogoSvg className={style.logo} />
            <span className={style.logoName}>Vaultify</span>
          </a>
          {loggedIn ? <Navigation /> : <></>}
        </div>
      </div>
    </header>
  );
};
