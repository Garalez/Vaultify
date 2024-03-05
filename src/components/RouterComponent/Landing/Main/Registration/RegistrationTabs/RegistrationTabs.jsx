/* eslint-disable max-len */
import style from '../Registration.module.scss';
import PropTypes from 'prop-types';
import { ReactComponent as ActiveTab1Svg } from '../../../../../../assets/svg/registrationActiveTab1.svg';
import { ReactComponent as ActiveTab2Svg } from '../../../../../../assets/svg/registrationActiveTab2.svg';
import { ReactComponent as ActiveTab3Svg } from '../../../../../../assets/svg/registrationActiveTab3.svg';
import { ReactComponent as InactiveTab1Svg } from '../../../../../../assets/svg/registrationInactiveTab1.svg';
import { ReactComponent as InactiveTab2Svg } from '../../../../../../assets/svg/registrationInactiveTab2.svg';
import { ReactComponent as InactiveTab3Svg } from '../../../../../../assets/svg/registrationInactiveTab3.svg';

export const RegistrationTabs = ({
  switchActiveTab,
  activeTab,
  isTabValid,
}) => (
  <ul className={style.registrationTabsList}>
    <li className={style.registrationTabsItem}>
      <button
        className={style.registrationTabsBtn}
        aria-label='Первая вкладка регистрации'
        onClick={() => switchActiveTab('firstTab')}
      >
        {activeTab.firstTab ? <ActiveTab1Svg /> : <InactiveTab1Svg />}
      </button>
    </li>
    <li className={style.registrationTabsItem}>
      <button
        className={`${style.registrationTabsBtn} ${
          isTabValid.firstTabValid ? style.active : style.inactive
        }`}
        aria-label='Вторая вкладка регистрации'
        disabled={!isTabValid.firstTabValid}
        onClick={() => {
          if (isTabValid.firstTabValid) {
            switchActiveTab('secondTab');
          }
        }}
      >
        {activeTab.secondTab ? <ActiveTab2Svg /> : <InactiveTab2Svg />}
      </button>
    </li>
    <li className={style.registrationTabsItem}>
      <button
        className={`${style.registrationTabsBtn} ${
          isTabValid.secondTabIsValid ? style.active : style.inactive
        }`}
        aria-label='Третья вкладка регистрации'
        disabled={!isTabValid.secondTabIsValid}
        onClick={() => {
          if (isTabValid.secondTabIsValid) {
            switchActiveTab('thirdTab');
          }
        }}
      >
        {activeTab.thirdTab ? <ActiveTab3Svg /> : <InactiveTab3Svg />}
      </button>
    </li>
  </ul>
);

RegistrationTabs.propTypes = {
  switchActiveTab: PropTypes.func,
  activeTab: PropTypes.object,
  isTabValid: PropTypes.object,
};
