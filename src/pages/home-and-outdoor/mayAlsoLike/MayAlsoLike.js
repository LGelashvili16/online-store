import React, { useEffect, useRef, useState } from 'react';
import styles from './MayAlsoLike.module.css';
import MayAlsoLikeCard from './MayAlsoLikeCard';
import { mayAlsoLikeData } from '../../../data/mobileAccessories/mobileAccessoriesData';

import { motion } from 'framer-motion';
import { useRecommendedProducts } from '../../../contexts/ProductsContext';

const MayAlsoLike = () => {
  const [cardsContainerWidth, setCardsContainerWidth] = useState(0);
  const containerRef = useRef();
  const [, , , alsoLikeProducts] = useRecommendedProducts();

  useEffect(() => {
    setCardsContainerWidth(
      containerRef.current.scrollWidth - containerRef.current.offsetWidth
    );
  }, []);

  return (
    <div className={styles['may-also-like']}>
      <div className={styles['may-also-like-title']}>
        <h2>You may also like</h2>
      </div>

      <motion.div
        className={styles['may-also-like-cards-container']}
        ref={containerRef}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -cardsContainerWidth }}
          className={styles['may-also-like-cards']}
        >
          {alsoLikeProducts.map((itm, i) => {
            return (
              <MayAlsoLikeCard
                key={i}
                prod={itm}
                image={itm.image}
                price={itm.price}
                description={itm.description}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MayAlsoLike;
