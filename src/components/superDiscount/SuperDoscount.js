import { useNavigate } from 'react-router-dom';
import styles from './SuperDiscount.module.css';

const SuperDoscount = () => {
  const navigate = useNavigate();

  const shopHandler = () => {
    navigate('/online-store/consumer-electronics');
  };
  return (
    <div className={styles['super-discount']}>
      <div className={styles['super-discount-title']}>
        <h3>Super discount on more than 100 USD</h3>
        <p>Have you ever finally just write dummy info</p>
      </div>
      <button className={styles['shop-now']} onClick={shopHandler}>
        Shop now
      </button>
    </div>
  );
};

export default SuperDoscount;
