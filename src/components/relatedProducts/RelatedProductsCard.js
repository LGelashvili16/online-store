import styles from './RelatedProductsCard.module.css';

const RelatedProductsCard = ({ image, title, price }) => {
  return (
    <div className={styles['card']}>
      <div className={styles['card-image']}>
        <img src={image} alt="product" />
      </div>
      <h4>{title}</h4>
      <p>{price}</p>
    </div>
  );
};

export default RelatedProductsCard;
