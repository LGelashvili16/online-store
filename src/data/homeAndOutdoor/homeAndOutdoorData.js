import iphone12Img from '../../assets/mobile-accessories/iphone12.png';
import xiaomiImg from '../../assets/mobile-accessories/xiaomi.png';
import xiaomiTabletImg from '../../assets/mobile-accessories/xiaomi-tablet.png';
import laptopImg from '../../assets/mobile-accessories/laptop.png';
import smartwatchImg from '../../assets/mobile-accessories/smartwatch.png';
import headphonesImg from '../../assets/mobile-accessories/headphones.png';

import bagImg from '../../assets/mobile-accessories/bag.png';
import jacketImg from '../../assets/mobile-accessories/jacket.png';

import filledStar from '../../assets/mobile-accessories/filled-star.svg';
import emptyStar from '../../assets/mobile-accessories/empty-star.svg';

// Home Outdoor
import softChairsImg from '../../assets/home/section2/soft-chairs.png';
import sofaChairImg from '../../assets/home/section2/sofa&chair.png';
import kitcheDishesImg from '../../assets/home/section2/kitchen-dishes.png';
import smartWatches2Img from '../../assets/home/section2/smart-watches2.png';
import kitchenMixerImg from '../../assets/home/section2/kitchen-mixer.png';
import blendersImg from '../../assets/home/section2/blenders.png';
import homeApplianceImg from '../../assets/home/section2/home-appliance.png';
import coffeeMakerImg from '../../assets/home/section2/coffee-maker.png';

// Soft Chair
import softChair1 from '../../assets/homeAndOutdoor/softChair1.jpeg';
import softChair2 from '../../assets/homeAndOutdoor/softChair2.jpeg';
import softChair3 from '../../assets/homeAndOutdoor/softChair3.jpeg';
import softChair4 from '../../assets/homeAndOutdoor/softChair4.jpeg';
import softChair5 from '../../assets/homeAndOutdoor/softChair5.jpeg';
import softChair6 from '../../assets/homeAndOutdoor/softChair6.jpeg';
import softChair7 from '../../assets/homeAndOutdoor/softChair7.jpeg';
import softChair8 from '../../assets/homeAndOutdoor/softChair8.jpeg';

// Sofa Chair
import sofaChair1 from '../../assets/homeAndOutdoor/sofaChair1.jpeg';
import sofaChair2 from '../../assets/homeAndOutdoor/sofaChair2.jpeg';
import sofaChair3 from '../../assets/homeAndOutdoor/sofaChair3.jpeg';
import sofaChair4 from '../../assets/homeAndOutdoor/sofaChair4.jpeg';
import sofaChair5 from '../../assets/homeAndOutdoor/sofaChair5.jpeg';
import sofaChair6 from '../../assets/homeAndOutdoor/sofaChair6.jpeg';
import sofaChair7 from '../../assets/homeAndOutdoor/sofaChair7.jpeg';
import sofaChair8 from '../../assets/homeAndOutdoor/sofaChair8.jpeg';

// Kitchen dishes
import kitchenDishes1 from '../../assets/homeAndOutdoor/kitchenDishes1.jpg';
import kitchenDishes2 from '../../assets/homeAndOutdoor/kitchenDishes2.jpg';
import kitchenDishes3 from '../../assets/homeAndOutdoor/kitchenDishes3.jpg';
import kitchenDishes4 from '../../assets/homeAndOutdoor/kitchenDishes4.jpg';
import kitchenDishes5 from '../../assets/homeAndOutdoor/kitchenDishes5.jpg';
import kitchenDishes6 from '../../assets/homeAndOutdoor/kitchenDishes6.jpg';
import kitchenDishes7 from '../../assets/homeAndOutdoor/kitchenDishes7.jpg';
import kitchenDishes8 from '../../assets/homeAndOutdoor/kitchenDishes8.jpg';

export const category = [
  'Mobile accessory',
  'Electronics',
  'Smartphones',
  'Modern tech',
  'Art',
  'Books',
  'Cameras',
  'Cell phones',
  'Travel',
  'Video games',
  'Jewelery',
  'Handmade',
  'Garden & outdoor',
  'Tools',
  'Toys',
];

export const brands = [
  { id: 1, name: 'Samsung', check: false },
  { id: 2, name: 'Apple', check: false },
  { id: 3, name: 'Huawei', check: false },
  { id: 4, name: 'Pocco', check: false },
  { id: 5, name: 'Lenovo', check: false },
  { id: 6, name: 'Google', check: false },
  { id: 7, name: 'Xiaomi', check: false },
  { id: 8, name: 'Sony', check: false },
  { id: 9, name: 'LG', check: false },
];

