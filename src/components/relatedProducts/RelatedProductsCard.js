import { useNavigate } from 'react-router-dom';
import styles from './RelatedProductsCard.module.css';

const RelatedProductsCard = ({ prod }) => {
  const navigate = useNavigate();

  const productClickHandler = () => {
    navigate(
      `/online-store/product/${`${prod.path}`}/${parseInt(parseInt(prod.id))}`
    );
  };
  return (
    <div className={styles['card']} onClick={productClickHandler}>
      <div className={styles['card-image']}>
        <img src={prod.images[0]} alt="product" />
      </div>
      <h4>{prod.title}</h4>
      <p>{prod.priceRange}</p>
    </div>
  );
};

export default RelatedProductsCard;
