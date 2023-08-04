import styles from './SavedForLaterCard.module.css';
import cartIcon from '../../assets/cart/shopping_cart.png';

const SavedForLaterCard = ({ product }) => {
  return (
    <div className={styles['saved-card']}>
      <div className={styles['saved-card-image']}>
        <img src={product.images[0]} alt="" />
      </div>

      <h4 className={styles['saved-card-price']}>{product.price}</h4>

      <p className={styles['saved-card-title']}>{product.title}</p>

      <button className={styles['saved-card-btn']}>
        <img src={cartIcon} alt="cart" />
        Move to cart
      </button>
    </div>
  );
};

export default SavedForLaterCard;
