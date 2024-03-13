import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const LocaleContext = createContext(null);

export const LocaleProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'UA');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LocaleContext.Provider value={{ language, setLanguage }}>
      {children}
    </LocaleContext.Provider>
  );
};

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
