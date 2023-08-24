import React from 'react';
import styles from './MayAlsoLikeCard.module.css';
import { useNavigate } from 'react-router-dom';

const MayAlsoLikeCard = ({ prod }) => {
  const navigate = useNavigate();

  const productClickHandler = (e) => {
    navigate(`../product/${`${prod.path}`}/${parseInt(parseInt(prod.id))}`);
  };

  return (
    <div className={styles['card']} onClick={productClickHandler}>
      <div className={styles['card-image']}>
        <img src={prod.images[0]} alt="product" />
      </div>
      <h3>{prod.price}</h3>
      <p>{prod.description}</p>
    </div>
  );
};

export default MayAlsoLikeCard;
