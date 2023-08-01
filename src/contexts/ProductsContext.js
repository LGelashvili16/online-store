import { createContext, useContext } from 'react';

const moibleAccessoryContext = createContext();

export const useMobileAccessory = () => {
  return useContext(moibleAccessoryContext);
};

export const ProductsProvider = ({ children }) => {
  return (
    <moibleAccessoryContext.Provider>
      {children}
    </moibleAccessoryContext.Provider>
  );
};
