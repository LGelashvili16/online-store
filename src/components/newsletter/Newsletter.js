import styles from './Newsletter.module.css';

import mailIcon from '../../assets/newsletter/mail.svg';
import { useState } from 'react';

const Newsletter = () => {
  const [showIcon, setShowIcon] = useState(false);

  const hideIconHandler = () => {
    setShowIcon(!showIcon);
  };

  const showIconHandler = () => {
    setShowIcon(false);
  };

  return (
    <section className={styles['newsletter']}>
      <div className={styles['newsletter-subscribe']}>
        <h3>Subscribe on our newsletter</h3>
        <p>
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <form className={styles['newsletter-form']}>
          <img
            className={`${styles['newsletter-mailIcon']} ${
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
    </section>
  );
};

export default Newsletter;
