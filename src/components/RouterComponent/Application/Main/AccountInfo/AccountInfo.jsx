/* eslint-disable max-len */
import style from './AccountInfo.module.scss';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userAccountsRequestAsync } from '../../../../../store/accountsRequest/accountsRequestActions';
import { ReactComponent as ArrowSvg } from '../../../../../assets/svg/whiteCustomSelectArrow.svg';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';
import { createNewUserAccount } from '../../../../../utils/createNewUserAccount';
import { Preloader } from '../../../../../UI/Preloader/Preloader';
import MyAccounts from './MyAccounts';
import CustomSelect from './CustomSelect';

export const AccountInfo = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userAccounts);
  const [toggleSelect, setToggleSelect] = useState(false);
  const [selectValue, setSelectValue] = useState('дате');
  const domNodeRef = useOutsideClick(() => setToggleSelect(false));

  useEffect(() => {
    dispatch(userAccountsRequestAsync());
  }, []);

  const userAccountsSort = (e) => {
    const sortSelect = e.target.outerText;

    userData.info.accounts.sort((a, b) => {
      if (sortSelect === 'Номеру счёта') {
        return +a.account > +b.account ? -1 : 1;
      }

      if (sortSelect === 'Балансу') return a.balance > b.balance ? -1 : 1;

      if (sortSelect === 'Дате') {
        return new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : 1;
      }

      if (sortSelect === 'Последней транзакции') {
        const firstTransactionDateToCompare =
          a.transactions.length > 0 ? a.transactions[0].date : 0;
        const secondTransactionDateToCompare =
          b.transactions.length > 0 ? b.transactions[0].date : 0;

        return new Date(firstTransactionDateToCompare).getTime() >
          new Date(secondTransactionDateToCompare).getTime() ? -1 : 1;
      }
    });

    setSelectValue(sortSelect);
    setToggleSelect(false);
  };

  const createNewAccount = () => {
    createNewUserAccount();
    dispatch(userAccountsRequestAsync());
  };

  const selectData = ['Номеру счёта', 'Балансу', 'Дате', 'Последней транзакции'];

  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  return userData.status === 'loading' ? (
    <div className={style.preloaderWrapper}>
      <Preloader color='white' />
    </div>
  ) : (
    <section className={style.account}>
      <div className={style.accountWrapper}>
        <div className={style.accountTitleWrapper}>
          <h1 className={style.accountTitle}>
            Здравствуйте, {capitalizeFirstLetter(userData.info?.userName)}!
          </h1>
          <button onClick={() => createNewAccount()} className={style.accountBtn}>
            Открыть новый счет
          </button>
        </div>
        <div className={style.accountInfoWrapper}>
          <p className={style.accountSubtitle}>Мои счета</p>
          <div ref={domNodeRef} className={style.accountSortWrapper}>
            <div
              className={style.accountSortTextWrapper}
              onClick={() => setToggleSelect(!toggleSelect)}>
              <p className={style.accountSortText}>Сортировка:</p>
              <div className={style.accountSort}>
                {`По ${selectValue.toLowerCase()}`}{' '}
                <ArrowSvg className={toggleSelect ? style.activeSelect : ''} />
              </div>
            </div>
            {toggleSelect && (
              <ul className={style.accountSortSelectList}>
                {selectData.map((item, index) => (
                  <CustomSelect
                    key={index}
                    data={item}
                    userAccountsSort={userAccountsSort}
                    selectValue={selectValue}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
        <ul className={style.accountList}>
          {userData.info?.accounts.map((account) => (
            <MyAccounts key={account.account} account={account} />
          ))}
        </ul>
      </div>
    </section>
  );
};
