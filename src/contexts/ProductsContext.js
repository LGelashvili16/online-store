import { createContext, useContext, useState } from 'react';

import { products } from '../data/mobileAccessories/mobileAccessoriesData';

const moibleAccessoryContext = createContext();

export const useMobileAccessoryProducts = () => {
  return useContext(moibleAccessoryContext);
};

export const ProductsProvider = ({ children }) => {
  const [mobileAccessoryProducts, setMobileAccessoryProducts] =
    useState(products);

  return (
    <moibleAccessoryContext.Provider
      value={[mobileAccessoryProducts, setMobileAccessoryProducts]}
    >
      {children}
    </moibleAccessoryContext.Provider>
  );
};
