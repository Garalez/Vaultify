import style from './LineGraph.module.scss';
import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { APP_CURRENCY_SIGN } from '../../../../../../utils/appCurrencySign';
import { monthlyIncome } from '../../../../../../utils/formatDate';

export const LineGraph = ({ accountInfo }) => {
  console.log('accountInfo: ', accountInfo);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
  );

  Tooltip.positioners.customPosition = function(elements, eventPosition) {
    return {
      x: eventPosition.x,
      y: eventPosition.y,
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        borderJoinStyle: 'round',
      },
    },
    scales: {
      y: {
        border: {
          display: false,
        },
        ticks: {
          padding: 0,
          maxTicksLimit: 5,
          color: '#C6B6D7',
          font: {
            family: 'Nunito',
            weight: 400,
            size: 15,
          },
          callback: (value) => {
            const regex = /\./g;
            return ` ${
              value.toString().match(regex) ? value.toFixed(2) : value
            } ${APP_CURRENCY_SIGN} `;
          },
        },
        grid: {
          color: '#210B36',
        },
      },
      x: {
        ticks: {
          padding: 10,
          color: '#C6B6D7',
          font: {
            family: 'Nunito',
            weight: 400,
            size: 15,
          },
        },
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        position: 'customPosition',
        yAlign: 'bottom',
        callbacks: {
          label: (tooltipItems) =>
            `${tooltipItems.formattedValue} ${APP_CURRENCY_SIGN}`,
          title: () => '',
        },
        bodyFont: {
          family: 'Nunito',
          weight: 700,
          size: 15,
        },
        padding: {
          right: 12,
          top: 4,
          bottom: 4,
          left: 12,
        },
        backgroundColor: '#210B36',
        displayColors: false,
      },
    },
  };

  const data = {
    datasets: [
      {
        data: Object.entries(monthlyIncome(accountInfo)).map(
          ([key, value]) => ({
            x: key,
            y: value,
          })
        ),
        borderColor: '#B865D6',
        backgroundColor: '#392350',
        pointBackgroundColor: '#FFFFFF',
        borderWidth: 5,
        hitRadius: 15,
        pointStyle: 'circle',
        pointHoverRadius: 10,
        radius: 0,
        hoverBorderColor: '#392350',
        hoverRadius: 1,
        hoverBorderWidth: 5,
      },
    ],
  };

  return (
    <div className={style.lineGraphUnderlay}>
      <div className={style.lineGraphWrapper}>
        <div className={style.lineGraphOptions}>
          <div className={style.lineGraphDynamic}>
            <p className={style.lineGraphDynamicText}>Динамика</p>
            <p className={style.lineGraphDynamicYear}>2023 - 2024</p>
          </div>
          <p className={style.lineGraphDynamicDateSelect}>Год</p>
        </div>
        <div className={style.lineGraph}>
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

LineGraph.propTypes = {
  accountInfo: PropTypes.object,
};
