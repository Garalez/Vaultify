import style from './Main.module.scss';
import PlatformInfo from './PlatformInfo';
import Profit from './Profit';
import Registration from './Registration';
import Reviews from './Reviews';

export const Main = () => (
  <main className={style.wrapper}>
    <PlatformInfo />
    <Profit />
    <Registration />
    <Reviews />
  </main>
);
