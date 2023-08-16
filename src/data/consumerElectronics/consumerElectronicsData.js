import camerasImg from '../../assets/home/section2/cameras.png';
import headphones2Img from '../../assets/home/section2/headphones2.png';
import gamingSetImg from '../../assets/home/section2/gaming-set.png';
import laptopsAndPCImg from '../../assets/home/section2/laptops&pc.png';
import smartphones2Img from '../../assets/home/section2/smartphones2.png';
import electricKettleImg from '../../assets/home/section2/electric-kettle.png';
import smartWatches2Img from '../../assets/home/section2/smart-watches2.png';
import kitchenMixerImg from '../../assets/home/section2/kitchen-mixer.png';

import filledStar from '../../assets/mobile-accessories/filled-star.svg';
import emptyStar from '../../assets/mobile-accessories/empty-star.svg';

import headphone1 from '../../assets/consumerElectronics/headphones1.png';
import headphone2 from '../../assets/consumerElectronics/headphones2.png';
import headphone3 from '../../assets/consumerElectronics/headphones3.jpg';
import headphone4 from '../../assets/consumerElectronics/headphones4.jpg';
import headphone5 from '../../assets/consumerElectronics/headphones5.jpg';
import headphone6 from '../../assets/consumerElectronics/headphones6.jpg';
import headphone7 from '../../assets/consumerElectronics/headphones7.png';
import headphone8 from '../../assets/consumerElectronics/headphones8.jpg';

import smartphone1 from '../../assets/consumerElectronics/smartphone1.jpg';
import smartphone2 from '../../assets/consumerElectronics/smartphone2.jpg';
import smartphone3 from '../../assets/consumerElectronics/smartphone3.jpg';
import smartphone4 from '../../assets/consumerElectronics/smartphone4.jpg';
import smartphone5 from '../../assets/consumerElectronics/smartphone5.jpg';

import camera1 from '../../assets/consumerElectronics/camera1.jpg';
import camera2 from '../../assets/consumerElectronics/camera2.png';
import camera3 from '../../assets/consumerElectronics/camera3.png';
import camera4 from '../../assets/consumerElectronics/camera4.jpg';
import camera5 from '../../assets/consumerElectronics/camera5.jpg';
import camera6 from '../../assets/consumerElectronics/camera6.png';

import laptop1 from '../../assets/consumerElectronics/pc1.jpg';
import laptop2 from '../../assets/consumerElectronics/pc2.jpg';
import laptop3 from '../../assets/consumerElectronics/pc3.jpg';
import laptop4 from '../../assets/consumerElectronics/pc4.jpg';
import laptop5 from '../../assets/consumerElectronics/pc5.jpg';
import laptop6 from '../../assets/consumerElectronics/pc6.jpg';

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

// Categories
export const consumerElectronicsCategories = [
  {
    id: 1,
    title: 'Smart watches',
    price: '19',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    images: [smartWatches2Img],
  },
  {
    id: 2,
    title: 'Cameras',
    price: '89',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    images: [camerasImg],
  },
  {
    id: 3,
    title: 'Headphones',
    price: '10',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    images: [headphones2Img],
  },
  {
    id: 4,
    title: 'Smart watches',
    price: '90',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    images: [kitchenMixerImg],
  },
  {
    id: 5,
    title: 'Gaming set',
    price: '35',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    images: [gamingSetImg],
  },
  {
    id: 6,
    title: 'Laptops & PC',
    price: '340',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    images: [laptopsAndPCImg],
  },
  {
    id: 7,
    title: 'Smartphones',
    price: '19',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    images: [smartphones2Img],
  },
  {
    id: 8,
    title: 'Gaming set',
    price: '35',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    images: [gamingSetImg],
  },

  {
    id: 9,
    title: 'Smart watches',
    price: '19',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    images: [smartWatches2Img],
  },
  {
    id: 10,
    title: 'Cameras',
    price: '89',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    images: [camerasImg],
  },
  {
    id: 11,
    title: 'Headphones',
    price: '10',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    images: [headphones2Img],
  },
  {
    id: 12,
    title: 'Smart watches',
    price: '90',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    images: [kitchenMixerImg],
  },
  {
    id: 13,
    title: 'Gaming set',
    price: '35',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    images: [gamingSetImg],
  },
  {
    id: 14,
    title: 'Laptops & PC',
    price: '340',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    images: [laptopsAndPCImg],
  },
  {
    id: 15,
    title: 'Smartphones',
    price: '19',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    images: [smartphones2Img],
  },
  {
    id: 16,
    title: 'Laptops & PC',
    price: '240',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
    images: [laptopsAndPCImg],
  },
];

