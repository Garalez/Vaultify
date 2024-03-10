import style from './CustomSelect.module.scss';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export const CustomSelect = ({ userAccountsSort, selectData }) => {
  const itemAnimation = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -10 },
  };

  return (
    <motion.ul
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial='hidden'
      animate='visible'
      exit='hidden'
      transition={{ duration: 0.2 }}
      className={style.list}>
      {selectData.map((item, index) => (
        <motion.li
          key={index}
          variants={itemAnimation}
          className={style.accountSortSelectItem}
          onClick={(e) => userAccountsSort(e)}>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};

CustomSelect.propTypes = {
  selectValue: PropTypes.string,
  userAccountsSort: PropTypes.func,
  selectData: PropTypes.array,
};
