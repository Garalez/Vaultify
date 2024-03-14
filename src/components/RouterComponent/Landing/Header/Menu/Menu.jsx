import { useLanguage } from '../../../../../hooks/useLanguage';
import Langs from '../../../../../locales/translations.json';
import style from './Menu.module.scss';

export const Menu = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <nav className={style.navigate}>
      <ul className={style.list}>
        <li className={style.item}>
          <a className={style.link} href='#profit'>
            {Langs[language].header.menu[0]}
          </a>
        </li>
        <li className={style.item}>
          <a className={style.link} href='#registration'>
            {Langs[language].header.menu[1]}
          </a>
        </li>
        <li className={style.item}>
          <a className={style.link} href='#reviews'>
            {Langs[language].header.menu[2]}
          </a>
        </li>
        <li className={style.item}>
          <div className={style.localeWrapper}>
            <button
              className={`${style.localeButton} ${language === 'UA' && style.localeActive}`}
              onClick={() => setLanguage('UA')}>
              UA
            </button>
            <button
              className={`${style.localeButton} ${language === 'RU' && style.localeActive}`}
              onClick={() => setLanguage('RU')}>
              RU
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};