//Products
export const headphones = [
  {
    id: '1head',
    title: 'Headphone 1',
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
    path: 'headphones',
    images: [
      headphone1,
      headphone2,
      headphone3,
      headphone4,
      headphone5,
      headphone6,
    ],
  },
  {
    id: '2head',
    title: 'Headphone 2',
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
    path: 'headphones',
    images: [
      headphone2,
      headphone1,
      headphone3,
      headphone4,
      headphone5,
      headphone8,
    ],
  },
  {
    id: '3head',
    title: 'Headphone 3',
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
    path: 'headphones',
    images: [
      headphone3,
      headphone1,
      headphone2,
      headphone3,
      headphone4,
      headphone7,
    ],
  },
  {
    id: '4head',
    title: 'Headphone 4',
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
    path: 'headphones',
    images: [
      headphone4,
      headphone3,
      headphone2,
      headphone1,
      headphone3,
      headphone7,
    ],
  },
  {
    id: '5head',
    title: 'Headphone 5',
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
    path: 'headphones',
    images: [
      headphone5,
      headphone6,
      headphone7,
      headphone8,
      headphone2,
      headphone1,
    ],
  },
  {
    id: '6head',
    title: 'Headphone 6',
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
    path: 'headphones',
    images: [
      headphone6,
      headphone4,
      headphone5,
      headphone2,
      headphone1,
      headphone3,
    ],
  },
  {
    id: '7head',
    title: 'Headphone 7',
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
    path: 'headphones',
    images: [
      headphone7,
      headphone6,
      headphone5,
      headphone8,
      headphone2,
      headphone1,
    ],
  },
  {
    id: '8head',
    title: 'Headphone 8',
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
    path: 'headphones',
    images: [
      headphone8,
      headphone2,
      headphone3,
      headphone4,
      headphone5,
      headphone7,
    ],
  },
];

export const gamingSet = [
  {
    id: '1gaming',
    title: 'gamingSet 1',
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
    path: 'gaming-set',
    images: [
      headphone8,
      headphone2,
      headphone3,
      headphone4,
      headphone5,
      headphone6,
    ],
  },
  {
    id: '2gaming',
    title: 'gamingSet 2',
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
    path: 'gaming-set',
    images: [
      headphone2,
      headphone1,
      headphone3,
      headphone4,
      headphone5,
      headphone8,
    ],
  },
  {
    id: '3gaming',
    title: 'gamingSet 3',
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
    path: 'gaming-set',
    images: [
      headphone3,
      headphone1,
      headphone2,
      headphone3,
      headphone4,
      headphone7,
    ],
  },
  {
    id: '4gaming',
    title: 'gamingSet 4',
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
    path: 'gaming-set',
    images: [
      headphone4,
      headphone3,
      headphone2,
      headphone1,
      headphone3,
      headphone7,
    ],
  },
  {
    id: '5gaming',
    title: 'gamingSet 5',
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
    path: 'gaming-set',
    images: [
      headphone5,
      headphone6,
      headphone7,
      headphone8,
      headphone2,
      headphone1,
    ],
  },
  {
    id: '6gaming',
    title: 'gamingSet 6',
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
    path: 'gaming-set',
    images: [
      headphone6,
      headphone4,
      headphone5,
      headphone2,
      headphone1,
      headphone3,
    ],
  },
  {
    id: '7gaming',
    title: 'gamingSet 7',
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
    path: 'gaming-set',
    images: [
      headphone7,
      headphone6,
      headphone5,
      headphone8,
      headphone2,
      headphone1,
    ],
  },
  {
    id: '8gaming',
    title: 'gamingSet 8',
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
    path: 'gaming-set',
    images: [
      headphone2,
      headphone4,
      headphone3,
      headphone4,
      headphone5,
      headphone7,
    ],
  },
];

