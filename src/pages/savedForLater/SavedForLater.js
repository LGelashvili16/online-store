import { useSaveForLater } from '../../contexts/SaveForLaterContext';
import styles from './SavedForLater.module.css';
import SavedForLaterCard from './SavedForLaterCard';

const SavedForLater = () => {
  const [saveForLater, setSaveForLater] = useSaveForLater();

  return (
    <div className={styles['saved']}>
      <h3>Saved for later</h3>

      <div className={styles['saved-cards']}>
        {saveForLater.length > 0 ? (
          saveForLater.map((prod, i) => {
            return <SavedForLaterCard key={i} product={prod} />;
          })
        ) : (
          <p className={styles['no-products']}>No saved products found!</p>
        )}
      </div>
    </div>
  );
};

export default SavedForLater;
