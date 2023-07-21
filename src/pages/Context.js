import React, { useContext, useState } from 'react';

import {
  category,
  brands,
  features,
  condition,
} from '../data/mobileAccessories/mobileAccessoriesData';

const FilterProductsContext = React.createContext();

export function useFilterProducts() {
  return useContext(FilterProductsContext);
}

export const GlobalStateProvider = ({ children }) => {
  const [filterProducts, setFilterProducts] = useState({
    category: category,
    brands: brands,
    features: features,
    condition: condition,
  });

  return (
    <FilterProductsContext.Provider value={[filterProducts, setFilterProducts]}>
      {children}
    </FilterProductsContext.Provider>
  );
};
