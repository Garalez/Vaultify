/* eslint-disable max-len */
import style from './FundsTransfer.module.scss';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { accountTransferFundsRequestAsync } from '../../../../../../store/accountTransferFunds/accountTransferFundsActions';
import { userAccountsRequestAsync } from '../../../../../../store/accountsRequest/accountsRequestActions';
import { useLanguage } from '../../../../../../hooks/useLanguage';
import Langs from '../../../../../../locales/translations.json';
import { RingLoader } from 'react-spinners';

export const FundsTransfer = ({ accountInfo, userData }) => {
  const dispatch = useDispatch();
  const { language } = useLanguage();
  const transferResponse = useSelector((state) => state.accountTransferFunds);

  const [transactionData, setTransactionData] = useState({
    account: '',
    sum: '',
  });

  const [displayErrorMassage, setDisplayErrorMassage] = useState({
    account: false,
    sum: false,
  });

  useEffect(() => {
    if (transferResponse.status === 'loaded') {
      setTransactionData({
        account: '',
        sum: '',
      });

      dispatch(userAccountsRequestAsync());
    }
  }, [transferResponse]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTransactionData({
      ...transactionData,
      [name]: value,
    });

    setDisplayErrorMassage({
      ...displayErrorMassage,
      [name]: !value,
    });
  };

  const transferSubmit = (e) => {
    e.preventDefault();

    const accountNumberFrom = accountInfo.account;
    const accountNumberTo = transactionData.account;
    const transferAmount = transactionData.sum;

    setDisplayErrorMassage({
      account: !transactionData.account,
      sum: !transactionData.sum,
    });

    const isToTransferAccountUsers = userData.info.accounts.find(
      (account) => account.account === accountNumberTo
    );

    if (
      isToTransferAccountUsers &&
      transactionData.account &&
      transactionData.sum &&
      +transactionData.sum <= +accountInfo.balance
    ) {
      dispatch(
        accountTransferFundsRequestAsync({
          from: accountNumberFrom,
          to: accountNumberTo,
          amount: transferAmount,
        })
      );
    } else if (!isToTransferAccountUsers) {
      setDisplayErrorMassage({
        ...displayErrorMassage,
        account: true,
      });
    } else if (+transactionData.sum > +accountInfo.balance) {
      setDisplayErrorMassage({
        ...displayErrorMassage,
        sum: true,
      });
    }
  };

  return (
    <section className={style.transfer}>
      <h2 className={style.transferTitle}>{Langs[language].app.transactions[18]}</h2>
      <form className={style.transferForm} action='' onSubmit={(e) => transferSubmit(e)}>
        <ul className={style.transferList}>
          <li className={style.transferItem}>
            <label className={style.transferLabel} htmlFor='account'>
              {Langs[language].app.transactions[19]}
            </label>
            <input
              className={style.transferInput}
              type='text'
              id='account'
              name='account'
              onChange={(e) => handleChange(e)}
              value={transactionData.account}
            />
            {displayErrorMassage.account || transferResponse.error === 'Invalid account to' ? (
              <p className={style.authInputError}>{Langs[language].app.transactions[20]}</p>
            ) : (
              <></>
            )}
          </li>
          <li className={style.transferItem}>
            <label className={style.transferLabel} htmlFor='sum'>
              {Langs[language].app.transactions[21]}
            </label>
            <input
              className={style.transferInput}
              type='text'
              id='sum'
              name='sum'
              onChange={(e) => handleChange(e)}
              value={transactionData.sum}
            />
            {displayErrorMassage.sum && (
              <p className={style.authInputError}>{Langs[language].app.transactions[22]}</p>
            )}
          </li>
          <li className={style.transferItem}>
            <button
              className={style.transferFormSubmit}
              type='submit'
              disabled={transferResponse.status === 'loading'}>
              {transferResponse.status === 'loading' ? (
                <RingLoader color='#210B36' size={50} speedMultiplier={0.8} />
              ) : (
                Langs[language].app.transactions[23]
              )}
            </button>
          </li>
        </ul>
      </form>
    </section>
  );
};

FundsTransfer.propTypes = {
  accountInfo: PropTypes.object,
  userData: PropTypes.object,
};
