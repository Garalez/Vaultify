/* eslint-disable max-len */
import style from './Transactions.module.scss';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { filterDatesByCurrentWeek } from '../../../../../utils/formatDate';
import { sortArrayByDate } from '../../../../../utils/sortArrayByDate';
import { ReactComponent as BackArrowSvg } from '../../../../../assets/svg/whiteBackArrow.svg';
import Table from './Table';
import LineGraph from './LineGraph';
import DoughnutGraph from './DoughnutGraph';
import FundsTransfer from './FundsTransfer';
import { useLanguage } from '../../../../../hooks/useLanguage';
import Langs from '../../../../../locales/translations.json';

export const Transactions = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();
  const accountId = searchParams.get('id');
  const userData = useSelector((state) => state.userAccounts);
  const accountInfo = userData.info.accounts.find((account) => account.account === accountId);

  return (
    accountInfo && (
      <section className={style.transactions}>
        <div className={style.transactionsTitleWrapper}>
          <h1
            className={
              style.transactionsTitle
            }>{`${Langs[language].app.transactions[0]} №${accountInfo.account}`}</h1>
          <button className={style.transactionsBtn} onClick={() => navigate(-1)}>
            <BackArrowSvg /> {Langs[language].app.transactions[1]}
          </button>
        </div>
        <div className={style.infoWrapper}>
          <div className={style.transactionsGraphs}>
            <LineGraph accountInfo={accountInfo} />
            <DoughnutGraph
              accountInfo={{
                balance: accountInfo.balance,
                ...filterDatesByCurrentWeek(accountInfo),
              }}
            />
          </div>
          <Table
            accountTransactions={sortArrayByDate(accountInfo.transactions)}
            account={accountInfo.account}
          />
        </div>
        {accountInfo.account && <FundsTransfer accountInfo={accountInfo} />}
      </section>
    )
  );
};
