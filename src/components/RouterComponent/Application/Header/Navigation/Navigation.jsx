/* eslint-disable max-len */
import style from './Navigation.module.scss';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ExitSvg } from '../../../../../assets/svg/exitSvg.svg';
import { useLanguage } from '../../../../../hooks/useLanguage';
import Langs from '../../../../../locales/translations.json';

export const Navigation = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleLeaveAccount = () => {
    localStorage.removeItem('bearer');
    location.reload();
  };

  return (
    <nav className={style.navigation}>
      <ul className={style.navList}>
        <li className={style.navItem}>
          <button className={style.navItemButton} onClick={() => navigate('/application/accounts')}>
            {Langs[language].app.nav[0]}
          </button>
        </li>
        <li className={style.navItem}>
          <button className={style.navItemButton} onClick={() => navigate('/application/exchange')}>
            {Langs[language].app.nav[1]}
          </button>
        </li>
        <li className={style.navItem}>
          <button className={style.navItemButton} onClick={() => handleLeaveAccount()}>
            {Langs[language].app.nav[2]} <ExitSvg className={style.navItemExitImg} />
          </button>
        </li>
      </ul>
    </nav>
  );
};
