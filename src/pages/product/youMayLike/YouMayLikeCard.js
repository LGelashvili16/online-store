import { useNavigate } from 'react-router-dom';
import styles from './YouMayLikeCard.module.css';

const YouMayLikeCard = ({ prod }) => {
  const navigate = useNavigate();

  const productClickHandler = (e) => {
    navigate(
      `/online-store/product/${`${prod.path}`}/${parseInt(parseInt(prod.id))}`
    );
  };

  return (
    <div className={styles['card']} onClick={productClickHandler}>
      <div className={styles['card-image']}>
        <img src={prod.images[0]} alt="product" />
      </div>

      <div className={styles['card-title-price']}>
        <h4>{prod.title}</h4>
        <p>{prod.price}</p>
      </div>
    </div>
  );
};

export default YouMayLikeCard;
