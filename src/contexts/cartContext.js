import { createContext, useContext, useState } from 'react';

const cartContext = createContext();

export const useCart = () => {
  return useContext(cartContext);
};

export const CartStateProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={[cart, setCart]}>
      {children}
    </cartContext.Provider>
  );
};
