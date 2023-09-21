// Section 4
import tShirtImg from '../../assets/home/section4/t-shirt.webp';
import jacketImg from '../../assets/home/section4/jacket.webp';
import coatImg from '../../assets/home/section4/coat.webp';
import walletImg from '../../assets/home/section4/wallet.webp';
import bagImg from '../../assets/home/section4/bag.webp';
import shirtImg from '../../assets/home/section4/shirt.webp';
import headphonesS4Img from '../../assets/home/section4/headphones.webp';
import potS4Img from '../../assets/home/section4/pot.webp';
import kettleS4Img from '../../assets/home/section4/kettle.webp';

// Section 5
import parcelsS5Img from '../../assets/home/section5/parcels.png';
import colorsS5Img from '../../assets/home/section5/colors.png';
import airplaneS5Img from '../../assets/home/section5/airplane.png';
import parcelPersonS5Img from '../../assets/home/section5/parcel-person.png';

import searchIco from '../../assets/home/section5/search.svg';
import inventoryIco from '../../assets/home/section5/inventory.svg';
import sendIco from '../../assets/home/section5/send.svg';
import securityIco from '../../assets/home/section5/security.svg';

// Section 5 flags
import uaeIcon from '../../assets/home/section5/UAE.svg';
import ausIcon from '../../assets/home/section5/Aus.svg';
import usaIcon from '../../assets/home/section5/USA.svg';
import rusIcon from '../../assets/home/section5/RUS.svg';
import itaIcon from '../../assets/home/section5/ITA.svg';
import denIcon from '../../assets/home/section5/DEN.svg';
import fraIcon from '../../assets/home/section5/FRA.svg';
import chiIcon from '../../assets/home/section5/CHI.svg';
import gbrIcon from '../../assets/home/section5/GBR.svg';

export const section1Data = [
  'Automobiles',
  'Clothes and wear',
  'Home interiors',
  'Computer and tech',
  'Tools, eqiupments',
  'Sports and outdoor',
  'Animal and pets',
  'Machinery tools',
  'More category',
];

export const pcsAmount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const recommended = [
  {
    id: '1recommended',
    title: 'T-shirts',
    images: [tShirtImg, tShirtImg, tShirtImg, tShirtImg, tShirtImg, tShirtImg],
    price: '$10.30',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    path: 'recommended',
    description: 'T-shirts with multiple',
    description2: 'colors, for men',
  },
  {
    id: '2recommended',
    title: 'T-shirts',
    images: [jacketImg, jacketImg, jacketImg, jacketImg, jacketImg, jacketImg],
    price: '$10.30',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    path: 'recommended',
    description: 'Jeans shorts for men',
    description2: 'blue color',
  },
  {
    id: '3recommended',
    title: 'Brown winter coat',
    images: [coatImg, coatImg, coatImg, coatImg, coatImg, coatImg],
    price: '$12.50',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    path: 'recommended',
    description: 'Brown winter coat',
    description2: 'medium size',
  },
  {
    id: '4recommended',
    title: 'Jeans bag for travel',
    images: [walletImg, walletImg, walletImg, walletImg, walletImg, walletImg],
    price: '$34.00',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    path: 'recommended',
    description: 'Jeans bag for travel',
    description2: 'for men',
  },
  {
    id: '5recommended',
    title: 'Leather wallet',
    images: [bagImg, bagImg, bagImg, bagImg, bagImg, bagImg],
    price: '$99.00',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    path: 'recommended',
    description: 'Leather wallet',
    description2: '',
  },
  {
    id: '6recommended',
    title: 'Canon camera',
    images: [shirtImg, shirtImg, shirtImg, shirtImg, shirtImg, shirtImg],
    price: '$9.99',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    path: 'recommended',
    description: 'Canon camera',
    description2: 'black, 100x zoom',
  },
  {
    id: '7recommended',
    title: 'Headset for gaming',
    images: [
      headphonesS4Img,
      headphonesS4Img,
      headphonesS4Img,
      headphonesS4Img,
      headphonesS4Img,
      headphonesS4Img,
    ],
    price: '$8.99',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    path: 'recommended',
    description: 'Headset for gaming',
    description2: 'with mic',
  },
  {
    id: '8recommended',
    title: 'Smartwatch',
    images: [bagImg, bagImg, bagImg, bagImg, bagImg, bagImg],
    price: '$10.30',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    path: 'recommended',
    description: 'Smartwatch',
    description2: 'silver color modern',
  },
  {
    id: '9recommended',
    title: 'Blue wallet for men',
    images: [potS4Img, potS4Img, potS4Img, potS4Img, potS4Img, potS4Img],
    price: '$10.30',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    path: 'recommended',
    description: 'Blue wallet for men',
    description2: 'leather metarfial',
  },
  {
    id: '10recommended',
    title: 'Jeans bag for travel',
    images: [
      kettleS4Img,
      kettleS4Img,
      kettleS4Img,
      kettleS4Img,
      kettleS4Img,
      kettleS4Img,
    ],
    price: '$80.95',
    oldPrice: '',
    rating: 4,
    orders: 154,
    shipping: 'Free Shipping',
    information: {
      size: 'medium',
      color: 'blue',
      material: 'plastic',
      seller: 'Artel Market',
    },
    saved: false,
    path: 'recommended',
    description: 'Jeans bag for travel',
    description2: 'for men',
  },
];

export const section5ServicesData = [
  {
    image: parcelsS5Img,
    icon: searchIco,
    title: 'Source from',
    title2: 'Industry Hubs',
    link: 'dummy/industry-hubs',
  },
  {
    image: colorsS5Img,
    icon: inventoryIco,
    title: 'Customize Your',
    title2: 'Products',
    link: 'dummy/customize',
  },
  {
    image: airplaneS5Img,
    icon: sendIco,
    title: 'Fast, reliable shipping',
    title2: 'by ocean or air',
    link: 'dummy/shipping',
  },
  {
    image: parcelPersonS5Img,
    icon: securityIco,
    title: 'Product monitoring',
    title2: 'and inspection',
    link: 'dummy/inspection',
  },
];

export const section5SuppliersData = [
  { flag: uaeIcon, name: 'Arabic Emirates', site: 'shopname.ae' },
  { flag: ausIcon, name: 'Australia', site: 'shopname.ae' },
  { flag: usaIcon, name: 'United States', site: 'shopname.ae' },
  { flag: rusIcon, name: 'Russia', site: 'shopname.ru' },
  { flag: itaIcon, name: 'Italy', site: 'shopname.it' },
  { flag: denIcon, name: 'Denmark', site: 'shopname.com.dk' },
  { flag: fraIcon, name: 'France', site: 'shopname.com.fr' },
  { flag: chiIcon, name: 'China', site: 'shopname.ae' },
  { flag: gbrIcon, name: 'Great Bitain', site: 'shopname.co.uk' },
];