export const features = [
  { id: 11, name: 'Metallic', checked: false },
  { id: 22, name: 'Plastic cover', checked: false },
  { id: 33, name: '8GB Ram', checked: false },
  { id: 44, name: 'Super power', checked: false },
  { id: 55, name: 'Large memory', checked: false },
  { id: 66, name: 'Wireless charger', checked: false },
  { id: 77, name: 'Fast charge', checked: false },
];

export const condition = ['Any', 'Refurbished', 'Brand new', 'Old items'];

export const ratings = [
  {
    id: 111,
    name: '5 star',
    checked: false,
    stars: 5,
    filledImg: filledStar,
    emptyImg: emptyStar,
  },
  {
    id: 222,
    name: '4 star',
    checked: false,
    stars: 4,
    filledImg: filledStar,
    emptyImg: emptyStar,
  },
  {
    id: 333,
    name: '3 star',
    checked: false,
    stars: 3,
    filledImg: filledStar,
    emptyImg: emptyStar,
  },
  {
    id: 444,
    name: '2 star',
    checked: false,
    stars: 2,
    filledImg: filledStar,
    emptyImg: emptyStar,
  },
];

export const homeOutdoorCategories = [
  { title: 'Soft chairs' },
  { title: 'Sofa & chair' },
  { title: 'Kitchen dishes' },
  { title: 'Smart watches' },
  { title: 'Kitchen mixer' },
  { title: 'Blenders' },
  { title: 'Home appliance' },
  { title: 'Coffee maker' },

  { title: 'Soft chairs' },
  { title: 'Sofa & chair' },
  { title: 'Kitchen dishes' },
  { title: 'Smart watches' },
  { title: 'Kitchen mixer' },
  { title: 'Blenders' },
  { title: 'Home appliance' },
  { title: 'Coffee maker' },
];

export const homeOutdoorProducts = [
  {
    id: 1,
    title: 'Soft chairs',
    price: '19',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      softChairsImg,
      softChairsImg,
      softChairsImg,
      softChairsImg,
      softChairsImg,
      softChairsImg,
    ],
  },
  {
    id: 2,
    title: 'Sofa & chair',
    price: '19',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      sofaChairImg,
      sofaChairImg,
      sofaChairImg,
      sofaChairImg,
      sofaChairImg,
      sofaChairImg,
    ],
  },
  {
    id: 3,
    title: 'Kitchen dishes',
    price: '19',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      kitcheDishesImg,
      kitcheDishesImg,
      kitcheDishesImg,
      kitcheDishesImg,
      kitcheDishesImg,
      kitcheDishesImg,
    ],
  },
  {
    id: 4,
    title: 'Smart watches',
    price: '19',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      smartWatches2Img,
      smartWatches2Img,
      smartWatches2Img,
      smartWatches2Img,
      smartWatches2Img,
      smartWatches2Img,
    ],
  },
  {
    id: 5,
    title: 'Kitchen mixer',
    price: '100',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      kitchenMixerImg,
      kitchenMixerImg,
      kitchenMixerImg,
      kitchenMixerImg,
      kitchenMixerImg,
      kitchenMixerImg,
    ],
  },
  {
    id: 6,
    title: 'Blenders',
    price: '39',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      blendersImg,
      blendersImg,
      blendersImg,
      blendersImg,
      blendersImg,
      blendersImg,
    ],
  },
  {
    id: 7,
    title: 'Home appliance',
    price: '19',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      homeApplianceImg,
      homeApplianceImg,
      homeApplianceImg,
      homeApplianceImg,
      homeApplianceImg,
      homeApplianceImg,
    ],
  },
  {
    id: 8,
    title: 'Coffee maker',
    price: '10',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      coffeeMakerImg,
      coffeeMakerImg,
      coffeeMakerImg,
      coffeeMakerImg,
      coffeeMakerImg,
      coffeeMakerImg,
    ],
  },

  {
    id: 9,
    title: 'Soft chairs',
    price: '19',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      softChairsImg,
      softChairsImg,
      softChairsImg,
      softChairsImg,
      softChairsImg,
      softChairsImg,
    ],
  },
  {
    id: 10,
    title: 'Sofa & chair',
    price: '19',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      softChairsImg,
      softChairsImg,
      softChairsImg,
      softChairsImg,
      softChairsImg,
      softChairsImg,
    ],
  },
  {
    id: 11,
    title: 'Kitchen dishes',
    price: '19',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      kitcheDishesImg,
      kitcheDishesImg,
      kitcheDishesImg,
      kitcheDishesImg,
      kitcheDishesImg,
      kitcheDishesImg,
    ],
  },
  {
    id: 12,
    title: 'Smart watches',
    price: '19',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      smartWatches2Img,
      smartWatches2Img,
      smartWatches2Img,
      smartWatches2Img,
      smartWatches2Img,
      smartWatches2Img,
    ],
  },
  {
    id: 13,
    title: 'Kitchen mixer',
    price: '100',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      kitchenMixerImg,
      kitchenMixerImg,
      kitchenMixerImg,
      kitchenMixerImg,
      kitchenMixerImg,
      kitchenMixerImg,
    ],
  },
  {
    id: 14,
    title: 'Blenders',
    price: '39',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      blendersImg,
      blendersImg,
      blendersImg,
      blendersImg,
      blendersImg,
      blendersImg,
    ],
  },
  {
    id: 15,
    title: 'Home appliance',
    price: '19',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      homeApplianceImg,
      homeApplianceImg,
      homeApplianceImg,
      homeApplianceImg,
      homeApplianceImg,
      homeApplianceImg,
    ],
  },
  {
    id: 16,
    title: 'Coffee maker',
    price: '10',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      coffeeMakerImg,
      coffeeMakerImg,
      coffeeMakerImg,
      coffeeMakerImg,
      coffeeMakerImg,
      coffeeMakerImg,
    ],
  },
];