export const smartphones = [
  {
    id: '1phone',
    title: 'smartphone 1',
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
    path: 'smartphones',
    images: [
      smartphone1,
      smartphone2,
      smartphone3,
      smartphone4,
      smartphone5,
      smartphone2,
    ],
  },
  {
    id: '2phone',
    title: 'smartphone 2',
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
    path: 'smartphones',
    images: [
      smartphone2,
      smartphone1,
      smartphone3,
      smartphone4,
      smartphone5,
      smartphone2,
    ],
  },
  {
    id: '3phone',
    title: 'smartphone 3',
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
    path: 'smartphones',
    images: [
      smartphone3,
      smartphone1,
      smartphone2,
      smartphone5,
      smartphone3,
      smartphone2,
    ],
  },
  {
    id: '4phone',
    title: 'smartphone 4',
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
    path: 'smartphones',
    images: [
      smartphone4,
      smartphone5,
      smartphone3,
      smartphone1,
      smartphone2,
      smartphone3,
    ],
  },
  {
    id: '5phone',
    title: 'smartphone 5',
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
    path: 'smartphones',
    images: [
      smartphone5,
      smartphone4,
      smartphone1,
      smartphone3,
      smartphone2,
      smartphone1,
    ],
  },
  {
    id: '6phone',
    title: 'smartphone 6',
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
    path: 'smartphones',
    images: [
      smartphone2,
      smartphone3,
      smartphone4,
      smartphone5,
      smartphone2,
      smartphone1,
    ],
  },
  {
    id: '7phone',
    title: 'smartphone 7',
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
    path: 'smartphones',
    images: [
      smartphone1,
      smartphone3,
      smartphone2,
      smartphone3,
      smartphone4,
      smartphone5,
    ],
  },
  {
    id: '8phone',
    title: 'smartphone 8',
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
    path: 'smartphones',
    images: [
      smartphone5,
      smartphone3,
      smartphone1,
      smartphone2,
      smartphone3,
      smartphone4,
    ],
  },
];

export const cameras = [
  {
    id: '1camera',
    title: 'camera 1',
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
    path: 'cameras',
    images: [camera1, camera2, camera3, camera4, camera5, camera6],
  },
  {
    id: '2camera',
    title: 'camera 2',
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
    path: 'cameras',
    images: [camera2, camera1, camera3, camera4, camera5, camera6],
  },
  {
    id: '3camera',
    title: 'camera 3',
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
    path: 'cameras',
    images: [camera3, camera2, camera1, camera4, camera5, camera6],
  },
  {
    id: '4camera',
    title: 'camera 4',
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
    path: 'cameras',
    images: [camera4, camera3, camera2, camera1, camera5, camera6],
  },
  {
    id: '5camera',
    title: 'camera 5',
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
    path: 'cameras',
    images: [camera5, camera4, camera3, camera2, camera1, camera6],
  },
  {
    id: '6camera',
    title: 'camera 6',
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
    path: 'cameras',
    images: [camera6, camera1, camera2, camera3, camera4, camera5],
  },
  {
    id: '7camera',
    title: 'camera 7',
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
    path: 'cameras',
    images: [camera1, camera2, camera3, camera4, camera6, camera5],
  },
  {
    id: '8camera',
    title: 'camera 8',
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
    path: 'cameras',
    images: [camera2, camera1, camera2, camera3, camera6, camera5],
  },
];

export const pcLaptop = [
  {
    id: '1laptop',
    title: 'laptop 1',
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
    path: 'laptops-&-pc',
    images: [laptop1, laptop2, laptop3, laptop4, laptop5, laptop6],
  },
  {
    id: '2laptop',
    title: 'laptop 2',
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
    path: 'laptops-&-pc',
    images: [laptop2, laptop3, laptop4, laptop5, laptop6, laptop1],
  },
  {
    id: '3laptop',
    title: 'laptop 3',
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
    path: 'laptops-&-pc',
    images: [laptop3, laptop1, laptop2, laptop3, laptop5, laptop6],
  },
  {
    id: '4laptop',
    title: 'laptop 4',
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
    path: 'laptops-&-pc',
    images: [laptop4, laptop5, laptop6, laptop2, laptop3, laptop1],
  },
  {
    id: '5laptop',
    title: 'laptop 5',
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
    path: 'laptops-&-pc',
    images: [laptop5, laptop4, laptop3, laptop2, laptop1, laptop6],
  },
  {
    id: '6laptop',
    title: 'laptop 6',
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
    path: 'laptops-&-pc',
    images: [laptop6, laptop5, laptop4, laptop3, laptop2, laptop1],
  },
  {
    id: '7laptop',
    title: 'laptop 7',
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
    path: 'laptops-&-pc',
    images: [laptop2, laptop1, laptop2, laptop3, laptop4, laptop5],
  },
  {
    id: '8laptop',
    title: 'laptop 8',
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
    path: 'laptops-&-pc',
    images: [laptop1, laptop2, laptop3, laptop4, laptop5, laptop6],
  },
];
