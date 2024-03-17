import { useLanguage } from '../../hooks/useLanguage';
import style from './LocaleButtons.module.scss';

export const LocaleButtons = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={style.localeOverlay}>
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
    </div>
  );
};
