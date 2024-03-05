/* eslint-disable max-len */
import style from './PlatformCopyrights.module.scss';
import { ReactComponent as PlatformLogoSvg } from '../../../../../assets/svg/whiteLogo.svg';

export const PlatformCopyrights = () => (
  <div className={style.copyrightsLogoWrapper}>
    <a
      href='/application'
      aria-label='Логотип и переход к приложению'
      className={style.platformLink}>
      <PlatformLogoSvg className={style.platformLogo} /> <span>Vaultify</span>
    </a>
  </div>
);
