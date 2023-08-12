import styles from './SavedForLaterCard.module.css';
import cartIcon from '../../assets/cart/shopping_cart.png';
import { useCart } from '../../contexts/CartContext';
import { useSaveForLater } from '../../contexts/SaveForLaterContext';
import { useNavigate } from 'react-router-dom';

const SavedForLaterCard = ({ product, isDragging }) => {
  const [saveForLater, setSaveForLater] = useSaveForLater();
  const [cart, setCart] = useCart();

  const navigate = useNavigate();

  const productClickHandler = () => {
    if (!isDragging) {
      navigate(`../product/${`mobile-accessory`}/${product.id}`);
    }
  };

  const addToCartHandler = (e) => {
    e.stopPropagation();
    setCart((prev) => {
      if (prev.length === 0) {
        return [product];
      }

      return !prev.includes(product) ? [...prev, product] : prev;
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
    <div className={styles['saved-card']} onClick={productClickHandler}>
      <div className={styles['saved-card-image']}>
        <img src={product.images[0]} alt="" />
      </div>

      <div className={styles['saved-card-rest']}>
        <div className={styles['saved-card-price-title']}>
          <h4 className={styles['saved-card-price']}>{product.price}</h4>

          <p className={styles['saved-card-title']}>{product.title}</p>
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

export default SavedForLaterCard;
