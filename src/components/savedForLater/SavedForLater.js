import { useSaveForLater } from '../../contexts/SaveForLaterContext';
import styles from './SavedForLater.module.css';
import SavedForLaterCard from './SavedForLaterCard';

const SavedForLater = () => {
  const [saveForLater, setSaveForLater] = useSaveForLater();

  return (
    <div className={styles['saved']}>
      <h3>Saved for later</h3>

      <div>
        {saveForLater.map((prod, i) => {
          return <SavedForLaterCard />;
        })}
      </div>
    </div>
  );
};

export default SavedForLater;
