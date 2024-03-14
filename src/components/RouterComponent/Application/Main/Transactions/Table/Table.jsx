import style from './Table.module.scss';
import PropTypes from 'prop-types';
import { formatDateToNumeric } from '../../../../../../utils/formatDate';
import { useLanguage } from '../../../../../../hooks/useLanguage';
import Langs from '../../../../../../locales/translations.json';

export const Table = ({ accountTransactions, account }) => {
  const { language } = useLanguage();

  return (
    <section className={style.historyWrapper}>
      <h2 className={style.historyTitle}>{Langs[language].app.transactions[2]}</h2>
      <div className={style.historyTableBackground}>
        <div className={style.historyTableWrapper}>
          <table className={style.historyTable}>
            <thead className={style.historyTableThead}>
              <tr className={style.historyTableRow}>
                <th className={style.historyTableHeading}>{Langs[language].app.transactions[3]}</th>
                <th className={style.historyTableHeading}>{Langs[language].app.transactions[4]}</th>
                <th className={style.historyTableHeading}>{Langs[language].app.transactions[5]}</th>
              </tr>
            </thead>
            <tbody>
              {accountTransactions.map((item, index) => (
                <tr key={index} className={style.historyTableRow}>
                  <td className={style.historyTableCell}>
                    <p className={style.historyTableCellAcc}>
                      {item.from}
                      <span className={style.historyTableCelltooltiptext}>{item.from}</span>
                    </p>
                  </td>
                  <td className={style.historyTableCell}>
                    <p className={item.to !== account ? style.expenses : undefined}>
                      {item.to === account ? `+${item.amount}` : `-${item.amount}`}
                    </p>
                  </td>
                  <td className={style.historyTableCell}>{formatDateToNumeric(item.date)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
Table.propTypes = {
  accountTransactions: PropTypes.array,
  account: PropTypes.string,
};
