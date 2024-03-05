import style from '../Reviews.module.scss';
import PropTypes from 'prop-types';

export const UserReview = ({ name, photo, blockquote }) => (
  <figure className={style.reviewsFigure}>
    <img className={style.reviewsAvatar} src={photo} alt={`фото ${name}`} />
    <figcaption className={style.reviewsName}>{name}</figcaption>
    <blockquote className={style.reviewsBlockqoute}>{blockquote}</blockquote>
  </figure>
);

UserReview.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  blockquote: PropTypes.string.isRequired,
};
