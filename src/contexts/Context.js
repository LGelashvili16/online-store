import React, { useContext, useState } from 'react';

import { currencyData, headerFlags } from '../data/header/headerData';

import {
  category,
  brands,
  features,
  condition,
} from '../data/mobileAccessories/mobileAccessoriesData';

const currencyDataContext = React.createContext();
const shipToContext = React.createContext();
const FilterProductsContext = React.createContext();

export function useCurrencyData() {
  return useContext(currencyDataContext);
}

export function useShipToData() {
  return useContext(shipToContext);
}

export function useFilterProducts() {
  return useContext(FilterProductsContext);
}

export const GlobalStateProvider = ({ children }) => {
  const [currentCurrency, setCurrentCurrency] = useState(currencyData[0].name);
  const [currentShipTo, setCurrentShipTo] = useState(headerFlags[0].flag);
  const [filterProducts, setFilterProducts] = useState({
    category: category,
    brands: brands,
    features: features,
    condition: condition,
  });

  return (
    <currencyDataContext.Provider value={[currentCurrency, setCurrentCurrency]}>
      <shipToContext.Provider value={[currentShipTo, setCurrentShipTo]}>
        <FilterProductsContext.Provider
          value={[filterProducts, setFilterProducts]}
        >
          {children}
        </FilterProductsContext.Provider>
      </shipToContext.Provider>
    </currencyDataContext.Provider>
  );
};
