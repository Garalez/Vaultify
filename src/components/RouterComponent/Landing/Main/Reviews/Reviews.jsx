/* eslint-disable max-len */
import style from './Reviews.module.scss';
import { useRef } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as PrevArrowSvg } from '../../../../../assets/svg/reviewsArrowPrev.svg';
import { ReactComponent as NextArrowSvg } from '../../../../../assets/svg/reviewsArrowNext.svg';
import JuliaReviewer from '../../../../../assets/img/JuliaReviewer.png';
import SvetlanaReviewer from '../../../../../assets/img/SvetlanaReviewer.png';
import SergeiReviewer from '../../../../../assets/img/SergeiReviewer.png';
import useWindowDimensions from '../../../../../hooks/screenViewPort';
import { UserReview } from './UserReview/UserReview';
import 'swiper/scss';

export const Reviews = () => {
  const swiperRef = useRef();
  const { width } = useWindowDimensions();
  const reviewsList = [
    {
      name: 'Юлия С',
      photo: JuliaReviewer,
      blockquote:
        '«Очень удобная платформа для открытия мультивалютных счётов»',
    },
    {
      name: 'Светлана Н',
      photo: SvetlanaReviewer,
      blockquote:
        '«Пользуюсь платформой уже больше года, нравится, что можно быстро менять валюту по выгодному курсу»',
    },
    {
      name: 'Сергей А',
      photo: SergeiReviewer,
      blockquote:
        '«Открыл счёт в биткоинах, могу быстро следить за курсом и делать обмен»',
    },
  ];

  return (
    <section className={style.reviewsSection} id='reviews'>
      <h2 className={style.reviewsTitle}>Отзывы наших клиентов</h2>
      <div className={style.swiperWrapper}>
        <Swiper
          modules={[Navigation]}
          loop
          slidesPerView={width > 768 ? 3 : width <= 550 ? 1 : 2}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {reviewsList.map((review, index) => (
            <SwiperSlide className={style.reviewsSwiperSlide} key={index}>
              <UserReview
                name={review.name}
                photo={review.photo}
                blockquote={review.blockquote}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className={style.reviewsBtnPrev}
          aria-label='Перейти к предыдущим отзывам'
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <PrevArrowSvg className={style.reviewsArrowImg} />
        </button>
        <button
          className={style.reviewsBtnNext}
          aria-label='Перейти к следующим отзывам'
          onClick={() => swiperRef.current?.slideNext()}
        >
          <NextArrowSvg className={style.reviewsArrowImg} />
        </button>
      </div>
    </section>
  );
};
