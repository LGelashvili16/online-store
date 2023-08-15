import styles from './SavedCard.module.css';
import cartIcon from '../../assets/cart/shopping_cart.png';
import { useSaveForLater } from '../../contexts/SaveForLaterContext';
import { useCart } from '../../contexts/CartContext';
import { useNavigate, useParams } from 'react-router-dom';

const SavedCard = ({ product }) => {
  const [saveForLater, setSaveForLater] = useSaveForLater();
  const [cart, setCart] = useCart();

  const navigate = useNavigate();

  const productClickHandler = (e) => {
    // if (
    //   e.target !== favoriteRef.current &&
    //   e.target !== favoriteRef.current.children[0]
    // )
    e.stopPropagation();
    navigate(`../product/${product.path}/${parseInt(product.id)}`);
  };

  const addToCartHandler = (e) => {
    e.stopPropagation();

    setCart((prev) => {
      if (prev.length === 0) {
        return [product];
      }

      const findEl = prev.find((el) => {
        return el.id === product.id;
      });

      if (findEl) {
        return prev;
      }

      return [...prev, product];

      // return !prev.includes(productTrue) ? [...prev, productTrue] : prev;
    });
  };

  const removeHandler = (e) => {
    e.stopPropagation();
    setSaveForLater((prev) => {
      return prev.filter((el) => {
        return el.id !== product.id;
      });
    });
  };

  return (
    <div className={styles['card']} onClick={productClickHandler}>
      <div className={styles['saved-card-image']}>
        <img src={product.images[0]} alt="" />
      </div>

      <div className={styles['saved-card-rest']}>
        <div className={styles['saved-card-price-title']}>
          <h4 className={styles['saved-card-price']}>{product.price}</h4>
          <p className={styles['saved-card-title']}>{product.title}</p>
          <p className={styles['saved-card-description']}>
            {product.description}
          </p>
          <p className={styles['saved-card-orders']}>
            Orders: {product.orders}
          </p>
          <p className={styles['saved-card-shipping']}>{product.shipping}</p>
        </div>

        <div className={styles['saved-card-btns']}>
          <button className={styles['move-btn']} onClick={addToCartHandler}>
            <img src={cartIcon} alt="cart" />
            Move to cart
          </button>

          <button className={styles['remove-btn']} onClick={removeHandler}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedCard;
