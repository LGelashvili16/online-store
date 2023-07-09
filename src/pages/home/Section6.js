import styles from './Section6.module.css';
import mailIcon from '../../assets/home/section6/mail.svg';
import { useState } from 'react';

const Section6 = () => {
  const [showIcon, setShowIcon] = useState(false);

  const hideIconHandler = () => {
    setShowIcon(!showIcon);
  };

  const showIconHandler = () => {
    setShowIcon(false);
  };

  return (
    <div className={styles['section6']}>
      <div className={styles['section6-subscribe']}>
        <h3>Subscribe on our newsletter</h3>
        <p>
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <form className={styles['section6-form']}>
          <img
            className={`${styles['section6-mailIcon']} ${
              showIcon ? styles['hidden'] : ''
            }`}
            src={mailIcon}
            alt=""
          />
          <input
            type="email"
            placeholder="Email"
            onClick={hideIconHandler}
            onBlur={showIconHandler}
          />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Section6;
