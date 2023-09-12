import React, { useContext, useEffect, useState } from 'react';

import { currencyData, headerFlags } from '../data/header/headerData';
import { language } from '../data/footer/footerData';

const currencyDataContext = React.createContext();
const shipToContext = React.createContext();
const ChangeLanguageContext = React.createContext();
const SearchedContext = React.createContext();

export function useCurrencyData() {
  return useContext(currencyDataContext);
}

export function useShipToData() {
  return useContext(shipToContext);
}

export function useChangeLanguage() {
  return useContext(ChangeLanguageContext);
}

export function useSearched() {
  return useContext(SearchedContext);
}

export const GlobalStateProvider = ({ children }) => {
  const localStorageCurrency =
    JSON.parse(window.localStorage.getItem('currentCurrency')) === null
      ? currencyData[0].name
      : JSON.parse(window.localStorage.getItem('currentCurrency'));

  const localStorageShipping =
    JSON.parse(window.localStorage.getItem('currentShipTo')) === null
      ? headerFlags[0].flag
      : JSON.parse(window.localStorage.getItem('currentShipTo'));

  const localStorageLang =
    JSON.parse(window.localStorage.getItem('currentLang')) === null
      ? language[0]
      : JSON.parse(window.localStorage.getItem('currentLang'));

  const [currentCurrency, setCurrentCurrency] = useState(localStorageCurrency);
  const [currentShipTo, setCurrentShipTo] = useState(localStorageShipping);
  const [currentLang, setCurrentLang] = useState(localStorageLang);
  const [searched, setSearched] = useState([]);
  // const [currentCurrency, setCurrentCurrency] = useState(currencyData[0].name);
  // const [currentShipTo, setCurrentShipTo] = useState(headerFlags[0].flag);
  // const [currentLang, setCurrentLang] = useState(language[0]);

  useEffect(() => {
    window.localStorage.setItem(
      'currentCurrency',
      JSON.stringify(currentCurrency)
    );

    window.localStorage.setItem('currentShipTo', JSON.stringify(currentShipTo));

    window.localStorage.setItem('currentLang', JSON.stringify(currentLang));
  }, [currentCurrency, currentShipTo, currentLang]);

  useEffect(() => {
    const currencyData = JSON.parse(
      window.localStorage.getItem('currentCurrency')
    );
    if (currencyData !== null) setCurrentCurrency(currencyData);

    const shipToData = JSON.parse(window.localStorage.getItem('currentShipTo'));
    if (shipToData !== null) setCurrentShipTo(shipToData);

    const langData = JSON.parse(window.localStorage.getItem('currentLang'));
    if (langData !== null) setCurrentLang(langData);
  }, []);

  return (
    <currencyDataContext.Provider value={[currentCurrency, setCurrentCurrency]}>
      <shipToContext.Provider value={[currentShipTo, setCurrentShipTo]}>
        <ChangeLanguageContext.Provider value={[currentLang, setCurrentLang]}>
          <SearchedContext.Provider value={[searched, setSearched]}>
            {children}
          </SearchedContext.Provider>
        </ChangeLanguageContext.Provider>
      </shipToContext.Provider>
    </currencyDataContext.Provider>
  );
};
