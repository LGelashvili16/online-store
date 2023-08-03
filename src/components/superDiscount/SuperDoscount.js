import styles from './SuperDiscount.module.css';

const SuperDoscount = () => {
  return (
    <div className={styles['super-discount']}>
      <div className={styles['super-discount-title']}>
        <h3>Super discount on more than 100 USD</h3>
        <p>Have you ever finally just write dummy info</p>
      </div>
      <button>Shop now</button>
    </div>
  );
};

export default SuperDoscount;
