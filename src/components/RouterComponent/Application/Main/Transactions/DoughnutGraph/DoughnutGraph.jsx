/* eslint-disable max-len */
import style from './DoughnutGraph.module.scss';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Chart as ChartJS, Title, ArcElement, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ReactComponent as IncomeSvg } from '../../../../../../assets/svg/doughnutCircleIncome.svg';
import { ReactComponent as ExpensesSvg } from '../../../../../../assets/svg/doughnutCircleExpenses.svg';
import { APP_CURRENCY_SIGN } from '../../../../../../utils/appCurrencySign';

export const DoughnutGraph = ({ accountInfo }) => {
  console.log('accountInfo: ', accountInfo);
  const [graphData, setGraphData] = useState([]);
  const [activeButton, setActiveButton] = useState({});

  useEffect(() => {
    setGraphData([
      accountInfo.week.expenses,
      accountInfo.week.income,
    ]);

    setActiveButton({
      week: true,
      month: false,
      year: false,
    });
  }, [accountInfo]);

  ChartJS.register(Title, ArcElement, Legend, Tooltip);

  const options = {
    cutout: '80%',
    borderRadius: 30,
    rotation: 88,
    spacing: 2,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) =>
            ` ${context.raw === graphData[0] ? 'Расходы' : 'Доходы'}: ${
              context.raw
            } ${APP_CURRENCY_SIGN}`,
        },
      },
    },
  };

  const data = {
    datasets: [
      {
        data: graphData,
        backgroundColor: ['#B865D6', '#4B00CA'],
        borderColor: 'transparent',
      },
    ],
  };

  return (
    <section className={style.graphInfoWrapper}>
      <h2 className={style.graphTitle}>Статистика</h2>
      <div className={style.graphDataWrapper}>
        <ul className={style.graphDateList}>
          <li className={style.graphDateItem}>
            <button
              className={`${style.graphButton} ${
                activeButton.week ? style.graphButtonActive : undefined
              }`}
              onClick={() => {
                setGraphData([
                  accountInfo.week.expenses,
                  accountInfo.week.income,
                ]);
                setActiveButton({
                  week: true,
                  month: false,
                  year: false,
                });
              }}
            >
              Неделя
            </button>
          </li>
          <li className={style.graphDateItem}>
            <button
              className={`${style.graphButton} ${
                activeButton.month ? style.graphButtonActive : undefined
              }`}
              onClick={() => {
                setGraphData([
                  accountInfo.month.expenses,
                  accountInfo.month.income,
                ]);
                setActiveButton({
                  week: false,
                  month: true,
                  year: false,
                });
              }}
            >
              Месяц
            </button>
          </li>
          <li className={style.graphDateItem}>
            <button
              className={`${style.graphButton} ${
                activeButton.year ? style.graphButtonActive : undefined
              }`}
              onClick={() => {
                setGraphData([
                  accountInfo.year.expenses,
                  accountInfo.year.income,
                ]);
                setActiveButton({
                  week: false,
                  month: false,
                  year: true,
                });
              }}
            >
              Год
            </button>
          </li>
        </ul>
        <div className={style.graphWrapper}>
          <Doughnut data={data} options={options} />
        </div>
        <ul className={style.graphBalanceList}>
          <li className={style.graphBalanceItem}>
            <p className={style.graphBalanceItemText}>Баланс</p>
            <p className={style.graphBalanceItemText}>
              <IncomeSvg /> Доходы
            </p>
            <p className={style.graphBalanceItemText}>
              <ExpensesSvg /> Расходы
            </p>
          </li>
          <li className={style.graphBalanceItem}>
            <p
              className={style.graphBalanceItemSum}
            >{`${accountInfo.balance} ${APP_CURRENCY_SIGN}`}</p>
            <p className={style.graphBalanceItemSum}>{`${graphData[1]} ${APP_CURRENCY_SIGN}`}</p>
            <p className={style.graphBalanceItemSum}>{`${graphData[0]} ${APP_CURRENCY_SIGN}`}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

DoughnutGraph.propTypes = {
  accountInfo: PropTypes.object,
};
