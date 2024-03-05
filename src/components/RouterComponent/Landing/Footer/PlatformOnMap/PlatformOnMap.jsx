import style from './PlatformOnMap.module.scss';

export const PlatformOnMap = () => (
  <div className={style.mapWrapper}>
    <iframe
      className={style.map}
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190.59370185867596!2d36.235812121034826!3d50.005488894728316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a1a351ec50b7%3A0xf31099d8ce836cfe!2z0KHRgtC10LrQu9GP0YjQutCw!5e0!3m2!1sru!2sua!4v1678528563559!5m2!1sru!2sua'
      width='420'
      height='200'
      allowFullScreen=''
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    ></iframe>
  </div>
);
