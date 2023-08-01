import React, { useContext, useState } from 'react';

import { currencyData, headerFlags } from '../data/header/headerData';
import { language } from '../data/footer/footerData';

const currencyDataContext = React.createContext();
const shipToContext = React.createContext();
const ChangeLanguageContext = React.createContext();

export function useCurrencyData() {
  return useContext(currencyDataContext);
}

export function useShipToData() {
  return useContext(shipToContext);
}

export function useChangeLanguage() {
  return useContext(ChangeLanguageContext);
}

export const GlobalStateProvider = ({ children }) => {
  const [currentCurrency, setCurrentCurrency] = useState(currencyData[0].name);
  const [currentShipTo, setCurrentShipTo] = useState(headerFlags[0].flag);
  const [currentLang, setCurrentLang] = useState(language[0]);

  return (
    <currencyDataContext.Provider value={[currentCurrency, setCurrentCurrency]}>
      <shipToContext.Provider value={[currentShipTo, setCurrentShipTo]}>
        <ChangeLanguageContext.Provider value={[currentLang, setCurrentLang]}>
          {children}
        </ChangeLanguageContext.Provider>
      </shipToContext.Provider>
    </currencyDataContext.Provider>
  );
};
