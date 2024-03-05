import style from '../AccountInfo.module.scss';
import PropTypes from 'prop-types';

export const CustomSelect = ({ data, userAccountsSort, selectValue }) =>
  selectValue.toLowerCase() !== data.toLowerCase() && (
    <li
      className={style.accountSortSelectItem}
      onClick={(e) => userAccountsSort(e)}
    >
      {data}
    </li>
  );

CustomSelect.propTypes = {
  data: PropTypes.string,
  selectValue: PropTypes.string,
  userAccountsSort: PropTypes.func,
};
