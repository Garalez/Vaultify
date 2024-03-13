import { useLanguage } from '../../../../../hooks/useLanguage';
import Langs from '../../../../../locales/translations.json';
import style from './PlatformLinks.module.scss';

export const PlatformLinks = () => {
  const { language } = useLanguage();
  return (
    <ul className={style.linksList}>
      <li className={style.linksItem}>
        <a className={style.link} href='#platformInfo'>
          {Langs[language].footer.platformLinks[0]}
        </a>
      </li>
      <li className={style.linksItem}>
        <a className={style.link} href='#reviews'>
          {Langs[language].footer.platformLinks[1]}
        </a>
      </li>
      <li className={style.linksItem}>
        <a className={style.link} href='#registration'>
          {Langs[language].footer.platformLinks[2]}
        </a>
      </li>
      <li className={style.linksItem}>
        <a className={style.link} href='#profit'>
          {Langs[language].footer.platformLinks[3]}
        </a>
      </li>
    </ul>
  );
};
