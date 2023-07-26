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

export const products = [
  {
    image: iphone12Img,
    title: 'Canon Camera EOS 2000, Black 10x zoom',
    price: '$998.00',
    oldPrice: '$1128.00',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
  },
  {
    image: xiaomiImg,
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: '$998.00',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
  },
  {
    image: xiaomiTabletImg,
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: '$998.00',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
  },
  {
    image: laptopImg,
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: '$998.00',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
  },
  {
    image: smartwatchImg,
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: '$998.00',
    oldPrice: '$1128.00',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
  },
  {
    image: headphonesImg,
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: '$998.00',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
  },
  {
    image: xiaomiImg,
    title: 'Xiaomi R9',
    price: '$499.00',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
  },
  {
    image: xiaomiTabletImg,
    title: 'Xiaomi Tab F1',
    price: '$549.00',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
  },
  {
    image: iphone12Img,
    title: 'iPhone 12',
    price: '$779.00',
    oldPrice: '$1128.00',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
  },
  {
    image: smartwatchImg,
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: '$998.00',
    oldPrice: '$1128.00',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
  },
  {
    image: laptopImg,
    title: 'Dell XPS 15',
    price: '$1199.00',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
  },
  {
    image: iphone12Img,
    title: 'iPhone 12',
    price: '$779.00',
    oldPrice: '$1128.00',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
  },
  {
    image: iphone12Img,
    title: 'iPhone 13',
    price: '$998.00',
    oldPrice: '$1128.00',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
  },
  {
    image: laptopImg,
    title: 'Dell Inspiron 13',
    price: '$878.00',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
  },
  {
    image: xiaomiImg,
    title: 'Black Shark 5',
    price: '$1009.00',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
  },
  {
    image: smartwatchImg,
    title: 'Apple Watch',
    price: '$829.00',
    oldPrice: '$1128.00',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
  },
  {
    image: xiaomiTabletImg,
    title: 'Samsung Tab S8',
    price: '$1288.00',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
  },
  {
    image: headphonesImg,
    title: 'Sony WH',
    price: '$359.00',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, reiciendis ducimus! Porro quos magnam ea!',
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
