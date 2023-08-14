import { createContext, useContext, useState } from 'react';

import { products } from '../data/mobileAccessories/mobileAccessoriesData';
import {
  kitchenDishes,
  sofaChair,
  softChairs,
} from '../data/homeAndOutdoor/homeAndOutdoorData';

const moibleAccessoryContext = createContext();
const homeOutdoorContext = createContext();

export const useMobileAccessoryProducts = () => {
  return useContext(moibleAccessoryContext);
};

export const useHomeOutdoor = () => {
  return useContext(homeOutdoorContext);
};

export const ProductsProvider = ({ children }) => {
  const [mobileAccessoryProducts, setMobileAccessoryProducts] =
    useState(products);

  const [softChairsProduct, setSoftChairsProduct] = useState(softChairs);
  const [sofaChairProduct, setSofaChairProduct] = useState(sofaChair);
  const [kitchenDishesProduct, setKitchenDishesProduct] =
    useState(kitchenDishes);
  const [smartWatches, setSmartWatches] = useState();
  const [kitchenMixer, setKitchenMixer] = useState();
  const [blenders, setBlenders] = useState();
  const [homeAppliance, setHomeAppliance] = useState();
  const [coffeeMaker, setCoffeeMaker] = useState();

  return (
    <homeOutdoorContext.Provider
      value={[softChairsProduct, sofaChairProduct, kitchenDishesProduct]}
    >
      <moibleAccessoryContext.Provider
        value={[mobileAccessoryProducts, setMobileAccessoryProducts]}
      >
        {children}
      </moibleAccessoryContext.Provider>
    </homeOutdoorContext.Provider>
  );
};
