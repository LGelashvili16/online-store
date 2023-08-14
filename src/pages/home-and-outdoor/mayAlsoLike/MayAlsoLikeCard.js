import React from 'react';
import styles from './MayAlsoLikeCard.module.css';

const MayAlsoLikeCard = ({ image, price, description }) => {
  return (
    <div className={styles['card']}>
      <div className={styles['card-image']}>
        <img src={image} alt="product" />
      </div>
      <h3>{price}</h3>
      <p>{description}</p>
    </div>
  );
};

export default MayAlsoLikeCard;
