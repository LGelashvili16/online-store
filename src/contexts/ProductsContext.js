import { createContext, useContext, useState } from 'react';

import {
  mayAlsoLikeData,
  products,
} from '../data/mobileAccessories/mobileAccessoriesData';
import {
  kitchenDishes,
  sofaChair,
  softChairs,
  smartWatches,
  kitchenMixer,
  blenders,
  homeAppliance,
  coffeeMaker,
} from '../data/homeAndOutdoor/homeAndOutdoorData';

import {
  mobileAccessory,
  cameras,
  gamingSet,
  headphones,
  pcLaptop,
  smartphones,
} from '../data/consumerElectronics/consumerElectronicsData';

import { recommended } from '../data/home/homeData';
import {
  relatedProdutcs,
  youMayLikeData,
} from '../data/productPage/productPage';

const moibleAccessoryContext = createContext();
const homeOutdoorContext = createContext();
const consumerElectronicsContext = createContext();
const recommendedContext = createContext();

export const useMobileAccessoryProducts = () => {
  return useContext(moibleAccessoryContext);
};

export const useHomeOutdoor = () => {
  return useContext(homeOutdoorContext);
};

export const useConsumerElectronics = () => {
  return useContext(consumerElectronicsContext);
};

export const useRecommendedProducts = () => {
  return useContext(recommendedContext);
};

export const ProductsProvider = ({ children }) => {
  // const [mobileAccessoryProducts, setMobileAccessoryProducts] =
  //   useState(products);

  // Home and outdoor
  const [softChairsProduct, setSoftChairsProduct] = useState(softChairs);
  const [sofaChairProduct, setSofaChairProduct] = useState(sofaChair);
  const [kitchenDishesProduct, setKitchenDishesProduct] =
    useState(kitchenDishes);
  const [smartWatchesProduct, setSmartWatchesProduct] = useState(smartWatches);
  const [kitchenMixerProduct, setKitchenMixerProduct] = useState(kitchenMixer);
  const [blendersProduct, setBlendersProduct] = useState(blenders);
  const [homeApplianceProduct, setHomeApplianceProduct] =
    useState(homeAppliance);
  const [coffeeMakerProduct, setCoffeeMakerProduct] = useState(coffeeMaker);

  // Consumer electronics
  const [mobileAccessoryProduct, setMobileAccessoryProduct] =
    useState(mobileAccessory);
  const [headphonesProduct, setHeadphonesProduct] = useState(headphones);
  const [gamingSetProduct, setGamingSetProduct] = useState(gamingSet);
  const [smartphonesProduct, setSmartphonesProduct] = useState(smartphones);
  const [camerasProduct, setCamerasProduct] = useState(cameras);
  const [pcLaptopProduct, setPcLaptopProduct] = useState(pcLaptop);

  // Recommended
  const [recommendedProducts, ,] = useState(recommended);

  // You may like
  const [youMayLikeProducts, ,] = useState(youMayLikeData);

  // Related products
  const [relatedProducts, ,] = useState(relatedProdutcs);

  // Related products
  const [alsoLikeProducts, ,] = useState(mayAlsoLikeData);

  return (
    <homeOutdoorContext.Provider
      value={[
        softChairsProduct,
        sofaChairProduct,
        kitchenDishesProduct,
        smartWatchesProduct,
        kitchenMixerProduct,
        blendersProduct,
        homeApplianceProduct,
        coffeeMakerProduct,
      ]}
    >
      <consumerElectronicsContext.Provider
        value={[
          mobileAccessoryProduct,
          headphonesProduct,
          gamingSetProduct,
          smartphonesProduct,
          camerasProduct,
          pcLaptopProduct,
        ]}
      >
        <recommendedContext.Provider
          value={[
            recommendedProducts,
            youMayLikeProducts,
            relatedProducts,
            alsoLikeProducts,
          ]}
        >
          {/* <moibleAccessoryContext.Provider
            value={[mobileAccessoryProducts, setMobileAccessoryProducts]}
          > */}
          {children}
          {/* </moibleAccessoryContext.Provider> */}
        </recommendedContext.Provider>
      </consumerElectronicsContext.Provider>
    </homeOutdoorContext.Provider>
  );
};
