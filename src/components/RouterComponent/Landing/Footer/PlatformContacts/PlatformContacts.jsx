/* eslint-disable max-len */
import style from './PlatformContacts.module.scss';
import { ReactComponent as TelegramLogoSvg } from '../../../../../assets/svg/telegramSocial.svg';
import { ReactComponent as TwitterLogoSvg } from '../../../../../assets/svg/twitterSocial.svg';
import { useLanguage } from '../../../../../hooks/useLanguage';
import Langs from '../../../../../locales/translations.json';

export const PlatformContacts = () => {
  const { language } = useLanguage();
  return (
    <div className={style.contactsWrapper}>
      <ul className={style.contactsList}>
        <li className={style.contactsItem}>{Langs[language].footer.platformContacts[0]}</li>
        <li className={style.contactsItem}>+3 8093 123-45-67</li>
        <li className={style.contactsItem}>vaultify@gmail.com</li>
        <li className={style.contactsItem}>
          <span>{Langs[language].footer.platformContacts[1]}</span>
          <span className={style.contactsStreet}>{Langs[language].footer.platformContacts[2]}</span> 10
        </li>
      </ul>
      <ul className={style.contactsSocialList}>
        <li className={style.contactsSocialItem}>
          <a href='https://desktop.telegram.org/' aria-label='Ссылка на наш телеграм'>
            <TelegramLogoSvg className={style.contactsSocial} />
          </a>
        </li>
        <li className={style.contactsSocialItem}>
          <a href='https://twitter.com/?lang=ru' aria-label='Ссылка на наш твитер'>
            <TwitterLogoSvg className={style.contactsSocial} />
          </a>
        </li>
      </ul>
    </div>
  );
};
