import { useCart } from '../../contexts/CartContext';
import styles from './Cart.module.css';
import CartCard from './CartCard';
import backIcon from '../../assets/item/arrow_back.png';
import { useNavigate } from 'react-router-dom';

import americanExpressIcon from '../../assets/cart/american-express.png';
import mastercardIcon from '../../assets/cart/mastercard.png';
import paypalIcon from '../../assets/cart/paypal.png';
import visaIcon from '../../assets/cart/visa.png';
import applePayIcon from '../../assets/cart/applePay.png';
import secureIcon from '../../assets/cart/secure.png';
import supportIcon from '../../assets/cart/support.png';
import deliveryIcon from '../../assets/cart/delivery.png';
import SuperDoscount from '../../components/superDiscount/SuperDoscount';
import SavedForLater from '../../components/savedForLater/SavedForLater';
import { useState } from 'react';

const Cart = () => {
  const [quantity, setQuantity] = useState([]);
  const [cart, setCart] = useCart();

  // const localStorageCart = JSON.parse(window.localStorage.getItem('cart'));
  // console.log(localStorageCart);

  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, cur, index) => {
    return (
      acc +
      (+cur.price.slice(1, cur.price.length) * quantity[index]?.quantity || 1)
    );
  }, 0);

  const discount = 0;

  const tax = subtotal * 0.18;

  const total = subtotal + tax;

  const goBackHandler = () => {
    navigate(-1);
  };

  const removeAllHandler = () => {
    setCart([]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    e.target.children[0].value = '';
  };

  return (
    <div className={styles['cart-wrapper']}>
      <h3 className={styles['cart-title']}>My cart ({cart.length})</h3>

      <div className={styles['cart']}>
        <div className={styles['products']}>
          {cart.map((prod, i) => {
            return (
              <CartCard
                key={i}
                product={prod}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            );
          })}

          <div className={styles['products-btns']}>
            <button className={styles['back-btn']} onClick={goBackHandler}>
              <img src={backIcon} alt="back" />
              Back to shop
            </button>
            <button className={styles['remove-all']} onClick={removeAllHandler}>
              Remove all
            </button>
          </div>
        </div>

        <div className={styles['checkout-wrapper']}>
          <div className={styles['coupon']}>
            <h4>Have a coupon?</h4>

            <form onSubmit={submitHandler} className={styles['coupon-form']}>
              <input type="text" placeholder="Add coupon" />
              <button>Apply</button>
            </form>
          </div>

          <div className={styles['checkout']}>
            <div className={styles['checkout-calc']}>
              <div className={styles['subtotal']}>
                <span className={styles['subtotal-name']}>Subtotal:</span>
                <span className={styles['subtotal-money']}>
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className={styles['discount']}>
                <span className={styles['discount-name']}>Discount:</span>
                <span className={styles['discount-money']}>
                  - ${discount.toFixed(2)}
                </span>
              </div>

              <div className={styles['tax']}>
                <span className={styles['tax-name']}>Tax:</span>
                <span className={styles['tax-money']}>+ ${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className={styles['total-paying-wrapper']}>
              <div className={styles['total']}>
                <span className={styles['total-name']}>Total:</span>
                <span className={styles['total-money']}>
                  ${total.toFixed(2)}
                </span>
              </div>

              <button className={styles['checkout-btn']}>
                Checkout&nbsp;
                <span className={styles['checkout-btn-items-number']}>
                  ({cart.length})
                </span>
              </button>

              <ul className={styles['paying-methods']}>
                <li>
                  <img src={americanExpressIcon} alt="card" />
                </li>
                <li>
                  <img src={mastercardIcon} alt="card" />
                </li>
                <li>
                  <img src={paypalIcon} alt="card" />
                </li>
                <li>
                  <img src={visaIcon} alt="card" />
                </li>
                <li>
                  <img src={applePayIcon} alt="card" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['customer-info']}>
        <div className={styles['customer-info-secure']}>
          <div className={styles['customer-info-image']}>
            <img src={secureIcon} alt="" />
          </div>

          <div className={styles['customer-info-title']}>
            <h4>Secure payment</h4>
            <p>Have you ever finally just</p>
          </div>
        </div>

        <div className={styles['customer-info-support']}>
          <div className={styles['customer-info-image']}>
            <img src={supportIcon} alt="" />
          </div>

          <div className={styles['customer-info-title']}>
            <h4>Secure payment</h4>
            <p>Have you ever finally just</p>
          </div>
        </div>

        <div className={styles['customer-info-delivery']}>
          <div className={styles['customer-info-image']}>
            <img src={deliveryIcon} alt="" />
          </div>

          <div className={styles['customer-info-title']}>
            <h4>Secure payment</h4>
            <p>Have you ever finally just</p>
          </div>
        </div>
      </div>

      <h3 className={styles['res-saved-title']}>Saved for later</h3>

      <div className={styles['saved-for-later']}>
        <SavedForLater />
      </div>
      <div className={styles['super-discount']}>
        <SuperDoscount />
      </div>
    </div>
  );
};

export default Cart;
