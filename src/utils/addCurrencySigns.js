export const addCurrencySign = (obj) => {
  const currencySign = {
    AUD: '$',
    BTC: '₿',
    BYR: 'Br',
    CAD: '$',
    CHF: 'Fr',
    CNH: '¥',
    EUR: '€',
    GBP: '£',
    HKD: '$',
    JPY: '¥',
    NZD: '$',
    RUB: '₽',
    UAH: '₴',
    USD: '$',
  };

  return Object.keys(obj).map((currency) => {
    Object.keys(currencySign).map((sign) => {
      if (currency === sign) {
        return (obj[currency].amount = `${obj[currency].amount.toFixed(2)} ${
          currencySign[sign]
        }`);
      }
    });

    return obj[currency];
  });
};
