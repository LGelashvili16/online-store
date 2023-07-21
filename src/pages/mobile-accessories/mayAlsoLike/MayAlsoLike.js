import React from 'react';
import styles from './MayAlsoLike.module.css';
import MayAlsoLikeCard from './MayAlsoLikeCard';
import { mayAlsoLikeData } from '../../../data/mobileAccessories/mobileAccessoriesData';

const MayAlsoLike = () => {
  return (
    <div className={styles['may-also-like']}>
      <div className={styles['may-also-like-title']}>
        <h2>You may also like</h2>
      </div>

      <div className={styles['may-also-like-cards']}>
        {mayAlsoLikeData.map((itm, i) => {
          return (
            <MayAlsoLikeCard
              key={i}
              image={itm.image}
              price={itm.price}
              description={itm.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MayAlsoLike;
