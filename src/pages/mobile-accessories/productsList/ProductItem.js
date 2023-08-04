import styles from './ProductItem.module.css';
import favoriteIcon from '../../../assets/mobile-accessories/favorite.svg';
import favoriteFilledIcon from '../../../assets/mobile-accessories/favorite_filled.png';
import filledStarImg from '../../../assets/mobile-accessories/filled-star.svg';
import emptyStarImg from '../../../assets/mobile-accessories/empty-star.svg';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useSaveForLater } from '../../../contexts/SaveForLaterContext';
import { useMobileAccessoryProducts } from '../../../contexts/ProductsContext';

const ProductItem = ({ product, layout }) => {
  const [saveForLater, setSaveForLater] = useSaveForLater();
  const [mobileAccessoryProducts, setMobileAccessoryProducts] =
    useMobileAccessoryProducts();

  const favoriteRef = useRef();
  const navigation = useNavigate();

  const productClickHandler = (e) => {
    if (
      e.target !== favoriteRef.current &&
      e.target !== favoriteRef.current.children[0]
    )
      navigation(`../product/${`mobile-accessory`}/${product.id}`);
  };

  const favoriteHandler = () => {
    // Update Globally
    setMobileAccessoryProducts((prev) => {
      prev.forEach((el) => {
        if (el.id === product.id) {
          el.saved = !el.saved;
        }
      });

      return prev;
    });

    if (product.saved) {
      setSaveForLater((prev) => {
        if (!prev.includes(product)) {
          return [...prev, product];
        }
        if (prev.includes(product)) {
          return prev;
        }
      });
    }

    if (!product.saved) {
      setSaveForLater((prev) => {
        return prev.filter((prod) => {
          return prod !== product;
        });
      });
    }
  };

  return (
    <div
      className={`${layout ? styles['product'] : styles['g-product']}`}
      onClick={productClickHandler}
    >
      <div
        className={`${
          layout ? styles['product-image'] : styles['g-product-image']
        }`}
      >
        <img src={product.images[0]} alt="product images" />
      </div>

      <div
        className={`${
          layout ? styles['product-details'] : styles['g-product-details']
        }`}
      >
        <h4
          className={`${
            layout
              ? styles['product-details-title']
              : styles['g-product-details-title']
          }`}
        >
          {product.title}
        </h4>

        <div
          className={`${
            layout ? styles['product-price'] : styles['g-product-price']
          }`}
        >
          <h2>{product.price}</h2>
          <h3>{product.oldPrice}</h3>
        </div>

        <div className={styles['product-rating']}>
          <div className={styles['product-rating-stars']}>
            <img src={filledStarImg} alt="star" />
            <img src={filledStarImg} alt="star" />
            <img src={filledStarImg} alt="star" />
            <img src={filledStarImg} alt="star" />
            <img src={emptyStarImg} alt="star" />
            <p>7.5</p>
          </div>

          <div
            className={`${
              layout ? styles['product-rating-dot'] : styles['hidden']
            }`}
          ></div>

          <p
            className={`${
              layout ? styles['product-rating-orders'] : styles['hidden']
            }`}
          >
            {product.orders} orders
          </p>

          <div
            className={`${
              layout ? styles['product-rating-dot'] : styles['hidden']
            } ${styles['dot2']}`}
          ></div>

          <p
            className={`${
              layout ? styles['product-rating-shipping'] : styles['hidden']
            }`}
          >
            {product.shipping}
          </p>
        </div>

        <p
          className={`${
            layout ? styles['product-description'] : styles['hidden']
          }`}
        >
          {product.description}
        </p>
        <button
          className={`${
            layout ? styles['product-details-btn'] : styles['hidden']
          }`}
        >
          View details
        </button>
      </div>

      <div
        className={`${
          layout ? styles['product-favorite'] : styles['g-product-favorite']
        }`}
        ref={favoriteRef}
        onClick={favoriteHandler}
      >
        <img
          src={product.saved ? favoriteFilledIcon : favoriteIcon}
          alt="favorite"
        />
      </div>
    </div>
  );
};

export default ProductItem;
