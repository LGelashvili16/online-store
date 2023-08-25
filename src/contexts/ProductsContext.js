import { createContext, useContext, useState } from 'react';

import { mayAlsoLikeData } from '../data/mobileAccessories/mobileAccessoriesData';

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
const allProductsContext = createContext();

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

export const useAllProducts = () => {
  return useContext(allProductsContext);
};

export const ProductsProvider = ({ children }) => {
  // Home and outdoor
  const [softChairsProduct] = useState(softChairs);
  const [sofaChairProduct] = useState(sofaChair);
  const [kitchenDishesProduct] = useState(kitchenDishes);
  const [smartWatchesProduct] = useState(smartWatches);
  const [kitchenMixerProduct] = useState(kitchenMixer);
  const [blendersProduct] = useState(blenders);
  const [homeApplianceProduct] = useState(homeAppliance);
  const [coffeeMakerProduct] = useState(coffeeMaker);

  // Consumer electronics
  const [mobileAccessoryProduct] = useState(mobileAccessory);
  const [headphonesProduct] = useState(headphones);
  const [gamingSetProduct] = useState(gamingSet);
  const [smartphonesProduct] = useState(smartphones);
  const [camerasProduct] = useState(cameras);
  const [pcLaptopProduct] = useState(pcLaptop);

  // Recommended
  const [recommendedProducts] = useState(recommended);

  // You may like
  const [youMayLikeProducts] = useState(youMayLikeData);

  // Related products
  const [relatedProducts] = useState(relatedProdutcs);

  // Related products
  const [alsoLikeProducts] = useState(mayAlsoLikeData);

  // All products

  const allProductsUnited = [
    ...softChairsProduct,
    ...sofaChairProduct,
    ...kitchenDishesProduct,
    ...smartWatchesProduct,
    ...kitchenMixerProduct,
    ...blendersProduct,
    ...homeApplianceProduct,
    ...coffeeMakerProduct,
    ...mobileAccessoryProduct,
    ...headphonesProduct,
    ...gamingSetProduct,
    ...smartphonesProduct,
    ...camerasProduct,
    ...pcLaptopProduct,
    ...recommendedProducts,
    ...youMayLikeProducts,
    ...relatedProducts,
    ...alsoLikeProducts,
  ];

  const [allProducts] = useState(allProductsUnited);

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
          <allProductsContext.Provider value={[allProducts]}>
            {children}
          </allProductsContext.Provider>
        </recommendedContext.Provider>
      </consumerElectronicsContext.Provider>
    </homeOutdoorContext.Provider>
  );
};