export const softChairs = [
  {
    id: 1,
    title: 'Soft chair 1',
    price: '$19',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      softChair1,
      softChair2,
      softChair8,
      softChair4,
      softChair5,
      softChair6,
    ],
  },
  {
    id: 2,
    title: 'Soft chair 2',
    price: '$25',
    oldPrice: '',
    rating: 4,
    orders: 150,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      softChair2,
      softChair1,
      softChair8,
      softChair4,
      softChair5,
      softChair6,
    ],
  },
  {
    id: 3,
    title: 'Soft chair 3',
    price: '$39',
    oldPrice: '',
    rating: 4,
    orders: 174,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      softChair8,
      softChair1,
      softChair2,
      softChair4,
      softChair5,
      softChair7,
    ],
  },
  {
    id: 4,
    title: 'Soft chair 4',
    price: '$49',
    oldPrice: '',
    rating: 4,
    orders: 104,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      softChair4,
      softChair5,
      softChair1,
      softChair2,
      softChair8,
      softChair7,
    ],
  },
  {
    id: 5,
    title: 'Soft chair 5',
    price: '$39',
    oldPrice: '',
    rating: 4,
    orders: 174,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      softChair5,
      softChair4,
      softChair8,
      softChair7,
      softChair1,
      softChair8,
    ],
  },
  {
    id: 6,
    title: 'Soft chair 6',
    price: '$29',
    oldPrice: '',
    rating: 4,
    orders: 118,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      softChair6,
      softChair1,
      softChair2,
      softChair8,
      softChair5,
      softChair8,
    ],
  },
  {
    id: 7,
    title: 'Soft chair 7',
    price: '$42',
    oldPrice: '',
    rating: 4,
    orders: 151,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      softChair7,
      softChair8,
      softChair4,
      softChair1,
      softChair2,
      softChair4,
    ],
  },
  {
    id: 8,
    title: 'Soft chair 8',
    price: '$39',
    oldPrice: '',
    rating: 4,
    orders: 174,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      softChair8,
      softChair2,
      softChair6,
      softChair4,
      softChair5,
      softChair7,
    ],
  },
];

