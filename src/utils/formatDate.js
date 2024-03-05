export const formatDateToNumeric = (date) => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  return new Intl.DateTimeFormat('ru', options).format(new Date(date));
};

const monthsRegex = /[\w | г.]/g;

const formatDateToMonths = (date) => {
  let string = new Intl.DateTimeFormat('ru', { dateStyle: 'medium' })
    .format(new Date(date))
    .replace(monthsRegex, '');

  if (string === 'мая') {
    string = 'май';
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};

const sumOfPeriod = (transactions, account) => {
  let income = 0;
  let expenses = 0;

  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].to === account) {
      income += +transactions[i].amount;
    } else {
      expenses += +transactions[i].amount;
    }
  }

  return { income: +income.toFixed(2), expenses: +expenses.toFixed(2) };
};

export const filterDatesByCurrentWeek = (arr) => {
  const transactions = arr.transactions;
  const now = new Date();
  const numDay = now.getDate();

  const weekDaysCount = 7;
  const monthDaysCount = 30;
  const yearDaysCount = 365;

  const week = new Date().setDate(numDay - weekDaysCount);
  const month = new Date().setDate(numDay - monthDaysCount);
  const year = new Date().setDate(numDay - yearDaysCount);

  const yearTransactions = transactions.filter((elem) => new Date(elem.date).getTime() >= +year);

  const monthTransactions = yearTransactions.filter(
    (elem) => new Date(elem.date).getTime() >= +month
  );

  const weekTransactions = monthTransactions.filter(
    (elem) => new Date(elem.date).getTime() >= +week
  );

  return {
    week: sumOfPeriod(weekTransactions, arr.account),
    month: sumOfPeriod(monthTransactions, arr.account),
    year: sumOfPeriod(yearTransactions, arr.account),
  };
};

export const monthlyIncome = (arr) => {
  const tmpArray = [];
  const now = new Date();
  const numDay = now.getDate();
  const halfYearDaysCount = 183;
  const halfYear = new Date().setDate(numDay - halfYearDaysCount);

  const halfYearTransactions = arr.transactions.filter(
    (elem) => new Date(elem.date).getTime() >= +halfYear
  );
  const monthlyIncomeData = {};

  halfYearTransactions.forEach((item) => {
    const date = new Date(item.date);

    if (tmpArray.indexOf(date.getMonth()) === -1) {
      tmpArray.push(date.getMonth());
      monthlyIncomeData[formatDateToMonths(date)] = 0;
    }
    if (arr.account === item.to) {
      monthlyIncomeData[formatDateToMonths(date)] += item.amount;
    } else {
      monthlyIncomeData[formatDateToMonths(date)] -= item.amount;
    }
  });

  return monthlyIncomeData;
};
