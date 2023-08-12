import { useEffect, useRef, useState } from 'react';
import { useSaveForLater } from '../../contexts/SaveForLaterContext';
import styles from './SavedForLater.module.css';
import SavedForLaterCard from './SavedForLaterCard';
import { motion } from 'framer-motion';

const SavedForLater = () => {
  const [saveForLater, setSaveForLater] = useSaveForLater();
  const [savedProductsWidth, setSavedProductsWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const savedProductsRef = useRef();

  const onDragStart = () => {
    setIsDragging(true);
  };

  const onDragEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    setSavedProductsWidth(
      savedProductsRef.current.scrollWidth -
        savedProductsRef.current.offsetWidth
    );
  }, []);

  return (
    <div className={styles['saved']}>
      <h3>Saved for later</h3>

      <motion.div
        className={styles['saved-cards-container']}
        ref={savedProductsRef}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -savedProductsWidth }}
          whileDrag={{ cursor: 'grabbing' }}
          className={styles['saved-cards']}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        >
          {saveForLater.length > 0 ? (
            saveForLater.map((prod, i) => {
              return (
                <SavedForLaterCard
                  key={i}
                  product={prod}
                  isDragging={isDragging}
                />
              );
            })
          ) : (
            <p className={styles['no-products']}>No saved products found!</p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SavedForLater;
