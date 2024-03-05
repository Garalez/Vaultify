import style from './Footer.module.scss';
import PlatformContacts from './PlatformContacts';
import PlatformLinks from './PlatformLinks';
import PlatformCopyrights from './PlatformCopyrights';
import PlatformOnMap from './PlatformOnMap';

export const Footer = () => (
  <footer className={style.footer}>
    <div className={style.footerWrapper}>
      <div className={style.footerInfo}>
        <div className={style.footerLinksWrapper}>
          <PlatformCopyrights />
          <PlatformLinks />
        </div>
        <PlatformContacts />
        <PlatformOnMap />
      </div>
      <p className={style.copyrights}>© Galcev Vladislav</p>
    </div>
  </footer>
);