export const sofaChair = [
  {
    id: 1,
    title: 'Sofa chair 1',
    price: '$19',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      sofaChair1,
      sofaChair5,
      sofaChair3,
      sofaChair4,
      sofaChair5,
      sofaChair6,
    ],
  },
  {
    id: 2,
    title: 'Sofa chair 2',
    price: '$25',
    oldPrice: '',
    rating: 4,
    orders: 150,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      sofaChair5,
      sofaChair1,
      sofaChair3,
      sofaChair4,
      sofaChair5,
      sofaChair6,
    ],
  },
  {
    id: 3,
    title: 'Sofa chair 3',
    price: '$39',
    oldPrice: '',
    rating: 4,
    orders: 174,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      sofaChair3,
      sofaChair1,
      sofaChair3,
      sofaChair4,
      sofaChair5,
      sofaChair6,
    ],
  },
  {
    id: 4,
    title: 'Sofa chair 4',
    price: '$49',
    oldPrice: '',
    rating: 4,
    orders: 104,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      sofaChair4,
      sofaChair1,
      sofaChair3,
      sofaChair4,
      sofaChair5,
      sofaChair6,
    ],
  },
  {
    id: 5,
    title: 'Sofa chair 5',
    price: '$39',
    oldPrice: '',
    rating: 4,
    orders: 174,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      sofaChair5,
      sofaChair1,
      sofaChair2,
      sofaChair3,
      sofaChair4,
      sofaChair6,
    ],
  },
  {
    id: 6,
    title: 'Sofa chair 6',
    price: '$29',
    oldPrice: '',
    rating: 4,
    orders: 118,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      sofaChair6,
      sofaChair1,
      sofaChair3,
      sofaChair4,
      sofaChair5,
      sofaChair7,
    ],
  },
  {
    id: 7,
    title: 'Sofa chair 7',
    price: '$42',
    oldPrice: '',
    rating: 4,
    orders: 151,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      sofaChair7,
      sofaChair1,
      sofaChair3,
      sofaChair4,
      sofaChair5,
      sofaChair6,
    ],
  },
  {
    id: 8,
    title: 'Sofa chair 8',
    price: '$39',
    oldPrice: '',
    rating: 4,
    orders: 174,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      sofaChair8,
      sofaChair1,
      sofaChair3,
      sofaChair4,
      sofaChair5,
      sofaChair7,
    ],
  },
];

export const kitchenDishes = [
  {
    id: 1,
    title: 'Kitchen dishes 1',
    price: '$19',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      kitchenDishes1,
      kitchenDishes2,
      kitchenDishes3,
      kitchenDishes4,
      kitchenDishes5,
      kitchenDishes6,
    ],
  },
  {
    id: 2,
    title: 'Kitchen dishes 2',
    price: '$25',
    oldPrice: '',
    rating: 4,
    orders: 150,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      kitchenDishes2,
      kitchenDishes1,
      kitchenDishes3,
      kitchenDishes4,
      kitchenDishes8,
      kitchenDishes7,
    ],
  },
  {
    id: 3,
    title: 'Kitchen dishes 3',
    price: '$39',
    oldPrice: '',
    rating: 4,
    orders: 174,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      kitchenDishes3,
      kitchenDishes1,
      kitchenDishes2,
      kitchenDishes4,
      kitchenDishes5,
      kitchenDishes8,
    ],
  },
  {
    id: 4,
    title: 'Kitchen dishes 4',
    price: '$49',
    oldPrice: '',
    rating: 4,
    orders: 104,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      kitchenDishes4,
      sofaChair1,
      sofaChair3,
      sofaChair4,
      sofaChair5,
      sofaChair6,
    ],
  },
  {
    id: 5,
    title: 'Kitchen dishes 5',
    price: '$39',
    oldPrice: '',
    rating: 4,
    orders: 174,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      sofaChair5,
      sofaChair1,
      sofaChair2,
      sofaChair3,
      sofaChair4,
      sofaChair6,
    ],
  },
  {
    id: 6,
    title: 'Kitchen dishes 6',
    price: '$29',
    oldPrice: '',
    rating: 4,
    orders: 118,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      sofaChair6,
      sofaChair1,
      sofaChair3,
      sofaChair4,
      sofaChair5,
      sofaChair7,
    ],
  },
  {
    id: 7,
    title: 'Kitchen dishes 7',
    price: '$42',
    oldPrice: '',
    rating: 4,
    orders: 151,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      sofaChair7,
      sofaChair1,
      sofaChair3,
      sofaChair4,
      sofaChair5,
      sofaChair6,
    ],
  },
  {
    id: 8,
    title: 'Kitchen dishes 8',
    price: '$39',
    oldPrice: '',
    rating: 4,
    orders: 174,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    images: [
      sofaChair8,
      sofaChair1,
      sofaChair3,
      sofaChair4,
      sofaChair5,
      sofaChair7,
    ],
  },
];

export const mayAlsoLikeData = [
  {
    image: bagImg,
    price: '$10.30',
    description: 'Solid Backpack blue jeans large size',
  },
  {
    image: smartwatchImg,
    price: '$10.30',
    description: 'T-shirts with multiple color, for men',
  },
  {
    image: jacketImg,
    price: '$10.30',
    description: 'T-shirts with multiple color, for men',
  },
  {
    image: bagImg,
    price: '$10.30',
    description: 'T-shirts with multiple color, for men',
  },
  {
    image: bagImg,
    price: '$10.30',
    description: 'T-shirts with multiple color, for men',
  },
];
