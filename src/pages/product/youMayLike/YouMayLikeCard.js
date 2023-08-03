import styles from './YouMayLikeCard.module.css';

const YouMayLikeCard = ({ image, price, title }) => {
  return (
    <div className={styles['card']}>
      <div className={styles['card-image']}>
        <img src={image} alt="product" />
      </div>

      <div className={styles['card-title-price']}>
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default YouMayLikeCard;
