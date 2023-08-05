import { useEffect, useRef, useState } from 'react';
import styles from './CartCard.module.css';
import dropdownArrow from '../../assets/header/icons/expand-arrow.svg';
import minusIcon from '../../assets/cart/minus.png';
import plusIcon from '../../assets/cart/plus.png';
import optionsIcon from '../../assets/cart/options.png';

import { pcsAmount } from '../../data/home/homeData';
import { useCart } from '../../contexts/CartContext';

const CartCard = ({ product }) => {
  const currentPrice = +product.price.slice(1, product.price.length);

  const [pcs, setPcs] = useState(1);
  const [price, setPrice] = useState(currentPrice * +pcs);
  const [showPcsList, setShowPcsList] = useState(false);

  const [cart, setCart] = useCart();

  const pcsRef = useRef();
  const pcsListRef = useRef();

  const pcsListHandler = () => {
    setShowPcsList(!showPcsList);
  };

  const pcsHandler = (e) => {
    setPcs(+e.target.textContent);
  };

  const removeHandler = () => {
    setCart((prev) => {
      return prev.filter((prod) => {
        return prod.id !== product.id;
      });
    });
  };

  useEffect(() => {
    setPrice(+currentPrice * Number(pcs));
  }, [pcs, currentPrice]);

  // Attach window click listener
  const windowClickHandler = (e) => {
    if (e.target !== pcsRef.current && e.target !== pcsListRef.current) {
      setShowPcsList(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', windowClickHandler);

    return () => window.removeEventListener('click', windowClickHandler);
  }, []);

  return (
    <div className={styles['product']}>
      <div className={styles['product-image-info']}>
        <div className={styles['image']}>
          <img src={product.images[0]} alt="product" />
        </div>

        <div className={styles['product-info']}>
          <h4>{product.title}</h4>
          <div className={styles['product-info-description']}>
            <span>Size: {product.information.size},</span>
            <span>Color: {product.information.color}, </span>
            <span>Material: {product.information.material}</span>
            <br />
            <span>Seller: {product.information.seller}</span>
          </div>

          <div className={styles['card-btns']}>
            <button className={styles['remove-btn']} onClick={removeHandler}>
              Remove
            </button>
            <button className={styles['later-btn']}>Save for later</button>
          </div>

          <div className={styles['resp-quantity']}>
            <button>
              {' '}
              <img src={minusIcon} alt="" />
            </button>
            <span>{pcs}</span>
            <button>
              <img src={plusIcon} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className={styles['price-quantity']}>
        <img src={optionsIcon} alt="" />
        <span className={styles['price']}>${price}</span>

        <div
          className={styles['pcs-dropdown']}
          onClick={pcsListHandler}
          ref={pcsRef}
        >
          <p className={styles['pcs-text']}>
            <span>Qty:</span>
            <span>{pcs}</span>
          </p>
          <img src={dropdownArrow} alt="Arrow" />
          <ul
            className={`${styles['pcs-list']}  ${
              !showPcsList ? styles['hidden'] : ''
            }`}
            ref={pcsListRef}
          >
            {pcsAmount.map((n, i) => {
              return (
                <li key={i} onClick={pcsHandler}>
                  {n}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
