import style from '../AccountInfo.module.scss';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { formatDateToNumeric } from '../../../../../../utils/formatDate';
import { APP_CURRENCY_SIGN } from '../../../../../../utils/appCurrencySign';
import { useLanguage } from '../../../../../../hooks/useLanguage';
import Langs from '../../../../../../locales/translations.json';

export const MyAccounts = ({ account }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  return (
    <li
      className={style.accountItem}
      onClick={() => navigate(`/application/transactions/?id=${account.account}`)}>
      <p className={style.accountNumber}>{account.account}</p>
      <p className={style.accountAmount}>{`${account.balance.toFixed(2)} ${APP_CURRENCY_SIGN}`}</p>
      <div className={style.accountInfo}>
        <div className={style.accountInfoTextWrapper}>
          <p className={style.accountInfoText}>{Langs[language].app.accountInfo[8]}</p>
          <p className={style.accountInfoText}>
            {account.date ? formatDateToNumeric(account.date) : '---'}
          </p>
        </div>
        <div className={style.accountInfoTextWrapper}>
          <p className={style.accountInfoText}>{Langs[language].app.accountInfo[9]}</p>
          <p className={style.accountInfoText}>
            {account.transactions.length > 0 ? formatDateToNumeric(account.transactions[0].date) :
            '---'}
          </p>
        </div>
      </div>
    </li>
  );
};

MyAccounts.propTypes = {
  account: PropTypes.object,
};
