import { createContext, useContext, useEffect, useState } from 'react';

const cartContext = createContext();

export const useCart = () => {
  return useContext(cartContext);
};

export const CartStateProvider = ({ children }) => {
  const localStorageCart =
    JSON.parse(window.localStorage.getItem('cart')) === null
      ? []
      : JSON.parse(window.localStorage.getItem('cart'));

  const [cart, setCart] = useState(localStorageCart);

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem('cart'));
    // if (data === null) setCart([]);
    if (data !== null) setCart(data);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <cartContext.Provider value={[cart, setCart]}>
      {children}
    </cartContext.Provider>
  );
};
