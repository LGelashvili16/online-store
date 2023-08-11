import styles from './Saved.module.css';

const saved = () => {
  return (
    <div className={styles['container']}>
      <h3>Saved</h3>

      <div className={styles['cards']}></div>
    </div>
  );
};

export default saved;
