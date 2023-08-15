import React, { useEffect, useRef, useState } from 'react';
import styles from './MayAlsoLike.module.css';
import MayAlsoLikeCard from './MayAlsoLikeCard';
import { mayAlsoLikeData } from '../../../data/mobileAccessories/mobileAccessoriesData';

import { motion } from 'framer-motion';

const MayAlsoLike = () => {
  const [cardsContainerWidth, setCardsContainerWidth] = useState(0);
  const containerRef = useRef();

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
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MayAlsoLike;
