import { useNavigate } from 'react-router-dom';
import styles from './DiscountedProduct.module.css';

const DiscountedProduct = (props) => {
  const navigate = useNavigate();

  const categoryHandler = (name) => {
    if (!props.isDragging) {
      navigate(`consumer-electronics/${name.replaceAll(' ', '-')}`);
    }
  };

  return (
    <div
      className={styles['discounted-product-card']}
      onClick={() => {
        categoryHandler(props.title.toLowerCase());
      }}
    >
      <div className={styles['discounted-product-img']}>
        <img src={props.image} alt={props.title} />
      </div>
      <h3 className={styles['discounted-product-title']}>{props.title}</h3>
      <p className={styles['discounted-product-discount']}>{props.discount}</p>
    </div>
  );
};

export default DiscountedProduct;
