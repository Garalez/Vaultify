import style from './Table.module.scss';
import PropTypes from 'prop-types';
import { formatDateToNumeric } from '../../../../../../utils/formatDate';

export const Table = ({ accountInfo }) => (
  <section className={style.historyWrapper}>
    <h2 className={style.historyTitle}>История переводов</h2>
    <div className={style.historyTableBackground}>
      <div className={style.historyTableWrapper}>
        <table className={style.historyTable}>
          <thead className={style.historyTableThead}>
            <tr className={style.historyTableRow}>
              <th className={style.historyTableHeading}>Счет</th>
              <th className={style.historyTableHeading}>Сумма</th>
              <th className={style.historyTableHeading}>Дата</th>
            </tr>
          </thead>
          <tbody>
            {accountInfo.map((item, index) => (
              <tr key={index} className={style.historyTableRow}>
                <td className={style.historyTableCell}>
                  <p className={style.historyTableCellAcc}>
                    {item.from}
                    <span className={style.historyTableCelltooltiptext}>
                      {item.from}
                    </span>
                  </p>
                </td>
                <td className={style.historyTableCell}>
                  <p
                    className={
                      item.to !== accountInfo.account ?
                      style.expenses : undefined
                    }
                  >
                    {item.to === accountInfo.account ?
                    `+${item.amount}` : `-${item.amount}`}
                  </p>
                </td>
                <td className={style.historyTableCell}>
                  {formatDateToNumeric(item.date)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

Table.propTypes = {
  accountInfo: PropTypes.array,
};
