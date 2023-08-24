import SavedCard from './SavedCard';
import styles from './Saved.module.css';
import { useSaveForLater } from '../../contexts/SaveForLaterContext';

const Saved = () => {
  const [saveForLater] = useSaveForLater();

  return (
    <div className={styles['container']}>
      <h3>Saved</h3>

      <div className={styles['cards']}>
        {saveForLater.length > 0 ? (
          saveForLater.map((prod, i) => {
            return <SavedCard key={i} product={prod} />;
          })
        ) : (
          <p className={styles['no-products']}>No saved products found!</p>
        )}
      </div>
    </div>
  );
};

export default Saved;
