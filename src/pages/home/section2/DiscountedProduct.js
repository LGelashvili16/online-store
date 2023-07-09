import styles from './DiscountedProduct.module.css';

const DiscountedProduct = (props) => {
  return (
    <div className={styles['discounted-product-card']}>
      <div className={styles['discounted-product-img']}>
        <img src={props.image} alt={props.title} />
      </div>
      <h3 className={styles['discounted-product-title']}>{props.title}</h3>
      <p className={styles['discounted-product-discount']}>{props.discount}</p>
    </div>
  );
};

export default DiscountedProduct;
