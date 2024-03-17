import { LocaleButtons } from '../../../../../UI/LocaleButtons/LocaleButtons';
import { useLanguage } from '../../../../../hooks/useLanguage';
import Langs from '../../../../../locales/translations.json';
import style from './Menu.module.scss';

export const Menu = () => {
  const { language } = useLanguage();

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
          <LocaleButtons />
        </li>
      </ul>
    </nav>
  );
};
